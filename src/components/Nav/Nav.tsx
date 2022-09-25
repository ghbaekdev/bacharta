import React, { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { ReactComponent as Bacharta } from '../../assets/bacharta.svg';
import styled from 'styled-components';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { KakaoProfile, KakaoToken, LoadingState } from '../../store/store';
import { getKakaoProfile, kakaoUserLogout } from '../../api/apis';

const pages = ['Home', 'Maps', 'OutFits'];
const settings = ['Profile', 'Account', 'Logout'];

const Nav = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const kakaoToken = localStorage.getItem('access_token');
  const navigate = useNavigate();

  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const [token, setToken] = useRecoilState(KakaoToken);
  const [profile, setProfile] = useRecoilState(KakaoProfile);
  const [loading, setLoading] = useRecoilState(LoadingState);

  interface ProfileType {
    nickname: string;
    thumbnail_image_url: string;
    profile_image_url: string;
  }

  // const {
  //   kakao_account: {
  //     profile: { nickname, profile_image_url, thumbnail_image_url },
  //   },
  // } = profile;

  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const goToHome = () => {
    navigate('/');
  };

  const goToCategories = (page: string) => {
    console.log(page);
    if (page === 'Home') navigate('/');
    if (page === 'Maps') navigate('/maps');
    if (page === 'OutFits') navigate('/outfits');
  };

  const { thumbnail_image_url, nickname }: any = profile;

  const kakaoLogout = (setting: string) => {
    setLoading(!loading);
    if (setting === 'Logout') {
      kakaoUserLogout();
      localStorage.removeItem('access_token');
      alert('로그아웃됨');
      navigate('/');
      setToken('');
    }
    setLoading(!loading);
  };

  const getProfile = async () => {
    await getKakaoProfile().then((res) =>
      setProfile(res.data.kakao_account.profile)
    );
  };

  useEffect(() => {
    getProfile();
  }, [token]);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            borderBottom: '2px solid #8091ef',
          }}
        >
          <Bacharta
            width="250"
            height="115"
            onClick={goToHome}
            style={{ cursor: 'pointer' }}
          />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <MenuBox>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                marginRight: '50px',
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => goToCategories(page)}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  style={{ marginRight: '30px', fontSize: '18px' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            {token ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton
                    onClick={handleOpenUserMenu}
                    sx={{ p: 0 }}
                    style={{ display: 'flex' }}
                  >
                    <ProfileName> {nickname}</ProfileName>
                    <Avatar alt="Remy Sharp" src={thumbnail_image_url} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography
                        textAlign="center"
                        onClick={() => {
                          kakaoLogout(setting);
                        }}
                      >
                        {setting}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            ) : (
              <Button
                onClick={handleLogin}
                sx={{ my: 2, color: 'white', display: 'block' }}
                style={{ marginRight: '30px', fontSize: '18px' }}
              >
                카카오 로그인
              </Button>
            )}
          </MenuBox>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav;

const MenuBox = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileName = styled.div`
  margin-right: 15px;
  font-size: 18px;
  color: white;
`;
