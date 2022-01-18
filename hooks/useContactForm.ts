import { ChangeEvent, useState } from "react";

export function useContactForm(callback: () => void) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handleNameChange(e:ChangeEvent<HTMLInputElement>) {
        setName: e.target.value
    }

    function handleEmailChange(e:ChangeEvent<HTMLInputElement>) {
        setEmail: e.target.value
    }

    function handleMessageChange(e:ChangeEvent<HTMLTextAreaElement>) {
        setMessage: e.target.value
    }

    function handleSubmit(e:ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        callback();
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