    <script>
        const button= document.querySelector("button");
        button.addEventListener('click',changeText);

        const heading=document.querySelector("h1")

        function changeText(){
 
            heading.textContent=`hi`;
        }

    </script>