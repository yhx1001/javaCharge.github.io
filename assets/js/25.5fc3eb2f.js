(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{418:function(t,a,s){"use strict";s.r(a);var n=s(19),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1、java-中异常分为哪些种类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、java-中异常分为哪些种类"}},[t._v("#")]),t._v(" 1、Java 中异常分为哪些种类？")]),t._v(" "),s("blockquote",[s("p",[t._v("按照异常需要处理的时机分为"),s("strong",[t._v("编译时异常（也叫强制性异常）也叫 CheckedException")]),t._v(" 和"),s("strong",[t._v("运行时异常（也叫非强制性异常）也叫 RuntimeException")]),t._v("。")]),t._v(" "),s("p",[t._v("只有 java 语言提供了 Checked 异常，Java 认为 Checked异常都是可以被处理的异常，所以 Java 程序必须显式处理 Checked 异常。如果程序没有处理 Checked 异常，该程序在编译时就会发生错误无法编译。这体现了 Java 的设计哲学：没有完善错误处理的代码根本没有机会被执行。")]),t._v(" "),s("p",[t._v("对 Checked 异常处理方法有两种：")]),t._v(" "),s("ol",[s("li",[t._v("当前方法知道如何处理该异常，则用 try...catch 块来处理该异常。")]),t._v(" "),s("li",[t._v("当前方法不知道如何处理，则在定义该方法是声明抛出该异常。")])]),t._v(" "),s("p",[t._v("运行时异常只有当代码在运行时才发行的异常，编译时不需要 try catch。Runtime 如"),s("strong",[t._v("除数是 0")]),t._v(" 和数组下标越界等，其产生频繁，处理麻烦，若显示申明或者捕获将会对程序的可读性和运行效率影响很大。所以由系统自动检测并将它们交给缺省的异常处理程序。当然如果你有处理要求也可以显示捕获它们。")])]),t._v(" "),s("h2",{attrs:{id:"_2、调用下面的方法-得到的返回值是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、调用下面的方法-得到的返回值是什么"}},[t._v("#")]),t._v(" 2、调用下面的方法，得到的返回值是什么？")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getNum")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("finally")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("p",[s("strong",[t._v("分析")]),t._v("：")]),t._v(" "),s("ol",[s("li",[t._v("代码走到第3行的时候，遇到了一个 MathException，因此第4行不会执行了，代码跳到catch里面")]),t._v(" "),s("li",[t._v("代码走到第6行的时候，异常机制有这么一个原则：如果在 catch 中遇到了 return 或者异常等能使该函数终止的话，那么有 finally 就必须先执行完 finally 代码块里面的代码，然后再返回值。因此跳到第8行。")]),t._v(" "),s("li",[t._v("第8行是一个return语句，这个时候就结束了，第6行的值无法被返回。返回值为3.")]),t._v(" "),s("li",[t._v("若第8行不是一个return语句，而是一个释放资源的操作，则返回值为2.")])]),t._v(" "),s("h2",{attrs:{id:"_3、error-和-exception-区别是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、error-和-exception-区别是什么"}},[t._v("#")]),t._v(" 3、Error 和 Exception 区别是什么？")]),t._v(" "),s("blockquote",[s("ul",[s("li",[s("strong",[t._v("Error 类型的错误通常为虚拟机相关错误，如系统崩溃，内存不足，堆栈溢出")]),t._v("等，编译器不会对这类错误进行检测，JAVA 应用程序也不应对这类错误进行捕获，一旦这类错误发生，通常应用程序会被终止，仅靠应用程序本身无法恢复；")]),t._v(" "),s("li",[s("strong",[t._v("Exception 类的错误是可以在应用程序中进行捕获并处理的")]),t._v("，通常遇到这种错误，应对其进行处理，使应用程序可以继续正常运行。")])])]),t._v(" "),s("h2",{attrs:{id:"_4、运行时异常和一般异常-受检异常-区别是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、运行时异常和一般异常-受检异常-区别是什么"}},[t._v("#")]),t._v(" 4、运行时异常和一般异常(受检异常)区别是什么？")]),t._v(" "),s("blockquote",[s("ul",[s("li",[s("strong",[t._v("运行时异常包括 RuntimeException 类及其子类")]),t._v("，表示 JVM 在运行期间可能出现的异常。 Java 编译器不会检查运行时异常。")]),t._v(" "),s("li",[t._v("受"),s("strong",[t._v("检异常是Exception 中除 RuntimeException 及其子类之外的异常")]),t._v("。 Java 编译器会检查受检异常。")]),t._v(" "),s("li",[s("strong",[t._v("RuntimeException异常和受检异常之间的区别")]),t._v("：是否强制要求调用者必须处理此异常，如果强制要求调用者必须进行处理，那么就使用受检异常，否则就选择非受检异常(RuntimeException)。")]),t._v(" "),s("li",[t._v("一般来讲，如果没有特殊的要求，我们建议使用RuntimeException异常。")])])]),t._v(" "),s("h2",{attrs:{id:"_5、throw-和-throws-的区别是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、throw-和-throws-的区别是什么"}},[t._v("#")]),t._v(" 5、throw 和 throws 的区别是什么？")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("throw:")])]),t._v(" "),s("ul",[s("li",[t._v("throw 语句用在方法体内，表示抛出异常，由方法体内的语句处理。")]),t._v(" "),s("li",[t._v("throw 是具体向外抛出异常的动作，所以它抛出的是一个异常实例，执行 throw 一定是抛出了某种异常。")])]),t._v(" "),s("p",[s("strong",[t._v("throws:")])]),t._v(" "),s("ul",[s("li",[t._v("throws 语句是用在方法声明后面，表示如果抛出异常，由该方法的调用者来进行异常的处理。")]),t._v(" "),s("li",[t._v("throws 主要是声明这个方法会抛出某种类型的异常，让它的使用者要知道需要捕获的异常的类型。")]),t._v(" "),s("li",[t._v("throws 表示出现异常的一种可能性，并不一定会发生这种异常。")])])]),t._v(" "),s("h2",{attrs:{id:"_6、final、finally、finalize-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6、final、finally、finalize-的区别"}},[t._v("#")]),t._v(" 6、final、finally、finalize 的区别？")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("final")]),t._v("：可用于修饰属性、方法、类。修饰的属性不可变（不能重新被赋值），方法不能重写，类不能继承。")]),t._v(" "),s("p",[s("strong",[t._v("finally")]),t._v("：异常处理语句try-catch的一部分，一般将一定要执行的代码放在finally代码块中，总是被执行，一般用来存放一些关闭资源的操作。")]),t._v(" "),s("p",[s("strong",[t._v("finalize")]),t._v("：Object 类的一个方法，在垃圾回收器执行的时候会调用被回收对象的此方法，可以覆盖此方法提供垃圾收集时的其他资源回收，例如关闭文件等。该方法更像是一个对象生命周期的临终方法，当该方法被系统调用则代表该对象即将“死亡”，但是需要注意的是，我们主动行为上去调用该方法并不会导致该对象“死亡”，这是一个被动的方法（其实就是回调方法），不需要我们调用。")])]),t._v(" "),s("h2",{attrs:{id:"_7、常见的-runtimeexception-有哪些"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7、常见的-runtimeexception-有哪些"}},[t._v("#")]),t._v(" 7、常见的 RuntimeException 有哪些？")]),t._v(" "),s("blockquote",[s("ul",[s("li",[s("strong",[t._v("ClassCastException")]),t._v("：数据类型转换异常")]),t._v(" "),s("li",[s("strong",[t._v("IndexOutOfBoundsException")]),t._v("：数组下标越界异常，常见于操作数组对象时发生。")]),t._v(" "),s("li",[s("strong",[t._v("NullPointerException")]),t._v("：空指针异常；出现原因：调用了未经初始化的对象或者是不存在的对象。")]),t._v(" "),s("li",[s("strong",[t._v("ClassNotFoundException")]),t._v("：指定的类找不到；出现原因：类的名称和路径加载错误；通常都是程序试图通过字符串来加载某个类时可能引发异常。")]),t._v(" "),s("li",[s("strong",[t._v("NumberFormatException")]),t._v("：字符串转换为数字异常；出现原因：字符型数据中包含非数字型字符。")]),t._v(" "),s("li",[s("strong",[t._v("IllegalArgumentException")]),t._v("：方法传递参数异常")]),t._v(" "),s("li",[s("strong",[t._v("NoClassDefFoundException")]),t._v("：未找到定义类异常")]),t._v(" "),s("li",[s("strong",[t._v("SQLException SQL")]),t._v("：常见于操作数据库时的 SQL 语句错误。")]),t._v(" "),s("li",[s("strong",[t._v("InstantiationException")]),t._v("：实例化异常。")]),t._v(" "),s("li",[s("strong",[t._v("NoSuchMethodException")]),t._v("：方法不存在异常")]),t._v(" "),s("li",[s("strong",[t._v("ArrayStoreException")]),t._v("：数据存储异常，操作数组时类型不一致")]),t._v(" "),s("li",[t._v("还有IO操作的BufferOverflowException异常")])])]),t._v(" "),s("h2",{attrs:{id:"_8、finally内存回收的情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8、finally内存回收的情况"}},[t._v("#")]),t._v(" 8、finally内存回收的情况？")]),t._v(" "),s("blockquote",[s("ol",[s("li",[t._v("如果在try... catch 部台用Connection 对象连接了数据库，而且在后继部台不会再用到这个连接对象，那么一定要在 finally从句中关闭该连接对象， 否则i亥连接对象所占用的内存资源无法被回收。")]),t._v(" "),s("li",[t._v("如果在try... catch 部分用到了一些IO对象进行了读写操作，那么也一定要在finally 中关闭这些IO对象，否则，IO对象所占用的内存资源无法被回收。")]),t._v(" "),s("li",[t._v("如果在try .catch 部分用到了ArrayList 、Linkedlist 、Hash Map 等集合对象，而且这些对象之后不会再被用到，那么在finally中建议通过调用clear方法来清空这些集合。")]),t._v(" "),s("li",[t._v("例如，在try .catch 语句中育一个对象obj 指向7一块比较大的内存空间（假设100MB) ，而且之后不会再被用到，那么在 finally 从句中建议写上 obj=null，这样能提升内存使用效率。")])])]),t._v(" "),s("h2",{attrs:{id:"_9、异常的设计原则有哪些"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9、异常的设计原则有哪些"}},[t._v("#")]),t._v(" 9、异常的设计原则有哪些？")]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("不要将异常处理用于正常的控制流")]),t._v(" "),s("li",[t._v("对可以恢复的情况使用受检异常，对编程错误使用运行时异常")]),t._v(" "),s("li",[t._v("避免不必要的使用受检异常")]),t._v(" "),s("li",[t._v("优先使用标准的异常")]),t._v(" "),s("li",[t._v("每个方法抛出的异常都要有文档")]),t._v(" "),s("li",[t._v("保持异常的原子性")]),t._v(" "),s("li",[t._v("不要在 catch 中忽略掉捕获到的异常")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);