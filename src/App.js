import React from "react";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start">
      <main className="relative z-10 bg-white bg-opacity-0 flex flex-col items-center px-6 pt-24 pb-12">
        <section className="max-w-4xl text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4">PlayersConnect+</h1>
          <p className="text-lg text-gray-700 mb-6">
            Discover local basketball courts, find pickup games, and connect with players near you.
            Whether you're looking for a casual game or a competitive match, PlayersConnect has you covered.
          </p>
          <button
            type="button"
            className="inline-block bg-black hover:bg-gray-800 text-white text-xl font-bold py-4 px-10 rounded-full shadow-2xl transform hover:scale-105 transition duration-300"
            onClick={() => window.open("https://testflight.apple.com/join/at8m7y2w", "_blank")}
          >
            Download  iOS Beta
          </button>
        </section>

        {/* Removed App Screenshots Section */}

        {/* Player Profiles Section */}
        <section className="max-w-4xl w-full mt-16 mb-12">
          <h2 className="text-2xl font-bold mb-3 text-center">Player Profiles</h2>
          <p className="text-lg text-gray-700 text-center">
            Create your own unique profile to showcase your basketball skills, stats, and playing history. Connect with others, share your favorite courts, and join the community.
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <img
              src={process.env.PUBLIC_URL + "/profilepic.png"}
              alt="Profile Pic Screenshot"
              className="w-64 max-h-96 rounded-xl shadow-lg object-cover bg-gray-100"
              style={{ aspectRatio: "9/19.5" }}
            />
            <img
              src={process.env.PUBLIC_URL + "/confidencescreen.png"}
              alt="Confidence Screen Screenshot"
              className="w-64 max-h-96 rounded-xl shadow-lg object-cover bg-gray-100"
              style={{ aspectRatio: "9/19.5" }}
            />
          </div>
        </section>

        {/* Gym Check-In Section */}
        <section className="max-w-4xl w-full mb-12">
          <h2 className="text-2xl font-bold mb-3 text-center">Gym Check-In</h2>
          <p className="text-lg text-gray-700 text-center">
            Instantly check in at your local gym or court to let others know you're ready to play. See who's checked in and join games in real time.
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <img
              src={process.env.PUBLIC_URL + "/screenshot-map.png"}
              alt="Map Screenshot"
              className="w-64 max-h-96 rounded-xl shadow-lg object-cover bg-gray-100"
              style={{ aspectRatio: "9/19.5" }}
            />
            <img
              src={process.env.PUBLIC_URL + "/screenshot-gymdetails.png"}
              alt="Gym Details Screenshot"
              className="w-64 max-h-96 rounded-xl shadow-lg object-cover bg-gray-100"
              style={{ aspectRatio: "9/19.5" }}
            />
          </div>
        </section>

        {/* Player Ratings Section */}
        <section className="max-w-4xl w-full mb-12">
          <h2 className="text-2xl font-bold mb-3 text-center">Player Ratings</h2>
          <p className="text-lg text-gray-700 text-center">
            Rate your fellow players after each game and build your reputation. Find reliable teammates and ensure a great game experience every time.
          </p>
          <div className="flex justify-center mt-4">
            <img
              src={process.env.PUBLIC_URL + "/ratingscreen.png"}
              alt="Rating Screen Screenshot"
              className="w-64 max-h-96 rounded-xl shadow-lg object-cover bg-gray-100"
              style={{ aspectRatio: "9/19.5" }}
            />
          </div>
        </section>

        {/* Group Management Section */}
        <section className="max-w-4xl w-full mb-12">
          <h2 className="text-2xl font-bold mb-3 text-center">Group Management</h2>
          <p className="text-lg text-gray-700 text-center">
            Organize your own basketball groups, invite friends, and schedule games with ease. Stay connected and keep the competition going!
          </p>
        </section>

        {/* Gym Owner Section */}
        <section className="max-w-4xl w-full mb-12">
          <h2 className="text-2xl font-bold mb-3 text-center">Are you a Gym Owner?</h2>
          <p className="text-lg text-gray-700 text-center">
            List your facility on PlayersConnect to attract more players and manage your court's schedule. Reach out to us to get started and grow your basketball community.
          </p>
        </section>

        {/* Contact Us Section */}
        <section className="max-w-4xl w-full mb-8">
          <h2 className="text-2xl font-bold mb-3 text-center">Contact Us</h2>
          <p className="text-lg text-gray-700 text-center">
            Have questions, feedback, or want to partner with us? <a href="mailto:playersconnectapp@gmail.com" className="text-blue-600 underline">Click Here</a> — we'd love to hear from you!
          </p>
        </section>
      </main>
    </div>
  );
}
