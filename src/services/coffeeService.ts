const API_URL = import.meta.env.VITE_API_URL;

const getHotCoffee = async () => {
  try {
    const response = await fetch(`${API_URL}/hot`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (error) {
    console.log(
      "🚀 ~ file: CoffeeService.ts ~ line 15 ~ getHotCoffee ~ error",
      error
    );

    return { status: 500 };
  }
};

const getIcedCoffee = async () => {
  try {
    const response = await fetch(`${API_URL}/iced`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (error) {
    console.log(
      "🚀 ~ file: CoffeeService.ts ~ line 35 ~ getIcedCoffee ~ error",
      error
    );

    return { status: 500 };
  }
};

export const coffeeService = {
  getHotCoffee,
  getIcedCoffee,
};
