
/**
 * @component
 * 
 * Renders a list of <option> elements for a <select> input.
 * Each category object in the array is used to generate one option.
 * 
 * @param {{id: number, name: string}[]} categories - Array of category objects.

 * @returns {React.ReactNode} - An array of <option> elements representing the categories.
 * 
 */
function Categories({ categories }) {
    return (
        categories.map((item, i) => {
            return (
                <option value={item.id} key={i}>{item.name}</option>
            );
        })
    );
}

export default Categories;