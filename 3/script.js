document.addEventListener('DOMContentLoaded', function() {
    // TimelineJS-ის ინიციალიზაცია timeline.json ფაილის გამოყენებით
    window.timeline = new TL.Timeline('timeline-embed', 'timeline.json', {
        font: {
            headline: "Georgia",
            body: "Arial"
        },
        language: 'ka',
        timenav_position: 'bottom',
        marker_height_min: 60,
        scale_factor: 2
    });
});