---
title: 栈--C++
date: 2024-01-21 03:32:47
permalink: /pages/2c06db/
categories:
  - 技术
  - 数据结构
tags:
  - 
author: 
  name: aXing
  link: https://github.com/08163356
---
[TOC]

#### 1.栈的特点

先进后出

#### 2.栈的种类

顺序栈（数组实现）和链式栈（链表实现），双栈没有特别了解

#### 3.栈的类定义

```C++
const int maxSize=50;
enum bool{false,true};
template<class T>
<!-- more -->
class Stack{
public:
    Stack(){};
    virtual void Push(const T& x)=0;
    virtual bool Pop(T& x)=0;
    virtual bool getTop(T& x)=0;//使用& x是将函数中的x的变化带回。
    virtual bool IsEmpty() const = 0;
    virtual bool IsFull() const=0;//常成员函数，不得修改类中的任何数据成员的值
    virtual int getSize() const=0;//计算栈中的元素个数
    };
```

##### 3.1 顺序栈的类定义

```C++
#include<assert.h> //断言。满足断言中参数的条件则继续执行，不满足则终止程序的执行
#include<iostream.h>
#include "Stack.h"
const int stackIncreament=20;//栈溢出扩展空间增量
template<class T>
class SeqStack: public Stack<T>{
public:
	SeqStack(int sz=50);
    ~SeqStack(){delete[] elements;}
    void Push(const T& x);
    bool Pop(T& x);
    bool getTop(T& x);
    bool IsEmpty()const {return (top==-1)?true:false}
    bool IsFull()const {return (top=maxSize-1)?true:false}
    int getSize()const {return top+1;}
    void MakeEmpty(){top=-1;}
    friend ostream& operater<<(ostream& os,SeqStack<T>& s);//操作符号重载如何实现？
private:
    T *elements;
    int top;
    int maxSize;
    void overflowProcess();
};
```

##### 3.2 顺序栈的构造函数

```C++
template<class T>
SeqStack<T>::SeqStack(int sz):top(-1),maxSize(sz){
    T* elements=new T[maxSize];
    assert(element!=null);
};//函数和类后面都要加冒号
```

##### 3.3 顺序栈函数实现

```C++
template<class T>
void SeqStack<T>::overflowStack(){
    T* newArray=new T[maxSize+stackIncreament];
    if(newArray=null){cerr<<"内存分配失败"<<endl;exit(1);}
    for(int i=0;i<=0;i++) newArray[i]=elements[i];
    maxSize=maxSize+stackIncreament;
    delete []elements;
    elements=newArray;
};

template<class T>//这是每实现一个函数都需要一个模板吗？
void SeqStack<T>::Push(const T& x){
    if(IsEmpty()==true) overflowStack();
    elements[++top]=x;
};
template<class T>
void SeqStack<T>::Pop(T& x){
    if(!IsEmpty()) return false;
    x=elements[top--];
    return true;
};

template<class T>
void SeqStack<T>::getTop(T& x){
    if(!IsEmpty())  return false;
    x=elements[top];
    return true;
};

template<class T>
ostream& operator<<(ostream& os,SeqStack<T>& s){
    os<<"top="<<s.top<<endl;
    for(int i;int i<=.stop;i++)
        os<<i<<":"<<s.element[i]<<endl;
    return os;
};

```

#### 4 链式栈

使用链式栈便于插入和删除，是用顺序栈便于查找。链式表的栈顶在链表的表头

##### 4.1链式栈节点定义

用struct定义LinkedNode类

```C++
class LinkList{
    struct LinkNode{
    int date;
    LinkNode *link;
    }
}
```

##### 4.2 链式栈的类定义及其实现

```C++
#include<iostream>
#include "LinkList.h"
#include "stack.h"
template<class T>
class LinkedStack: public Stack<T>{
public:
    LinkedStack():top(null){}
    ~LinkedStack(){makeEmpty();}
    void Push(const T& x);
    bool Pop(T& x);
    bool getTop(T& x)const;
    bool IsEmpty()const{return (top==null)?true:false;}
    int getSize()const;
    void makeEmpty();
    friend ostream& operator<<(ostream& os,SeqStack<T>& s);
private:
    LinkNode<T> *top;
};
//各方法实现

template<class T>
LinkedStack<T>::makeEmpty(){
    LinkNode<T> *p;
    while(!top){
        p=top;
        top=top->link;
        delete p;
    }
};

template<class T>
void LinkedStack<T>::Push(const T& x){
    top=new LinkNode<T>(x,top);
    assert(top);
};

template<class T>
void LinkedStack<T>::Pop(T& x){
    if(!IsEmpty){return false;}
    LinkNode<T> *p=top;
    top=top->link;
    x=p->date;
    delete p;
    return true;
};

template<class T>
bool LinkedStack<T>::getTop(T& x)const{//
    if(!IsEmpty){return false;}
    x=top->date;
    return true;
};

template<class T>
int LinkedStack<T>::getSize(T& x)const{
    LinkNode *p=top;
    int k=0;
    while(top){top=top->link;k++;}
    return k;
};

template<class T>
ostream& operator<<(ostream& os,LinkedStack<T>& s){
    os<<"The number of stack"<<s.getSize()<<endl;
    LinkNode<T> *p=s.getSize;
    int i=0;
    while(p){
        os<<++i<<":"<<p->date<<endl;
        p=p->link;
    }
    return os;
};
//定义了栈的基本结构，使用虚函数实现多态，顺序栈则使用顺序栈的使用方法，链式栈则使用链式栈的实现方法。
```

#### 5. 散装问题、知识点

##### 5.1 栈的应用场景？

- 逆序输出：首先把所有元素依次入栈，然后把所有元素出栈并输出，这样就实现了逆序输出。
- 语法检查，符号成对出现：括号都是成对出现的，比如“()”“[]”“{}”“<>”这些成对出现的符号
- 数制转换：将十进制的数转换为2-9的任意进制的数，过求余法，可以将十进制数转换为其他进制，比如要转为八进制，将十进制数除以8，记录余数，然后继续将商除以8，一直到商等于0为止，最后将余数倒着写数来就可以了

- 子程序的调用
- 处理递归调用
- 表达式的转换与求值
- 二叉树的遍历
- 图形的深度优先（depth-first）搜索法

##### 5.2 关于MarkDown目录生成

只要文章是按照markdown语法写作的。在需要生成目录的地方写[TOC]

