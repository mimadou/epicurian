import React from 'react';

const SocialNetwork = () => {
    return (
        <ul className='socialNetwork'>
        <a href="https://www.facebook.com"
         target="_blank"
         rel="noopener noreferrer"
          >
            <li><i class="fa-brands fa-facebook"></i></li>
        </a>
        <a href="https://accounts.snapchat.com/"
         target="_blank"
         rel="noopener noreferrer"
          >
            <li><i class="fa-brands fa-square-snapchat"></i></li>
        </a>
        <a href="https://www.instagram.com/"
         target="_blank"
         rel="noopener noreferrer"
          >
            <li><i class="fa-brands fa-instagram"></i></li>
        </a>
        <a href="https://www.tiktok.com/fr/"
         target="_blank"
         rel="noopener noreferrer"
          >
            <li><i class="fa-brands fa-tiktok"></i></li>
        </a>
    </ul>
    );
};

export default SocialNetwork;