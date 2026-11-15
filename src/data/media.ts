import weddingCinemaImg from '../assets/images/wedding_cinema_mumbai_1794732109870.jpg';
import familyMilestoneImg from '../assets/images/family_milestone_celebration_1794732109599.jpg';
import ceremonialDetailImg from '../assets/images/ceremonial_ritual_detail_1794732110080.jpg';
import heirloomAlbumImg from '../assets/images/heirloom_album_craft_1794732110138.jpg';
import directorPortraitImg from '../assets/images/sushant_studio_director_1794732110869.jpg';

export const BRAND_LOGOS = {
  main: {
    light: '/assets/aistudio/main-logo-black_d96c55f3.png',
    dark: '/assets/aistudio/main-logo-white_6165ddf5.png',
  },
  secondary: {
    light: '/assets/aistudio/secondary-logo-black_671d917b.png',
    dark: '/assets/aistudio/secondary-logo-white_5bc3036b.png',
  },
  icon: {
    light: '/assets/aistudio/icon-black_4dc8be7c.png',
    dark: '/assets/aistudio/icon-white_8a762d55.png',
  },
} as const;

export const STUDIO_IMAGES = {
  weddingCinema: weddingCinemaImg,
  familyMilestone: familyMilestoneImg,
  ceremonialDetail: ceremonialDetailImg,
  heirloomAlbum: heirloomAlbumImg,
  directorPortrait: directorPortraitImg,
} as const;
