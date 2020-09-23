let _itemLI = ['GRAPHQL', 'API REST', 'SOAP','DEVOPS'];
const _elementId = (_id) => {
    return document.querySelector(_id);
};

var _contenedorPrincipal = _elementId('#contenedor-principal');

const _handleCreateElement = (_tag, _class, _id) => {
    let _element = document.createElement(_tag);
    if(_id !==null)_element.setAttribute('id', _id);
    if(_class !==null)_element.setAttribute('class', _class);
    return _element;
};
const _handleCrearImg = (_src, _alt, _title, _id) => {
    let imagenGrid = document.createElement('img');
    imagenGrid.id = _id;
    imagenGrid.src = _src;
    if (_alt !== null) imagenGrid.alt = _alt;
    if (_title !== null) imagenGrid.title = _title;
    return imagenGrid;
};

const _handleCreateText=(_tag, _class, _id, _text)=>{
let _element=_handleCreateElement(_tag,_class,_id);
let _textNode=document.createTextNode(_text);
_element.appendChild(_textNode);
return _element;
};

const _handleCrearItemLi = ( _arrayItem) => {
    let _addul = _handleCreateElement('ul', 'ul-wf', 'ul-wf');
    console.log(_addul);
    for (let i = 0; i < _arrayItem.length; i++) {
        let _li = _handleCreateElement('li', 'li-wf', 'li-wf');
        let _a =_handleCreateText('a', 'a-wf', 'a-wf',_arrayItem[i]);
        _a.href = '#';
        _li.appendChild(_a);
        _addul.appendChild(_li);
    }
    return _addul;
};

class DataImage {
    constructor(id, src, alt, title) {
        this.id = id;
        this.src = src;
        this.alt = alt;
        this.title = title;
    }
};

const _setIntervaleImage =()=>{
    setInterval(_verMasImagen,3000);
};

const _verMasImagen=()=>{
    let _imgLS=JSON.parse(_getImagenLocalStorage());
    let _imgLS2=JSON.parse(_getImagenLocalStorage());
    let _imgFig=_elementId('#imgFig');
    _imgFig.src=_imgLS.src;
    _imgFig.alt=_imgLS.alt;
    _imgFig.title=_imgLS.title;
    let _imgFig2=_elementId('#imgFig2');
    _imgFig2.src=_imgLS2.src;
    _imgFig2.alt=_imgLS2.alt;
    _imgFig2.title=_imgLS2.title;
    let _fgcap=_elementId('#fg-cap');
    _fgcap.innerHTML=_imgLS.alt;
    let _fgcap2=_elementId('#fg-cap2');
        _fgcap2.innerHTML=_imgLS2.alt;
};
const _getImagenLocalStorage=()=>{
    let _classDataImagen;
    let _notFound;
    try {
        let _lengthLS=localStorage.length;   
        let _idrnd=Math.floor(Math.random()*_lengthLS+1);                
        if(_lengthLS===0){
            _notFound=new DataImage('NF','http://via.placeholder.com/200x200','NOT FOUND','NOT FOUND');
            _classDataImagen=JSON.stringify(_notFound);
        }else{
             _classDataImagen=localStorage.getItem(_idrnd);
           
        }
    } catch (error) {
        console.log(error);
        _notFound=new DataImage('NF','http://via.placeholder.com/200x200','NOT FOUND','NOT FOUND');
            _classDataImagen=JSON.stringify(_notFound);
        _classDataImagen=new DataImage('NF','http://via.placeholder.com/200x200','NOT FOUND','NOT FOUND');
    }
    
        return _classDataImagen;
};

const _setImagenLocalStorage=()=>{
    let _lengthLS=localStorage.length;   
    let _id=_lengthLS+1;
    let _src=prompt('Ingrese url de la imagen');
    let _alt=prompt('Ingrese nombre de la imagen');
        _classDataImagen=new DataImage(_id,_src,_alt,_alt);
        localStorage.setItem(_id,JSON.stringify(_classDataImagen));
    return JSON.stringify(_classDataImagen);
};

