/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/PatrickHarl')
      .then(response =>{
           
           let cardsContainer = document.querySelector('.cards')
           let myCard = createGitHubCard(response)
           
           cardsContainer.appendChild(myCard)

      })
      .catch(err => {

            console.log(err)

      })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/





/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/
const followersArray = ['nicholas-myers', 'corbinrobb', 'vailspencer', 'Kandelonius', 'avpimblesr'];



followersArray.forEach((follower) => {

  axios.get(`https://api.github.com/users/${follower}`)
      .then((response) => {

        let cardsContainer = document.querySelector('.cards')
        let followerCard = createGitHubCard(response)
           
        cardsContainer.appendChild(followerCard)

      })
      .catch((err) => {

        console.log(err)

      })

})





/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function createGitHubCard(promise){

  let cardContainer = document.createElement('div')
  let cardImg = document.createElement('img')
  let cardInfo = document.createElement('div')
  let cardNameHeader = document.createElement('h3')
  let cardUserName = document.createElement('p')
  let cardUserLocation = document.createElement('p')
  let cardUserProfile = document.createElement('p')
  let cardUserFollowers = document.createElement('p')
  let cardUserFollowing = document.createElement('p')
  let cardUserBio = document.createElement('p')

  cardContainer.appendChild(cardImg)
  cardContainer.appendChild(cardInfo)

  cardInfo.appendChild(cardNameHeader)
  cardInfo.appendChild(cardUserName)
  cardInfo.appendChild(cardUserLocation)
  cardInfo.appendChild(cardUserProfile)
  cardInfo.appendChild(cardUserFollowers)
  cardInfo.appendChild(cardUserFollowing)
  cardInfo.appendChild(cardUserBio)


  cardContainer.classList.add('card')
  cardInfo.classList.add('card-info')
  cardNameHeader.classList.add('name')
  cardUserName.classList.add('username')

  cardUserProfile.textContent = 'Profile: '
  cardUserProfile.insertAdjacentHTML('beforeend', `<a href=${promise.data.url}>${promise.data.url}</a>`)
  cardImg.src = promise.data.avatar_url
  cardNameHeader.textContent = promise.data.name
  cardUserName.textContent = promise.data.login
  
  cardUserLocation.textContent = `Location: ${promise.data.location}`
  cardUserFollowers.textContent = `Followers: ${promise.data.followers}`
  cardUserFollowing.textContent = `Following: ${promise.data.following}`
  cardUserBio.textContent = `Bio: ${promise.data.bio}`

  return cardContainer
}


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
