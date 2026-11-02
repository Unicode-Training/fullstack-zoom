# NPM = NODE PACKAGE MANAGER

## Cách hoạt động

- Quản lý trên giao diện dòng lệnh của npm
- Có file cấu hình (package.json, package-lock.json) để lưu trữ các package đã được cài đặt
- Sinh ra folder node_modules chứa source code của các thư viện đã cài đặt

## Khởi tạo dự án bằng npm

```shell
npm init -y
```

## Cài đặt 1 thư viện

```shell
npm i tenthuvien
```

```shell
npm i tenthuvien@tenbienpban
```

## Cài đặt tất cả dependencies có trong cấu hình

```shell
npm i
```

## Gỡ bỏ cài đặt 1 thư viện

```shell
npm un tenthuvien
```

## Các chế độ cài thư viện

1. Simple Dependencies

Thư viện bắt buộc phải có để chạy được dự án

```shell
npm i tenthuvien
```

2. Dev Dependencies

Các thư viện chỉ cần có trong quá trình phát triển, khi deploy lên server thì không cần

```shell
npm i tenthuvien --save-dev
```

Chỉ cài đặt tất cả thư viện thuộc Simple Dependencies

```shell
npm i --production
```

3. Global

```
npm i tenthuvien -g
```

## Update thư viện

- Khi update thư viện -> Chỉ update 2 số sau (minor, path)

```shell
npm update tenthuvien
```
