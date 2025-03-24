"use client"

import { useState } from "react"
import { View, Text, Image, TouchableOpacity, SafeAreaView, StatusBar } from "react-native"

import { Home, MoreVertical, Play, SkipBack, SkipForward, Moon } from "@expo/vector-icons"

//  components with NativeWind

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  // Audio details
  const audioDetails = {
    title: "Futurama",
    authors: "By Kory Kogon, Suzette Blakemore, and James wood",
    coverArt:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Audio%20Player-70rolJ8oVXa6sg3IM5XycDqM5VzD3i.png",
    currentTime: "0:00",
    remainingTime: "-2:08",
    playbackSpeed: "1.0x",
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleProgressChange = (value) => {
    setProgress(value)
  }

  return (
    <SafeAreaView className="flex-1 bg-black">
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View className="flex-row justify-between items-center px-4 py-3">
        <TouchableOpacity>
          {/* <ChevronDown size={28} color="white" /> */}
        </TouchableOpacity>
        <TouchableOpacity>
          {/* <MoreVertical size={24} color="white" /> */}
        </TouchableOpacity>
      </View>

      {/* Cover Art */}
      <View className="flex-1 items-center justify-center px-10">
        <Image
          source={{ uri: audioDetails.coverArt }}
          className="w-full aspect-[3/4] rounded-lg"
          resizeMode="contain"
        />
      </View>

      {/* Audio Info */}
      <View className="px-8 pt-6">
        <Text className="text-white text-3xl font-bold mb-2">{audioDetails.title}</Text>
        <Text className="text-gray-400 text-base mb-6">{audioDetails.authors}</Text>

        {/* Progress Bar */}
        <View className="mb-4">

          <View className="flex-row justify-between mt-1">
            <Text className="text-white">{audioDetails.currentTime}</Text>
            <Text className="text-white">{audioDetails.remainingTime}</Text>
          </View>
        </View>

        {/* Playback Controls */}
        <View className="flex-row justify-between items-center mb-8">
          <TouchableOpacity className="items-center">
            <Text className="text-white text-xs mb-1">10</Text>
            {/* <SkipBack size={28} color="white" /> */}
          </TouchableOpacity>

          <TouchableOpacity>
            {/* <SkipBack size={36} color="white" /> */}
          </TouchableOpacity>

          <TouchableOpacity
            className="w-16 h-16 bg-green-100 rounded-full items-center justify-center"
            onPress={handlePlayPause}
          >
            {/* <Play size={28} color="#111827" /> */}
          </TouchableOpacity>

          <TouchableOpacity>
            {/* <SkipForward size={36} color="white" /> */}
          </TouchableOpacity>

          <TouchableOpacity className="items-center">
            <Text className="text-white text-xs mb-1">10</Text>
            {/* <SkipForward size={28} color="white" /> */}
          </TouchableOpacity>
        </View>

        {/* Bottom Controls */}
        <View className="flex-row justify-between items-center mb-16">
          <TouchableOpacity>
            {/* <Moon size={24} color="white" /> */}
          </TouchableOpacity>

          <TouchableOpacity>
            <Text className="text-white text-lg font-medium">{audioDetails.playbackSpeed}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default AudioPlayer

