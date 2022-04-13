import { useEffect, useState } from "react";
import Card from "../UI/Card/Card";
import MealItem from "../MealItem/MealItem";
import style from "./MealsAvailable.module.css";

function MealsAvailable() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://slack.test/api/meals");
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const json_response = await response.json();
      setMeals(json_response);
      setIsLoading(false);
    }
    try {
      fetchMeals().catch((error) => {
        setIsLoading(false);
        setHttpError(error.message);
      });
    } catch (error) {
      setIsLoading(false);
      setHttpError(error.message);
    }
  }, []);

  const mealsListArr = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  if (isLoading) {
    return (
      <section className={style.MealsLoading}>
        <p>LOADING...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={style.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  return (
    <section className={style.meals}>
      <Card>
        <ul>{mealsListArr}</ul>
      </Card>
    </section>
  );
}

export default MealsAvailable;
