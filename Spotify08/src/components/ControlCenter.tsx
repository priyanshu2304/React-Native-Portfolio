import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TrackPlayer, {State, usePlaybackState} from 'react-native-track-player';
import {playbackService} from '../../musicPlayerServices';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {skipToPrevious} from 'react-native-track-player/lib/trackPlayer';
const controlCenter = () => {
  const playBackState = usePlaybackState();
  const skipToNext = async () => {
    await TrackPlayer.skipToNext();
  };
  const previousButton = async () => {
    await TrackPlayer.skipToPrevious();
  };
  const togglePlayBack = async (playback: State) => {
    const currentTrack = await TrackPlayer.getActiveTrackIndex();
    if (currentTrack !== null) {
      if (playback === State.Paused || playback === State.Ready) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={previousButton}>
        <Icon name="skip-previous" size={40} style={styles.icon} />
      </Pressable>
      <Pressable onPress={() => togglePlayBack(playBackState as any)}>
        <Icon
          name={playBackState === State.Playing ? 'pause' : 'play-arrow'}
          size={75}
          style={styles.icon}
        />
      </Pressable>
      <Pressable onPress={skipToNext}>
        <Icon name="skip-next" size={40} style={styles.icon} />
      </Pressable>
    </View>
  );
};

export default controlCenter;
const styles = StyleSheet.create({
  container: {
    marginBottom: 56,

    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: '#FFFFFF',
  },
  playButton: {
    marginHorizontal: 24,
  },
});
