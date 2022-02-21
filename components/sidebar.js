function sidebar() {


    // return your html component here
    //Make sure to give input search box id as ""
    return  `<input type="text" placeholder="Search" id="searchbar">
    <div id="log"> 
    <div id="home" onclick="window.location.href='index.html'">Home</div>
      <div id="login">Login</div>
    <div id="signin">Sign In</div>
   </div>`
}
export default sidebar