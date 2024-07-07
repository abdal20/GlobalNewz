import React from "react";
const CategoryMenu = ({categories, onSelectCategory }) => {
    return(
        <div className="category-menu"> 
        {categories.map((category) => (
            <button key={category} onClick={() => onSelectCategory(category)}>

                {category}
            </button>
        ))}



        </div>
    );

};
export default CategoryMenu;