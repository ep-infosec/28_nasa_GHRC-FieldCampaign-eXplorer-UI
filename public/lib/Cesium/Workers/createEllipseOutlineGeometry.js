define(["./when-54c2dc71","./Check-6c0211bc","./Math-fc8cecf5","./Cartesian2-a8ce88a9","./Transforms-7e5c2db7","./RuntimeError-2109023a","./WebGLConstants-76bb35d1","./ComponentDatatype-6d99a1ee","./GeometryAttribute-bc86b131","./GeometryAttributes-4fcfcf40","./IndexDatatype-53503fee","./GeometryOffsetAttribute-7350d9af","./EllipseGeometryLibrary-8cd07d5b","./EllipseOutlineGeometry-39ac3179"],function(r,e,t,n,i,c,a,o,l,s,d,f,u,b){"use strict";return function(e,t){return r.defined(t)&&(e=b.EllipseOutlineGeometry.unpack(e,t)),e._center=n.Cartesian3.clone(e._center),e._ellipsoid=n.Ellipsoid.clone(e._ellipsoid),b.EllipseOutlineGeometry.createGeometry(e)}});
