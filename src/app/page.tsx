"use client";

import { BreathingText } from "@/components/BreathingText";
import { GithubIcon } from "@/components/icons/github";
import { HomeContent } from "@/constants/content";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [inputText, setInputText] = useState('BREATHE')
  const [displayText, setDisplayText] = useState('BREATHE')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setDisplayText(inputText || 'BREATHE')
  }

  const handlePresetClick = (text: string) => {
    setInputText(text)
    setDisplayText(text)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full text-center space-y-12">
        
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white/90">
            { HomeContent.title }
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            { HomeContent.description }
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 md:p-16 border border-white/10">
          <BreathingText text={displayText} />
        </div>

        <div className="space-y-6">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="text"
              value={inputText}
              onChange={handleInputChange}
              placeholder="Enter your text..."
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
              maxLength={20}
            />
            <button
              type="submit"
              className="px-6 py-3 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Update
            </button>
          </form>

          <div className="space-y-3">
            <p className="text-white/70 text-sm">Or try these presets:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {HomeContent.presetTexts.map((text) => (
                <button
                  key={text}
                  onClick={() => handlePresetClick(text)}
                  className="px-4 py-2 cursor-pointer bg-white/10 hover:bg-white/20 text-white/90 rounded-lg transition-all duration-200 border border-white/20 hover:border-white/30 text-sm"
                >
                  {text}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          {
            HomeContent.features.map((feature, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl">{feature.icon}</div>
                <h3 className="text-white font-semibold">{feature.title}</h3>
                <p className="text-white/60 text-sm">{feature.description}</p>
              </div>
            ))
          }
        </div>

        <div className="pt-8 border-t border-white/10">
          <Link
            href={ HomeContent.github.url }
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200"
          >
            <GithubIcon />
            View on GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}
