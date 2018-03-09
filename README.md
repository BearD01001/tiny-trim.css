# tiny-trim.css

> Tiny trim CSS class utils for Element, Bootstrap, etc.

### TOC

- [tiny-trim.css](#tiny-trimcss)
        - [TOC](#toc)
        - [Use](#use)
        - [Utils sheet](#utils-sheet)
        - [Custom](#custom)

### Use

1.  Install from npm package.

```bash
$ npm i tiny-trim.css -S
```

2.  Import to project.

```js
import 'tiny-trim.css'
```

3.  Enjoy it!

### Utils sheet

| Selector       | Declaration             |
| -------------- | ----------------------- |
| **position**   | ----------------------- |
| .pos-a         | position: absolute      |
| .pos-r         | position: relative      |
| .pos-s         | position: static        |
| .pos-f         | position: fixed         |
| **display**    | ----------------------- |
| .dp-i          | display: inline         |
| .dp-b          | display: block          |
| .dp-n          | display: none           |
| .dp-ib         | display: inline-block   |
| **visibility** | ----------------------- |
| .vs-h          | visibility: hidden      |
| .vs-v          | visibility: visible     |
| **box-sizing** | ----------------------- |
| .bs-bb         | box-sizing: border-box  |
| .bs-cb         | box-sizing: content-box |
| **overflow**   | ----------------------- |
| .of-h          | overflow: hidden        |
| .of-v          | overflow: visible       |
| .of-s          | overflow: scroll        |
| .of-a          | overflow: auto          |
| .ox-h          | overflow-x: hidden      |
| .ox-v          | overflow-x: visible     |
| .ox-s          | overflow-x: scroll      |
| .ox-a          | overflow-x: auto        |
| .oy-h          | overflow-y: hidden      |
| .oy-v          | overflow-y: visible     |
| .oy-s          | overflow-y: scroll      |
| .oy-a          | overflow-y: auto        |
| **top**        | ----------------------- |
| .t-0           | top: 0                  |
| .t-5           | top: 5px                |
| .t-10          | top: 10px               |
| .t-15          | top: 15px               |
| **right**      | ----------------------- |
| .r-0           | right: 0                |
| .r-5           | right: 5px              |
| .r-10          | right: 10px             |
| .r-15          | right: 15px             |
| **bottom**     | ----------------------- |
| .b-0           | bottom: 0               |
| .b-5           | bottom: 5px             |
| .b-10          | bottom: 10px            |
| .b-15          | bottom: 15px            |
| **left**       | ----------------------- |
| .l-0           | left: 0                 |
| .l-5           | left: 5px               |
| .l-10          | left: 10px              |
| .l-15          | left: 15px              |
| **margin**     | ----------------------- |
| .m-0           | margin: 0               |
| .m-5           | margin: 5px             |
| .m-10          | margin: 10px            |
| .m-15          | margin: 15px            |
| .mt-0          | margin-top: 0           |
| .mt-5          | margin-top: 5px         |
| .mt-10         | margin-top: 10px        |
| .mt-15         | margin-top: 15px        |
| .mr-0          | margin-right: 0         |
| .mr-5          | margin-right: 5px       |
| .mr-10         | margin-right: 10px      |
| .mr-15         | margin-right: 15px      |
| .mb-0          | margin-bottom: 0        |
| .mb-5          | margin-bottom: 5px      |
| .mb-10         | margin-bottom: 10px     |
| .mb-15         | margin-bottom: 15px     |
| .ml-0          | margin-left: 0          |
| .ml-5          | margin-left: 5px        |
| .ml-10         | margin-left: 10px       |
| .ml-15         | margin-left: 15px       |
| **padding**    | ----------------------- |
| .p-0           | padding: 0              |
| .p-5           | padding: 5px            |
| .p-10          | padding: 10px           |
| .p-15          | padding: 15px           |
| .pt-0          | padding-top: 0          |
| .pt-5          | padding-top: 5px        |
| .pt-10         | padding-top: 10px       |
| .pt-15         | padding-top: 15px       |
| .pr-0          | padding-right: 0        |
| .pr-5          | padding-right: 5px      |
| .pr-10         | padding-right: 10px     |
| .pr-15         | padding-right: 15px     |
| .pb-0          | padding-bottom: 0       |
| .pb-5          | padding-bottom: 5px     |
| .pb-10         | padding-bottom: 10px    |
| .pb-15         | padding-bottom: 15px    |
| .pl-0          | padding-left: 0         |
| .pl-5          | padding-left: 5px       |
| .pl-10         | padding-left: 10px      |
| .pl-15         | padding-left: 15px      |
| **text-align** | ----------------------- |
| .ta-l          | text-align: left        |
| .ta-r          | text-align: right       |
| .ta-c          | text-align: center      |
| .ta-j          | text-align: justify     |
| .ta-i          | text-align: initial     |
| **others**     | ----------------------- |
| .td-none       | text-decoration: none   |
| .bd-none       | border: none            |
| .wd-100        | width: 100%             |

### Custom

1.  Clone this repository.

```bash
$ git clone https://github.com/BearD01001/tiny-trim.css.git
```

2.  Install dependencies.

```bash
$ cd tiny-trim.css/ && npm i
```

3.  Run building task.

```bash
$ npm start
```

4.  Modify `src/config.scss` or `src/tiny-trim.scss`.
5.  Got your own custom files in the `dist/` directory.
