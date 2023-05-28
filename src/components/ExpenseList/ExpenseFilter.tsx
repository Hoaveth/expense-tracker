import React from "react";

interface Props {
  categories: string[];
  handleSetActiveCategory: (value: string) => void;
}

const ExpenseFilter = ({ categories, handleSetActiveCategory }: Props) => {
  return (
    <select
      className="form-select mb-5 mt-5"
      onChange={(e) => handleSetActiveCategory(e.target.value)}
    >
      <option value="">All Categories</option>
      {categories.map((category, index) => {
        return (
          <option key={index} value={category}>
            {category}
          </option>
        );
      })}
    </select>
  );
};

export default ExpenseFilter;
