
const exercises = [
    {
        name: "Flat Bench Press",
        description: "A basic upper body exercise to strengthen your chest, shoulders, and triceps.",
        video: "/videos/Flatbench -video.mp4"
    },
    {
        name: "Squats",
        description: "A lower body exercise that targets your quads, hamstrings, and glutes.",
        video: "/videos/squat-video.mp4"
    },
    {
        name: "Deadlifts",
        description: "A compound exercise that targets your lower back, glutes, hamstrings, and core.",
        video: "/videos/deadlift-video.mp4"
    },
    {
        name: "Incline Bench Press",
        description: "An upper body exercise that targets your chest, shoulders, and triceps.",
        video: "/videos/incline-bench-video.mp4"
    },
    {
        name: "Bent over Rows",
        description: "An upper body exercise that targets your back, shoulders, and biceps.",
        video: "/videos/bent-over-row-v2.mp4"
    }
];


export default function ExercisesPage() {
    return (
        <div className="p-4 bg-black text-white h-screen overflow-y-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-center">Exercises</h1>
            <section className="my-4">
                <p className="text-center text-lg md:text-xl my-8">
                    Explore a variety of exercises to help you stay fit and healthy.
                </p>

                {/* exercise cards */}
                <section className="mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* Example exercise card */}
                        {exercises.map((exercise) => (
                            <div key={exercise.name} className="p-4 border border-white rounded-xl shadow-md hover:shadow-lg transition">
                                <h1 className="text-4xl font-bold">{exercise.name}</h1>
                                <p className="mt-2">{exercise.description}</p>
                                <video controls className="mt-2 w-full rounded-lg" loop>
                                    <source src={exercise.video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        ))}
                    </div>
                
                </section>
            </section>
        </div>
    );
}