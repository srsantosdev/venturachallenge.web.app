import React, { useCallback, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, Content } from './styles';
import api from '../../services/api';

const VideoViewer: React.FC = () => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const storagedEmail = localStorage.getItem('@watch:email');

    if (storagedEmail) {
      setEmail(storagedEmail);
    }

    return () => {
      localStorage.removeItem('@watch:email');
    };
  }, []);

  const handlePlay = useCallback(async () => {
    const createdAction = {
      email,
      action: 'play',
    };

    await api.post('actions', createdAction);
  }, [email]);

  const handlePause = useCallback(async () => {
    const createdAction = {
      email,
      action: 'pause',
    };

    await api.post('actions', createdAction);
  }, [email]);

  return (
    <Container>
      <Header />

      <Content>
        {email ? (
          <ReactPlayer
            url="http://www.youtube.com/embed/IB4Tkgo8_Lc"
            onPlay={handlePlay}
            onPause={handlePause}
          />
        ) : (
          <div>
            <h3>Você precisa se identificar para assistir ao video</h3>
          </div>
        )}
      </Content>

      <Footer name="Samuel Ramos dos Santos" />
    </Container>
  );
};

export default VideoViewer;
