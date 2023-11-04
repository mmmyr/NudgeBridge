function toggleContent(elementId) {
    $('.content').hide(); // Hide all content
    $('#' + elementId).show(); // Show the specified content
}

// Initialize click counter
let clickCount = 0;

// Add click event to the black frame
// here it need id "blackFrame" to identify the object
$('#blackFrame').click(function () {
    clickCount++;
    console.log('Clicked!');

    // Define the content IDs to be shown in the desired sequence
    const contentIds = ['content1', 'content2', 'content3','content4'];

    // Determine the content to show based on the click count
    const contentToShow = contentIds[clickCount % contentIds.length];

    // Toggle the visibility of the chosen content
    toggleContent(contentToShow);
});