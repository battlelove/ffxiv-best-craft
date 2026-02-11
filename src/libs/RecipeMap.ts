import recipeText from '@/assets/recipes_zh.csv?raw';
import { searchLocalItem } from '@/libs/ItemMap';

export interface LocalRecipe {
    name: string;
    resultItemId: number;
    yield: number;
    ingredients: { id: number; name: string; amount: number }[];
}

// Map<IngredientItemID, LocalRecipe[]>
const ingredientToRecipeMap = new Map<number, LocalRecipe[]>();
// Map<ResultItemID, LocalRecipe[]>
const resultToRecipeMap = new Map<number, LocalRecipe[]>();
let isLoaded = false;

function parseLine(line: string): string[] {
    const parts = line.split(',');
    return parts.map(p => p.trim());
}

function loadRecipes() {
    if (isLoaded) return;

    // Ensure ItemMap is loaded first (it lazy loads inside searchLocalItem)
    // format:
    // 品項名,單次成品數量,材料名,數量,材料名,數量...

    const lines = recipeText.split(/\r?\n/);
    let count = 0;

    for (let i = 1; i < lines.length; i++) { // Skip header line 0
        const line = lines[i].trim();
        if (!line) continue;

        const cols = parseLine(line);
        if (cols.length < 4) continue;

        const resultName = cols[0];
        const resultYield = parseInt(cols[1], 10) || 1;

        const resultId = searchLocalItem(resultName);
        if (!resultId) {
            // console.warn(`[RecipeMap] Unknown result item: ${resultName}`);
            continue;
        }

        const ingredients: { id: number; name: string; amount: number }[] = [];

        // Ingredients start at index 2, pairs of (Name, Qty)
        for (let j = 2; j < cols.length; j += 2) {
            const matName = cols[j];
            const matQtyStr = cols[j + 1];

            if (!matName) break;

            const matQty = parseInt(matQtyStr, 10);
            if (!matQty) continue;

            const matId = searchLocalItem(matName);
            if (matId) {
                ingredients.push({ id: matId, name: matName, amount: matQty });
            } else {
                // If we can't find ID for a material, we can't fully solve it.
                // But we can store it with ID=0 or similar? 
                // For now skip or use negative placeholder?
                // Let's rely on robust items_zh.txt coverage.
            }
        }

        if (ingredients.length === 0) continue;

        const recipe: LocalRecipe = {
            name: resultName,
            resultItemId: resultId,
            yield: resultYield,
            ingredients
        };

        // Index by EACH ingredient
        for (const ing of ingredients) {
            if (!ingredientToRecipeMap.has(ing.id)) {
                ingredientToRecipeMap.set(ing.id, []);
            }
            ingredientToRecipeMap.get(ing.id)?.push(recipe);
        }

        // Index by Result Item
        if (!resultToRecipeMap.has(resultId)) {
            resultToRecipeMap.set(resultId, []);
        }
        resultToRecipeMap.get(resultId)?.push(recipe);

        count++;
    }

    isLoaded = true;
    console.log(`[RecipeMap] Loaded ${count} recipes.`);
}

export function findRecipesUsingItem(itemId: number): LocalRecipe[] {
    loadRecipes();
    return ingredientToRecipeMap.get(itemId) || [];
}

export function findRecipesByResultItem(itemId: number): LocalRecipe[] {
    loadRecipes();
    return resultToRecipeMap.get(itemId) || [];
}
