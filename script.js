
document.addEventListener("DOMContentLoaded", function () {
        const newChatButton = document.getElementById("newChatButton");
        const chatList = document.getElementById("chatList");
        const messageArea = document.getElementById("message-area");
        
        const messageInput = document.getElementById("messageInput");
        const sendMessageButton = document.getElementById("sendMessageButton");

        newChatButton.addEventListener("click", () => {
            const chatItem = document.createElement("div");
            chatItem.className = "chat-item";
            const messageIcon = document.createElement("i");
            messageIcon.className = "fa-regular fa-message"; // Replace with your desired icon class
            
           
            const newText = document.createTextNode("New Chat");
    
            // Append the message icon and text to the chatItem
            chatItem.appendChild(messageIcon);
            chatItem.appendChild(newText)
            chatList.appendChild(chatItem);
        });
      
      
       // function handleAnimationEnd() {
        // Remove the animation class after the animation is complete
       // rightPane.classList.remove("refreshing-right-pane");
        
        // Refresh the right pane content (you can add your content refresh logic here)
       // messageArea.innerHTML = "";
       // messageInput.placeholder = "Type your message...";
        
        // You can add code here to create a new chat or perform any other action when "New Chat" is clicked.
    //}
   
       

    




    







        document.getElementById("newChatButton").addEventListener("click", () => {
            

           rightPane.classList.add("refreshing-right-pane");
           typingIndicator.style.display = "none";
            messageInput.value = "";
           rightPane.addEventListener("animationend", handleAnimationEnd, { once: true });
        });
    
            setTimeout(() => {
               //Hide the typing indicator after a delay (simulating the end of typing)
                typingIndicator.style.display = "none";
              rightPane.classList.remove("refreshing-right-pane");
               messageArea.innerHTML = "";
               messageInput.placeholder = "Type your message...";
               
        } , 1000); // Change the delay time as needed (2 seconds in this example).
            
      

        
        
       
    


 

        
   






           

        //sendMessageButton.addEventListener("click", () => {
            //const messageText = messageInput.value.trim();
           // if (messageText !== "") {


               // const chatItem = document.createElement("div");
               // chatItem.className = "chat-item";
                //chatItem.textContent = messageText;
               // chatItem.innerHTML = '<i class="fa-regular fa-message"></i> <span>' + messageText + '</span>';
               // chatList.appendChild(chatItem);
                
              

                // Clear the message input
               // messageInput.value = "";


                //const messageItem = document.createElement("div");
                //messageItem.className = "message-item";
                //messageItem.textContent = messageText;
                //messageArea.appendChild(messageItem);
                //messageInput.value = "";
            //}
        //});// Assuming you have selected the chatList and messageArea elements correctly


sendMessageButton.addEventListener("click", () => {
    
    const messageText = messageInput.value.trim();
    
    if (messageText !== "") {
        // Create a chat item and append it to the chatList
        const chatItem = document.createElement("div");
        chatItem.className = "chat-item";
        chatItem.innerHTML = '<i class="fa-regular fa-message"></i> <span>' + messageText + '</span>';
        chatList.appendChild(chatItem);

        // Create a message item and append it to the messageArea
        const messageItem = document.createElement("div");
        messageItem.className = "message-item";
        messageItem.textContent = messageText;
        messageArea.appendChild(messageItem);

        // Clear the message input
        messageInput.value = "";
      
    }
});

// Rest of your code...

       

      
            const leftPane = document.getElementById("leftPane");
            const hideButton = document.querySelector(".hide-button");
            const showSidebarButton = document.getElementById("showSidebarButton");
    
            hideButton.addEventListener("click", () => {
                leftPane.style.display = "none";
               
                rightPane.style.flex = "1"; 
                showSidebarButton.style.display = "block"; 
                
            });
            
            showSidebarButton.addEventListener("click", () => {
               
                leftPane.style.display = "flex";
                showSidebarButton.style.display = "none";
                
                rightPane.style.flex = "0"; 
            });
           
        
            const showsidebarbutton = document.querySelector(".show-sidebar-button");
const hiddenPanel = document.querySelector(".sidebar-panel");

showsidebarbutton.addEventListener("mouseenter", () => {
    hiddenPanel.style.display = "block"; /* Display on mouseenter */
});

showsidebarbutton.addEventListener("mouseleave", () => {
    hiddenPanel.style.display = "none"; /* Hide on mouseleave */
});


});

















