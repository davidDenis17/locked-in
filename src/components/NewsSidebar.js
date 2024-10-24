import React from 'react';
import './NewsSidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

function NewsSidebar() {
  const newsItems = [
    {
      id: 1,
      title: 'NVIDIA New GPU Tool',
      readTime: '5 min read',
      link: '#'
    },
    {
      id: 2,
      title: 'Apple Announces Self-Charging AirPods Pro Max',
      readTime: '4 min read',
      link: '#'
    },
    {
      id: 3,
      title: 'Tesla Unveils Solar-Powered Electric Scooter',
      readTime: '6 min read',
      link: '#'
    },
    {
      id: 4,
      title: 'Google’s AI Now Writes Poetry on Demand',
      readTime: '5 min read',
      link: '#'
    },
    {
      id: 5,
      title: 'Meta’s Virtual Reality Headset Gains Mind-Reading Feature',
      readTime: '7 min read',
      link: '#'
    }
  ];

  return (
    <div className="news-sidebar">
      <h3 className="news-title">Trending News</h3>
      <ul className="news-list">
        {newsItems.map((news) => (
          <li key={news.id} className="news-item">
            <a href={news.link} className="news-link">
              <FontAwesomeIcon icon={faNewspaper} className="news-icon" />
              <div className="news-content">
                <p className="news-title">{news.title}</p>
                <span className="news-read-time">{news.readTime}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsSidebar;
