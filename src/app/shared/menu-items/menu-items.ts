import { Injectable } from '@angular/core';
export interface Menu {
  state: string;
  name: string;
  type: string;
  icon?: string;
}

const MENUITEMS = [
  { state: 'admin-list', name: 'Admin List', type: 'link', icon:'admin_panel_settings' },
  { state: 'update-pass', name: 'Manage Portals', type: 'link', icon:'password'},
  { state: 'feature-list', name: 'Feature List ', type: 'link', icon:'web'},
  { state: 'hard-code', name: 'Hard Code', type: 'link', icon:'vpn_key'},
  { state: 'change-pass', name: 'Change Password', type: 'link', icon:'settings'},
  //{ state: 'update-pass', type: 'link', name: 'Update Passwords', icon: 'password' },
  // { state: 'grid', type: 'link', name: 'List Of Features',icon:'featured_play_list' },
  // { state: 'lists', type: 'link', name: 'Hard Coded Values', icon: 'vpn_key'},
  // { state: 'menu', type: 'link', name: 'Menu', icon: 'view_headline' },
  // { state: 'tabs', type: 'link', name: 'Tabs', icon: 'tab' },
  // { state: 'stepper', type: 'link', name: 'Stepper', icon: 'web' },
  // {
  //   state: 'expansion',
  //   type: 'link',
  //   name: 'Expansion Panel',
  //   icon: 'vertical_align_center'
  // },
  // { state: 'chips', type: 'link', name: 'Chips', icon: 'vignette' },
  // { state: 'toolbar', type: 'link', name: 'Toolbar', icon: 'voicemail' },
  // {
  //   state: 'progress-snipper',
  //   type: 'link',
  //   name: 'Progress snipper',
  //   icon: 'border_horizontal'
  // },
  // {
  //   state: 'progress',
  //   type: 'link',
  //   name: 'Progress Bar',
  //   icon: 'blur_circular'
  // },
  // {
  //   state: 'dialog',
  //   type: 'link',
  //   name: 'Dialog',
  //   icon: 'assignment_turned_in'
  // },
  // { state: 'tooltip', type: 'link', name: 'Tooltip', icon: 'assistant' },
  // { state: 'snackbar', type: 'link', name: 'Snackbar', icon: 'adb' },
  // { state: 'slider', type: 'link', name: 'Slider', icon: 'developer_mode' },
  // {
  //   state: 'slide-toggle',
  //   type: 'link',
  //   name: 'Slide Toggle',
  //   icon: 'all_inclusive'
  // }
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