(() => {
    let _header = _handleCreateElement('header', 'header-wf', 'header-wf');
    let _urlImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSD6bp0NEymcuKVfbf1YxMyn1o0jfL7F5o_Mg&usqp=CAU';
    let _imgLogo = _handleCrearImg( _urlImg, 'Lorem Ipsum', 'Lorem Ipsum','logo');
    let _navHeader = _handleCreateElement('nav', 'nav-wf', 'nav-wf');
    let _navUL = _handleCrearItemLi(_itemLI);
    _navHeader.appendChild(_navUL);
    
    _header.appendChild(_imgLogo);
    _header.appendChild(_navHeader);

    let _main = _handleCreateElement('main', 'main-wf', 'main-wf');
    let _divMain = _handleCreateElement('div', 'main-div-wf', 'main-div-wf');
    _divMain.appendChild(_handleCreateText('h1','main-h1-wf','main-h1-wf','Graphql'));
    let _lorem='GraphQL es un lenguaje de consulta y un tiempo de ejecución del servidor para las interfaces de programación de aplicaciones (API); su función es brindar a los clientes exactamente los datos que solicitan y nada más.';
    
    _divMain.appendChild(_handleCreateText('p','main-p-wf','main-p-wf',_lorem));
    
    _lorem='Con GraphQL, las API son rápidas, flexibles y sencillas para los desarrolladores. Incluso se pueden implementar en un entorno de desarrollo integrado (IDE) conocido como GraphiQL. Como alternativa a REST, GraphQL permite que los desarrolladores creen consultas para extraer datos de varias fuentes en una sola llamada a la API.';
    _divMain.appendChild(_handleCreateText('p','main-p-wf','main-p-wf',_lorem));

    let _urlImgMain = 'https://www.nylas.com/wp-content/uploads/GraphQL_Blog@2x.png';
    let _imgMain = _handleCrearImg(_urlImgMain, 'Lorem Ipsum', 'Lorem Ipsum','imgmain');
    
    _main.appendChild(_divMain);
    _main.appendChild(_imgMain);

    let _section=_handleCreateElement('section','sec','sec');
    let _figSec=_handleCreateElement('figure','sec-fig','sec-fig');
    let _figSec2=_handleCreateElement('figure','sec-fig2','sec-fig2');
    
    let _imgLS=JSON.parse(_getImagenLocalStorage());
    let _imgLS2=JSON.parse(_getImagenLocalStorage());
    
    let _srcFig=_imgLS.src;
    let _srcFig2=_imgLS2.src;
    let imgFig  = _handleCrearImg(_srcFig, _imgLS.alt, _imgLS.title,'imgFig');
    let imgFig2  = _handleCrearImg(_srcFig2, _imgLS2.alt, _imgLS2.title,'imgFig2');
    _figSec.appendChild(imgFig);
    _figSec2.appendChild(imgFig2);

    let _figcaption=_handleCreateText('figcaption','fg-cap','fg-cap',_imgLS.alt);
    let _figcaption2=_handleCreateText('figcaption','fg-cap2','fg-cap2',_imgLS2.alt);
    _figSec.appendChild(_figcaption);
    _figSec2.appendChild(_figcaption2);

    let _btnvermas= _handleCreateText('button','btn-vermas','btn-vermas','VER MÁS');
    _btnvermas.setAttribute('onclick','_setIntervaleImage()');
    let _addimg= _handleCreateText('button','addimg','addimg','+');
    _addimg.setAttribute('onclick','_setImagenLocalStorage()');
    _section.appendChild(_addimg);
    _section.appendChild(_figSec);
    _section.appendChild(_figSec2);
    _section.appendChild(_btnvermas);
    _contenedorPrincipal.appendChild(_header);
    _contenedorPrincipal.appendChild(_main);
    _contenedorPrincipal.appendChild(_section);


})();