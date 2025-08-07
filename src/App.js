import React from "react";

export default function LandingPage() {
  return (
    <main className="bg-white text-gray-800 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="px-6 py-20 text-center bg-gradient-to-b from-gray-900 to-black text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">PlayersConnect+</h1>
        <p className="text-xl md:text-2xl font-light mb-6">Where Players Belong</p>
        <a
          href="https://testflight.apple.com/join/at8m7y2w"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow"
        >
          Download on TestFlight
        </a>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">App Features</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <Feature title="Player Profiles" description="Create a custom player profile with confidence and skill ratings." />
          <Feature title="Gym Check-In" description="Check in and out of local gyms to build your reputation." />
          <Feature title="Player Ratings" description="Rate teammates on hustle, defense, teamwork, and more." />
          <Feature title="Group Management" description="Create and manage private or public groups of players." />
        </div>
      </section>

      {/* Screenshots Placeholder */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">App Preview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <ScreenshotCard />
          <ScreenshotCard />
          <ScreenshotCard />
        </div>
      </section>

      {/* Gym Admin CTA */}
      <section className="py-12 bg-white px-6 text-center">
        <h3 className="text-xl font-semibold mb-3">Are you a Gym Owner?</h3>
        <p className="mb-4 text-gray-600">Request to become a verified Gym Admin and grow your community.</p>
        <a
          href="mailto:playersconnectapp@gmail.com"
          className="bg-gray-900 text-white px-5 py-3 rounded-full hover:bg-gray-700"
        >
          Contact Us
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} PlayersConnect+. All rights reserved.
      </footer>
    </main>
  );
}

function Feature({ title, description }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ScreenshotCard() {
  return (
    <div className="h-64 bg-gray-300 rounded-lg shadow flex items-center justify-center text-gray-500">
      Screenshot
    </div>
  );
}
