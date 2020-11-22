export const apiConstants = {
  user: {
    common: {
      signin: '/QuanLyNguoiDung/DangNhap',
      signout: '/QuanLyNguoiDung/DangKy',
      info: '/QuanLyNguoiDung/ThongTinNguoiDung',
      edit: '/QuanLyNguoiDung/CapNhatThongTinNguoiDung',
      enrollableCourse: '/QuanLyNguoiDung/LayDanhSachKhoaHocChuaGhiDanh',
      waitlistCourse: '/QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet',
    },
    superUserOnly: {
      role: '/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung',
      list: '/QuanLyNguoiDung/LayDanhSachNguoiDung',
      listPaginate: '/QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang',
      search: '/QuanLyNguoiDung/TimKiemNguoiDung',
      create: '/QuanLyNguoiDung/ThemNguoiDung',
      delete: '/QuanLyNguoiDung/XoaNguoiDung',
      listInCourse: '/QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc',
    },
  },

  course: {
    common: {
      category: '/QuanLyKhoaHoc/LayDanhMucKhoaHoc',
      list: '/QuanLyKhoaHoc/LayDanhSachKhoaHoc',
      listPaginate:
        '/QuanLyNgQuanLyKhoaHocuoiDung/LayDanhSachKhoaHoc_PhanTrang',
      byCategory: '/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc',
      info: '/QuanLyKhoaHoc/LayThongTinKhoaHoc',
      studentInfo: '/QuanLyKhoaHoc/LayThongTinHocVienKhoaHoc',
      enroll: '/QuanLyKhoaHoc/DangKyKhoaHoc',
      unenroll: '/QuanLyKhoaHoc/HuyGhiDanh',
    },
    superUserOnly: {
      create: '/QuanLyKhoaHoc/ThemKhoaHoc',
      edit: '/QuanLyKhoaHoc/CapNhatKhoaHoc',
      delete: '/QuanLyKhoaHoc/XoaKhoaHoc',
      approve: '/QuanLyKhoaHoc/GhiDanhKhoaHoc',
      uploadImg: '/QuanLyKhoaHoc/ThemKhoaHocUploadHinh',
    },
  },
};
