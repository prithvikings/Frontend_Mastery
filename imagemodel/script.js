const btn = document.getElementById("btn");
const image = document.getElementById("image");
const prompt = document.getElementById("prompt");

const getData = async () => {
  const userInput = prompt.value.trim();
  const api = `https://image.pollinations.ai/prompt/${userInput}`; // Use the user's input in the API URL
  try {
    const response = await fetch(api);
    if (response.ok) {
      image.src = api; // Use API URL directly as the image source
      image.style.display = "block";
    } else {
      console.error(
        "Error: Unable to fetch the image. Status:",
        response.status
      );
    }
  } catch (error) {
    console.error("Error fetching image data:", error);
  }
};

btn.addEventListener("click", getData);
