<%@ include file="/init.jsp"%>

<div ng-controller='ImagenController'>
	<h1>Imágenes</h1>
	<hr></hr>
	{{54+56}}
	    <div class="row">
        <div class="col-sm-3">
            <a href="#" class="nav-tabs-dropdown btn btn-block btn-primary">Imágenes</a>
            <ul id="nav-tabs-wrapper" class="nav nav-tabs nav-pills nav-stacked well">
              <li ng-click="getRandomDog()" ><a href="#vtab1" data-toggle="tab">Perros</a></li>
              <li ng-click="getRandomCat()" ><a href="#vtab2" data-toggle="tab">Gatos</a></li>
              <li ng-click="getRandomImagen()" ><a href="#vtab3" data-toggle="tab">Al Azar</a></li>              
            </ul>
        </div>
        <div class="col-sm-9">
            <div class="tab-content">
                <div role="tabpanel" class="tab-pane fade in active" id="vtab1">
                    <pre>
                      <h3>Perros</h3>
	                    <img ng-src="{{imageDog}}" width="500" height="400">
                    </pre>                    
                </div>
                <div role="tabpanel" class="tab-pane fade" id="vtab2">
	                <pre>
	                	 <h3>Gatos</h3>
                     <img ng-src="{{imageCat}}" width="500" height="400">
					          </div>	                			
                 </pre>
                 <div role="tabpanel" class="tab-pane fade" id="vtab3">
	                <pre>
	                	 <h3>Azar</h3>
                     <img ng-src="{{imageRandomImagen}}" width="500" height="400">
					          </div>	                			
                 </pre>
	          </div>
        </div>
    </div>
</div>