fetch('http://localhost:3000/allposts')
  .then(response => response.json())
  .then(data =>{
    const postCard  = document.getElementById("userPostcard")
  
    for (let i = data.length-1; i >= 0; i--) {

      const lstBegn = document.createElement('ul')
      const userName = document.createElement('li') 
      const userPost = document.createElement('li')
      const userNametext = document.createTextNode(data[i].username)     
      const userPosttext = document.createTextNode(data[i].userPosts[0].postContent)
      userName.appendChild(userNametext)
      userPost.appendChild(userPosttext)
      const lineeBreak = document.createElement('hr')
      lstBegn.appendChild(userName)
      lstBegn.appendChild(userPost)
      lstBegn.appendChild(lineeBreak)
      postCard.appendChild(lstBegn)
    }
  } );

