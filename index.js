document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // You can add code here to handle form submission, e.g., send data to a server
    // For now, let's just log the form data to the console
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    console.log(data);

    // Optionally, clear the form
    this.reset();
    alert('Message sent successfully!'); // Replace with a better UI message
});