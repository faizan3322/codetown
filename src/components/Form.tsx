import React, { useState, ChangeEvent, FormEvent } from "react";

// Define types for form data and errors
interface FormData {
    name: string;
    email: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

export default function Form() {
    const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState<FormErrors>({});
    const [successMessage, setSuccessMessage] = useState<string>("");

    // Handle input changes
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Validate form data
    const validateForm = (): FormErrors => {
        let newErrors: FormErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
        return newErrors;
    };

    // Handle form submission
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validateForm();
        
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const response = await fetch("http://127.0.0.1:5000/submit-form", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccessMessage("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" }); // Reset form
                setErrors({});
            } else {
                setSuccessMessage("");
                const errorData = await response.json();
                alert(errorData.error || "Something went wrong");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to submit form");
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Contact Us</h2>
            {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700 font-medium">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded focus:ring-2 focus:ring-blue-400"
                        placeholder="Your Name"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded focus:ring-2 focus:ring-blue-400"
                        placeholder="Your Email"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded h-24 focus:ring-2 focus:ring-blue-400"
                        placeholder="Your Message"
                    />
                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                </div>

                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
                    Send Message
                </button>
            </form>
        </div>
    );
}
