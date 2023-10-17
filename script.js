
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
      
      
        document.getElementById("newChatButton").addEventListener("click", () => {
            

           rightPane.classList.add("refreshing-right-pane");
           typingIndicator.style.display = "none";
            messageInput.value = "";
           rightPane.addEventListener("animationend", handleAnimationEnd, { once: true });
        });
    
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

        const leftPane = document.getElementById("leftPane");
            const hideButton = document.querySelector(".hide-button");
            const showSidebarButton = document.getElementById("showSidebarButton");
    
            hideButton.addEventListener("click", () => {
                leftPane.style.display = "none";
               const rightPane = document.getElementById("rightPane");
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

















