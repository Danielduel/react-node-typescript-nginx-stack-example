import React from 'react';
import logo from './logo.svg';
import { LiveActivatedChannels, LiveActivatedChannelsChannel } from "types/LiveActivatedChannels";
import './App.css';

function ternaryNull<T>(data: T | null): data is T {
  return data === null ? false : true;
} 

function LiveActivatedChannelsItem(channel: LiveActivatedChannelsChannel) {
  return (
    <div key={channel.id}>
      <span>{channel.title}</span>
      <span>{channel.username}</span>
      <span>{channel.view_count}</span>
      <a target="_blank" href={`https://www.twitch.tv/${channel.username}`}>Go to this channel</a>
    </div>
  );
}

type LiveActivatedChannelsListProps = {
  channels: LiveActivatedChannels | null
};
function LiveActivatedChannelsList({ channels }: LiveActivatedChannelsListProps) {
  return ternaryNull(channels) ? <>{channels.channels.map(LiveActivatedChannelsItem)}</> : null;
}

function App() {
  const [channels, setChannels] = React.useState<LiveActivatedChannels | null>(null);

  React.useEffect(() => {
    fetch("/api/list-of-channels")
      .then(res => res.json() as Promise<LiveActivatedChannels>)
      .then(setChannels);
  }, [setChannels]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LiveActivatedChannelsList channels={channels} />
      </header>
    </div>
  );
}

export default App;
