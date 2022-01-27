import { ChangeEvent, useState } from "react";

export function useContactForm(callback: () => void) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handleNameChange(e:ChangeEvent<HTMLInputElement>) {
        e.preventDefault()
        setName(e.target.value)
    }

    function handleEmailChange(e:ChangeEvent<HTMLInputElement>) {
        e.preventDefault()
        setEmail(e.target.value)
    }

    function handleMessageChange(e:ChangeEvent<HTMLTextAreaElement>) {
        e.preventDefault()
        setMessage(e.target.value)
    }

    function handleSubmit(e:ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
          }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
              console.log('Response succeeded!')
              setName('')
              setEmail('')
              setMessage('')
            }
          })
    }

    return {
        name,
        setName: handleNameChange,
        email,
        setEmail: handleEmailChange,
        message,
        setMessage: handleMessageChange,
        callback: handleSubmit
    }
}