<template>
  <div class="right-aside" id="pdfDom">
    <el-button @click="makeMpdf">导出为PDF</el-button>
    <el-button @click="download">download</el-button>
    <el-button @click="getHtml">getHtml</el-button>
    <el-button @click="saveHTML">saveHTML</el-button>
    <el-button @click="toGetPdf">toGetPdf</el-button>
  </div>
</template>

<script>
import JsPDF from 'jspdf'
import html2canvas from 'html2canvas'
export default {
  data () {
    return {
      JsPDF,
      html2canvas
    }
  },
  methods: {
    makeMpdf () {
      var doc = new JsPDF()
      doc.text('Hello world!', 10, 10)
      doc.save('a4.pdf')
    },
    download () {
      var element = document.getElementById('pdfDom') // 这个dom元素是要导出pdf的div容器
      var w = element.width // 获得该容器的宽
      var h = element.height // 获得该容器的高
      var offsetTop = element.offsetTop // 获得该容器到文档顶部的距离
      var offsetLeft = element.offsetLeft // 获得该容器到文档最左的距离
      var canvas = document.createElement('canvas')
      var abs = 0
      var width = window.width // 获得当前可视窗口的宽度（不包含滚动条）
      var Owidth = window.innerWidth // 获得当前窗口的宽度（包含滚动条）
      if (Owidth > width) {
        abs = (Owidth - width) / 2 // 获得滚动条长度的一半
      }
      canvas.width = w * 2 // 将画布宽&&高放大两倍
      canvas.height = h * 2
      var context = canvas.getContext('2d')
      context.scale(2, 2)
      context.translate(-offsetLeft - abs, -offsetTop)
      // 这里默认横向没有滚动条的情况，因为offset.left(),有无滚动条的时候存在差值，因此
      // translate的时候，要把这个差值去掉
      html2canvas(element).then(function (canvas) {
        var contentWidth = canvas.width
        var contentHeight = canvas.height
        // 一页pdf显示html页面生成的canvas高度;
        var pageHeight = (contentWidth / 592.28) * 841.89
        // 未生成pdf的html页面高度
        var leftHeight = contentHeight
        // 页面偏移
        var position = 0
        // a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
        var imgWidth = 595.28
        var imgHeight = (592.28 / contentWidth) * contentHeight

        var pageData = canvas.toDataURL('image/jpeg', 1.0)

        var pdf = new JsPDF('', 'pt', 'a4')

        // 有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
        // 当内容未超过pdf一页显示的范围，无需分页
        if (leftHeight < pageHeight) {
          pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
        } else {
          // 分页
          while (leftHeight > 0) {
            pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
            leftHeight -= pageHeight
            position -= 841.89
            // 避免添加空白页
            if (leftHeight > 0) {
              pdf.addPage()
            }
          }
        }
        pdf.save('我的简历.pdf')
      })
    },
    getHtml () {
      window.html2canvas = html2canvas
      var doc = new JsPDF()

      this.$nextTick(_ => {
        doc.html(document.body, {
          callback: function (doc) {
            doc.save()
          }
        })
      })
    },
    saveHTML () {
      // html2canvas(document.getElementById('pdfDom'), {
      //   onrendered: function (canvas) {
      //     var imgData = canvas.toDataURL(
      //       'image/png')
      //     var doc = new JsPDF('p', 'mm')
      //     doc.addImage(imgData, 'PNG', 10, 10)
      //     doc.save('sample-file.pdf')
      //   }
      // })

      var pdf = new JsPDF('p', 'pt', 'a4')

      pdf.addHTML(document.body, function () {
        pdf.output('datauri')
      })
    },
    toGetPdf () {
      // window.scrollTo(0, 0)
      // this.getPdf()

      var doc = new JsPDF()
      doc.text(10, 10, 'This is a test')
      doc.autoPrint({ variant: 'non-conform' })
      doc.save('autoprint.pdf')

      // doc.html(reporte.aclaracion, { x:20, y:140, callback: function (doc) { console.log(doc);
      // doc.text(80, 230, "Atentamente");
      // doc.line(60, 260, 150, 260);
      // doc.text(70, 265, data.firmante);
      // doc.text(70, 270, "Representante Legal");
      // $("#doc-container").show();
      // var iframe = document.getElementById("doc-show");
      // iframe.className = sizeA4;
      // iframe.src = doc.output('datauristring'); } }); }
    }
  }
}
</script>

<style>
</style>
