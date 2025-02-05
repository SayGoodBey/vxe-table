export default {
  vxe: {
    error: {
      groupFixed: '如果使用分組表頭，固定列必須按組設定',
      groupMouseRange: '分组表頭與 "{{0}}" 不能同時使用，這可能會出現錯誤',
      scrollErrProp: '啟用虛擬滾動後不支持該參數 "{{0}}"',
      scrollXNotGroup: '橫向虛擬滾動不支持分組表頭，請修改正確 "scroll-x.gt" 的參數，否則可能會導致出現錯誤',
      errConflicts: '參數 "{{0}}" 與 "{{1}}" 有衝突',
      unableInsert: '無法插入到指定位置，請檢查參數是否正確',
      useErr: '安裝 "{{0}}" 模組時發生錯誤，可能順序不正確，依賴的模組需要在Table之前安裝',
      barUnableLink: '工具欄無法關聯表格',
      expandContent: '展開行的插槽應該是 “content”，請檢查是否正確',
      reqModule: '缺少 "{{0}}" 模組',
      reqProp: '缺少必要的 "{{0}}" 參數，可能會導致出現錯誤',
      emptyProp: '參數 "{{0}}" 不允許為空',
      errProp: '不支持的參數 "{{0}}"，可能為 "{{1}}"',
      fieldRepet: '列欄位 "{{0}}" 重複了，這可能會導致某些功能無法使用',
      notFunc: '方法 "{{0}}" 不存在',
      notSlot: '插槽 "{{0}}" 不存在',
      noTree: '樹狀結構不支援 {{0}}',
      delFunc: '方法 "{{0}}" 已停用，請使用 "{{1}}"',
      delProp: '參數 "{{0}}" 已停用，請使用 "{{1}}"',
      delEvent: '事件 "{{0}}" 已停用，請使用 "{{1}}"',
      removeProp: '參數 "{{0}}" 已停用，不建議使用，這可能會導致出現錯誤',
      errFormat: '全域的格式化內容應該使用 "VXETable.formats" 定義，掛載 "formatter={{0}}" 的管道已不建議使用',
      notType: '不支持的檔案類型 "{{0}}"',
      notExp: '該瀏覽器不支持導入/匯出功能',
      impFields: '導入失敗，請檢查欄位名和數據格式是否正確',
      treeNotImp: '樹狀表格不支持導入'
    },
    table: {
      emptyText: '暫無資料',
      allTitle: '全選/取消',
      seqTitle: '#',
      confirmFilter: '篩選',
      resetFilter: '重置',
      allFilter: '全部',
      sortAsc: '按低到高排序',
      sortDesc: '按高到低排序',
      filter: '對所選的列啟用篩選',
      impSuccess: '成功導入 {{0}} 條記錄',
      expLoading: '正在匯出中',
      expSuccess: '匯出成功',
      expOriginFilename: '匯出_{{0}}',
      expSrcFilename: '匯出_從_{{0}}',
      customTitle: '列設定',
      customAll: '全部',
      customConfirm: '確認',
      customRestore: '還原'
    },
    grid: {
      selectOneRecord: '請至少選擇一條記錄！',
      deleteSelectRecord: '您確定要刪除所選記錄嗎？',
      removeSelectRecord: '您確定要移除所選記錄嗎？',
      dataUnchanged: '資料未更改！ ',
      delSuccess: '成功删除所選記錄！',
      saveSuccess: '保存成功！',
      operError: '發生錯誤，操作失敗！'
    },
    pager: {
      goto: '前往',
      pagesize: '{{0}}項/頁',
      total: '共 {{0}} 項記錄',
      pageClassifier: '頁',
      prevPage: '上一頁',
      nextPage: '下一頁',
      prevJump: '向上跳頁',
      nextJump: '向下跳頁'
    },
    alert: {
      title: '訊息提示'
    },
    button: {
      confirm: '確認',
      cancel: '取消'
    },
    import: {
      modes: {
        covering: '覆盖',
        insert: '新增'
      },
      impTitle: '導入參數設置',
      impFile: '檔名',
      impSelect: '選擇檔案',
      impType: '檔案類型',
      impOpts: '導入選項',
      impConfirm: '導入'
    },
    export: {
      types: {
        csv: 'CSV (逗号分隔)(*.csv)',
        html: '網頁(*.html)',
        xml: 'XML 文件(*.xml)',
        txt: '文本文件(制表符分隔)(*.txt)',
        xlsx: 'Excel 工作簿(*.xlsx)',
        pdf: 'PDF (*.pdf)'
      },
      modes: {
        current: '當前數據（當前頁的數據）',
        selected: '選中數據（當前頁選中的數據）',
        all: '全量數據（包括所有分頁的數據）'
      },
      expTitle: '匯出參數設置',
      expName: '檔名',
      expNamePlaceholder: '請輸入檔名',
      expSheetName: '標題',
      expSheetNamePlaceholder: '請輸入標題',
      expType: '保存類型',
      expMode: '要匯出的數據',
      expCurrentColumn: '全部欄位',
      expColumn: '要匯出的欄位',
      expOpts: '匯出選項',
      expOptHeader: '錶頭',
      expHeaderTitle: '是否需要匯出表頭',
      expOptFooter: '錶尾',
      expFooterTitle: '是否需要匯出錶尾',
      expOptOriginal: '源數據',
      expOriginalTitle: '是否需要匯出源數據，如果勾上則支持導入到表格中',
      expPrint: '列印',
      expConfirm: '匯出'
    },
    modal: {
      zoomIn: '最大化',
      zoomOut: '還原',
      close: '關閉'
    },
    form: {
      folding: '收起',
      unfolding: '展開'
    },
    toolbar: {
      import: '導入',
      export: '匯出',
      print: '列印',
      refresh: '刷新',
      zoomIn: '全螢幕',
      zoomOut: '還原',
      custom: '列設定',
      customAll: '全部',
      customConfirm: '確認',
      customRestore: '還原'
    },
    input: {
      date: {
        m1: '01 月',
        m2: '02 月',
        m3: '03 月',
        m4: '04 月',
        m5: '05 月',
        m6: '06 月',
        m7: '07 月',
        m8: '08 月',
        m9: '09 月',
        m10: '10 月',
        m11: '11 月',
        m12: '12 月',
        monthLabel: '{{0}} 年',
        dayLabel: '{{0}} 年 {{1}}',
        labelFormat: {
          date: 'yyyy-MM-dd',
          datetime: 'yyyy-MM-dd HH:mm:ss',
          week: 'yyyy 年第 WW 周',
          month: 'yyyy-MM',
          year: 'yyyy'
        },
        weeks: {
          w: '周',
          w0: '周日',
          w1: '周一',
          w2: '周二',
          w3: '周三',
          w4: '周四',
          w5: '周五',
          w6: '周六'
        },
        months: {
          m0: '一月',
          m1: '二月',
          m2: '三月',
          m3: '四月',
          m4: '五月',
          m5: '六月',
          m6: '七月',
          m7: '八月',
          m8: '九月',
          m9: '十月',
          m10: '十一月',
          m11: '十二月'
        }
      }
    }
  }
}
