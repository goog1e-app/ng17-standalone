# Angular 17 Standalone

## 生成的讀我

此項目是使用 [Angular CLI](https://github.com/angular/angular-cli) 版本 17.3.8 產生的。

```shell
ngvm new ng17-standalone \
--routing=true \
-g \
-S \
--standalone=true \
--style=scss \
-ng 17
```

### 開發伺服器

運行 `ng serve` 啟動開發服務器，導航至 [`http://localhost:4200/`](http://localhost:4200/)；若更改任何源代碼，應用程式會自動重新載入。

### 搭建源代碼

運行 `ng generate component component-name` 以生成新組件：也可以使用 `ng generate directive|pipe|service|class|guard|interface|enum|module`。

### 組建

運行 `ng build` 以構建專案，構建成品位於 `dist/` 目錄中。

### 運行端到端測試

運行 `ng e2e` 以選擇的平臺執行端到端測試；使用此命令須先添加一個實現端到端測試功能的套件包。

### 更多說明

運行 `ng help` 獲取有關 Angular CLI 的更多說明，或查看 [Angular CLI Overview and Command Reference](https://angular.io/cli)。
