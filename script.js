const orders = [
    {
        character: "images/mymelody.png",
        treat: "cupcake",
        frosting: "pink",
        sprinkles: "hearts",
        name: "My Melody",
    },
    {
        character: "images/kuromi.png",
        treat: "cookie",
        frosting: "strawberry",
        sprinkles: "stars",
        name: "Kuromi",
    },
    {
        character: "images/badtzmaru.png",
        treat: "donut",
        frosting: "chocolate",
        sprinkles: "snowflakes",
        name: "Badtz-Maru",
    },
    {
        character: "images/cinnamonroll.png",
        treat: "cupcake",
        frosting: "vanilla",
        sprinkles: "snowflakes",
        name: "Cinnamon Roll",
    },
    {
        character: "images/mysweetpiano.png",
        treat: "cake",
        frosting: "chocolate",
        sprinkles: "hearts",
        name: "My Sweet Piano",
    },
    {
        character: "images/keroppi.png",
        treat: "cookie",
        frosting: "strawberry",
        sprinkles: "rainbow",
        name: "Keroppi",
    },
    {
        character: "images/pochacco.png",
        treat: "cupcake",
        frosting: "vanilla",
        sprinkles: "snowflakes",
        name: "Pochacco",
    },
    {
        character: "images/pompompurin.png",
        treat: "cake",
        frosting: "chocolate",
        sprinkles: "rainbow",
        name: "Pompompurin",
    },
    {
        character: "images/retsuko.png",
        treat: "donut",
        frosting: "pink",
        sprinkles: "stars",
        name: "Retsuko",
    },
    {
        character: "images/wishmemell.png",
        treat: "cookie",
        frosting: "pink",
        sprinkles: "stars",
        name: "Wish Me Mell",
    },
    {
        character: "images/chococat.png",
        treat: "cake",
        frosting: "chocolate",
        sprinkles: "snowflakes",
        name: "Chococat",
    },
    {
        character: "images/hangyodon.png",
        treat: "cupcake",
        frosting: "vanilla",
        sprinkles: "rainbow",
        name: "Hangyodon",
    },
    {
        character: "images/tuxedosam.png",
        treat: "cookie",
        frosting: "strawberry",
        sprinkles: "hearts",
        name: "Tuxedosam",
    },
    {
        character: "images/pekkle.png",
        treat: "cake",
        frosting: "vanilla",
        sprinkles: "stars",
        name: "Tuxedosam",
    },
    {
        character: "images/mycharacter.png",
        treat: "donut",
        frosting: "strawberry",
        sprinkles: "hearts",
        name: "Honza",
    },
];

let currentOrderIndex = 0;

const customerImage = document.getElementById("customer-image");
const orderText = document.getElementById("order-text");
const treatOptions = document.getElementById("treat-options");
const frostingOptions = document.getElementById("frosting-options");
const sprinklesOptions = document.getElementById("sprinkles-options");
const feedbackDiv = document.getElementById("feedback");
const storyModal = document.getElementById("story-modal");
const startGameButton = document.getElementById("start-game-button");

function displayOrder(order) {
    customerImage.src = order.character;
    orderText.textContent = `Hello Kitty needs to make a ${order.treat} with ${order.frosting} frosting and ${order.sprinkles} sprinkles for ${order.name}!`;
}

function createOptions(optionsContainer, options, optionType) {
    options.forEach(option => {
        const img = document.createElement("img");
        img.src = `images/${option}.png`;
        img.alt = option;
        img.classList.add("option-image");
        img.addEventListener("click", () => {
            selectedOptions[optionType] = option;

            const allImages = optionsContainer.querySelectorAll(".option-image");
            allImages.forEach(image => image.classList.remove("selected"));
            img.classList.add("selected");
        });
        optionsContainer.appendChild(img);
    });
}

const treats = ["cupcake", "cookie", "cake", "donut"];
const frostings = ["pink", "chocolate", "vanilla", "strawberry"];
const sprinkles = ["hearts", "stars", "rainbow", "snowflakes"];

let selectedOptions = {
    treat: null,
    frosting: null,
    sprinkles: null,
};

createOptions(treatOptions, treats, "treat");
createOptions(frostingOptions, frostings, "frosting");
createOptions(sprinklesOptions, sprinkles, "sprinkles");


function checkOrder() {
    const currentOrder = orders[currentOrderIndex];

    if (currentOrderIndex === orders.length - 1) { // Second to last order (your character)
        const selectedTreat = selectedOptions.treat;
        const selectedFrosting = selectedOptions.frosting;
        const selectedSprinkles = selectedOptions.sprinkles;

        if (
            selectedTreat === currentOrder.treat &&
            selectedFrosting === currentOrder.frosting &&
            selectedSprinkles === currentOrder.sprinkles
        ) {
            feedbackDiv.textContent = "Perfect!";
            feedbackDiv.style.color = "green";
            feedbackDiv.classList.add("show");
            setTimeout(() => {
                feedbackDiv.classList.remove("show");
            }, 2000);
            currentOrderIndex++;
            showLetter();
        } else {
            feedbackDiv.textContent = "Oops! Try again.";
            feedbackDiv.style.color = "red";
            feedbackDiv.classList.add("show");
            setTimeout(() => {
                feedbackDiv.classList.remove("show");
            }, 2000);
        }
        return; // Important: Exit the function early
    }

    const selectedTreat = selectedOptions.treat;
    const selectedFrosting = selectedOptions.frosting;
    const selectedSprinkles = selectedOptions.sprinkles;

    if (
        selectedTreat === currentOrder.treat &&
        selectedFrosting === currentOrder.frosting &&
        selectedSprinkles === currentOrder.sprinkles
    ) {
        feedbackDiv.textContent = "Perfect!";
        feedbackDiv.style.color = "green";
        feedbackDiv.classList.add("show");
        setTimeout(() => {
            feedbackDiv.classList.remove("show");
        }, 2000);
        currentOrderIndex++;

        if (currentOrderIndex === orders.length) {
            showLetter();
        } else {
            displayOrder(orders[currentOrderIndex]);
            selectedOptions = { treat: null, frosting: null, sprinkles: null };
            document.querySelectorAll('.option-image').forEach(img => img.classList.remove('selected'));
        }
    } else {
        feedbackDiv.textContent = "Oops! Try again.";
        feedbackDiv.style.color = "red";
        feedbackDiv.classList.add("show");
        setTimeout(() => {
            feedbackDiv.classList.remove("show");
        }, 2000);
    }
}

function showLetter() {
    const letter = document.getElementById("letter");
    const letterContent = document.getElementById("letter-content");
    const letterDeliveryMessage = document.getElementById("letter-delivery-message");

    letterDeliveryMessage.style.display = "flex";

    const openLetterButton = document.getElementById("open-letter-button");
    openLetterButton.addEventListener("click", () => {
        letterDeliveryMessage.style.display = "none";
        letterContent.innerHTML = `
        <h2>Bája, </h2>
        <p>Would you be my Valentine and go out with me on Valentine's Day?</p>
        <button onclick="window.location.href='yes.html'">Yes!</button>
        <button onclick="window.location.href='no.html'">No</button>`;

        letter.style.display = "flex";
        letter.classList.add("show");
        document.getElementById("game-area").style.display = "none";
    });
}


startGameButton.addEventListener("click", () => {
    storyModal.style.display = "none";
});

window.addEventListener("load", () => {
    storyModal.style.display = "flex";
});

displayOrder(orders[currentOrderIndex]);