import { Fragment } from "react";
import MealsSummary from "../MealsSummary/MealsSummary";
import MealsAvailable from "../MealsAvailable/MealsAvailable";

function Meals() {
  return (
    <Fragment>
      <MealsSummary />
      <MealsAvailable />
    </Fragment>
  );
}

export default Meals;
