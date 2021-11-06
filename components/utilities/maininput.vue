<template>
    <div class="normal-form">
        <label :for="name" class="mb1">
            {{name}}
        </label>

        <!-- text input -->
        <input 
            v-if="controlType === 'input' && inputType ==='text'" 
            type="text" 
            maxlength="50"
            :name="name" 
            :placeholder="placeholder" 
            :value="value" 
            @input="$emit('input', $event.target.value) ">
        <!-- email input -->
        <input 
            v-if="controlType === 'input' && inputType ==='email'" 
            type="email" 
            :name="name" 
            :placeholder="placeholder" 
            :value="value" 
            @input="$emit('input', $event.target.value) ">
        <!-- textarea input -->
        <div class="textarea" v-if="controlType === 'textarea'">
            <textarea  
                :name="name" 
                :placeholder="placeholder" 
                :maxlength="maxLength"
                :value="value"
                @input="$emit('input', $event.target.value) ">
            </textarea>
        </div>
    </div>
</template>


<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: false,
            default: "text goes here"
        },
        inputType: {
            type: String,
            required: false,
            default: "text"
        },
        controlType: {
            type: String,
            required: false,
            default: 'input'
        },
        value: {
            type: String,
            default: ''
        }
    },
}
</script>

<style scoped>
.mb1 {
    margin-bottom: 1px;
}

.normal-form {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
    max-width: 500px;
    margin-bottom: 16px;
}

.normal-form label {
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    color: var(--color-company);
}

input,
textarea {
    font-family: 'Inter';
}

.normal-form input {
    font-size: 15px;
    color: var(--color-company);
    padding: 10px 16px;
    background-color: var(--color-gray-form);
    border: 0.5px solid var(--color-form-border);
    border-radius: 25px;
    outline: none;
}

.normal-form .textarea {
    width: 100%;
    font-size: .95rem;
    color: var(--color-company);
    padding: 10px 16px;
    background-color: var(--color-gray-form);
    border: 0.5px solid var(--color-form-border);
    border-radius: 20px;
    outline: none;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
}

textarea {
    height: 150px;
    width: 100%;
    font-size: 15px;
    color: var(--color-company);
    background-color: var(--color-gray-form);
    border: none;
    outline: none;
    resize: none;
    overflow: hidden;
}
</style>