import React, {Component} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import RNFS from 'react-native-fs';
import GuessInput from './GuessInput'
import SongData from './SongData';

const audioFile = 'audio.m4a';
const audioPath = RNFS.DocumentDirectoryPath;
export default class Guess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      song: {},
      playAudio: false
    }
    this.downloadSong = this.downloadSong.bind(this);

  }

  componentDidMount() {
    this.downloadSong()
  }

  downloadSong() {
    const songId = SongData.randomSongId();
    fetch(`https://itunes.apple.com/us/lookup?id=${songId}`)
      .then(d => d.json())
      .then(d => {
        let song = {};
        song.artist = d.results[0].artistName;
        song.id = d.results[0].artistId;
        song.album = d.results[0].collectionName;
        song.trackName = d.results[0].trackName;
        song.audioUrl = d.results[0].previewUrl;

        this.setState({song});
        return song;
      })
      .then((s) => {
        return RNFS.downloadFile({
          fromUrl: s.audioUrl,
          toFile: `${audioPath}/${audioFile}`
        }).promise;
      })
      .then((d) => this.setState({playAudio: true}))
      .catch((err) => {
        console.warn("Download error: ", err);
        this.downloadSong();
      })
  }

  render() {
    const guessPage = this.state.playAudio ?
      <GuessInput
        style={styles.guessInput}
        onChangeGuess={this.onChangeGuess}
        onGuess={this.onGuess}
        guess={this.state.guess}
      /> :
      <ActivityIndicator size='large'/>;

    return (
      <View style={styles.container}>
        {guessPage}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  flashMessage: {
    flex: 0.4,
    justifyContent: 'center'
  },
  flashMessageText: {
    color: "red",
    fontSize: 30,
  },
  guessInput: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
