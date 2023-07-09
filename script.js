window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");

    const input = document.querySelector("#new-task-input");

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = input.value;
        

        const task_el = document.createElement('div');
        // document.getElementById("new-task-form").appendChild(task_el);
        // form.appendChild(task_el )
        input.value = "";

        const task_content_el = document.createElement('div');
        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input');
        task_input_el.type = 'text';
        task_input_el.value = task;
        task_input_el.style.backgroud= "red";
        task_input_el.setAttribute('readonly' ,'readonly');
        console.log(task_input_el.value);

        task_content_el.appendChild(task_input_el);
        form.appendChild(task_el )
        // task_el.appendChild(task_content_el);

        const task_actions_el = document.createElement('div');

        const task_edit_el = document.createElement('button');
        task_edit_el.innerText = "Edit";
        task_edit_el.type = "button";
        
        const task_delete_el = document.createElement('button');
        task_delete_el.innerText = "Delete";
        task_delete_el.type = "button";

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);

        
        task_edit_el.addEventListener('click', () => {
            if(task_edit_el.innerText == "Edit") {
                task_edit_el.innerText = "Save";
                task_input_el.removeAttribute('readonly');
                task_input_el.focus();
            }

            else {
                task_edit_el.innerText = "Edit";
                task_input_el.setAttribute('readonly' ,'readonly');
            }
            
        })

        task_delete_el.addEventListener('click', () => {
            form.removeChild(task_el);
        })

    })

})







