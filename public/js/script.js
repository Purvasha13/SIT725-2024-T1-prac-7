const cardList = [
    {
      title: "Retriever",
      image: "image/dog-1.jpeg",
      link: "About Me",
      description: "I am a Golden retriever puppy !!"
    },
    {
      title: "Pug",
      image: "image/dog-2.jpeg",
      link: "About Me",
      description: "I am a Pug!!"
    },
    { 
     title: "German Shephard",
     image: "image/dog-3.jpeg",
     link: "About Me",
     description: "I am a german shephard"
    }
 ];

const clickMe = () => {
    $('#addCardForm').modal('open');
};

$(document).ready(function(){
    // Initialize modal
    $('.modal').modal();

    // Fetch and display card details
    $.get('/getCards', function (cards) {
        var cardSection = $('#card-section');
        cards.forEach(card => {
            var cardHtml = `
                <div class="col s4 center-align">
                    <div class="card small">
                        <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator" src="${card.image}" alt="Card Image">
                        </div>
                        <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4">${card.title}<i class="material-icons right"></i></span>
                            <p><a href="#">About Me</a></p>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title activator grey-text text-darken-4">${card.title}<i class="material-icons right">close</i></span>
                            <p class="card-text">${card.description}</p>
                        </div>
                    </div>
                </div>`;
            cardSection.append(cardHtml);
        });
    });

    $('#clickMeButton').click(() => {
        clickMe(); // Call clickMe function to open the form
    });

    $('#formSubmit').click(() => {
        submitForm();
    });

    // Event listener for adding card
    $('#addCardForm').submit(function(event) {
        event.preventDefault();
        // submitForm();
    });
});

