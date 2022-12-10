define(["exports","./when-54c2dc71","./Math-1124a290","./Cartesian2-36f5627e","./arrayRemoveDuplicates-0263f42c","./PolylinePipeline-40aa9043"],function(e,f,A,C,w,M){"use strict";var i={};var b=new C.Cartographic,E=new C.Cartographic;function F(e,i,t,a){var r=(i=w.arrayRemoveDuplicates(i,C.Cartesian3.equalsEpsilon,!0)).length;if(!(r<2)){var n=f.defined(a),o=f.defined(t),h=!0,l=new Array(r),s=new Array(r),g=new Array(r),p=i[0];l[0]=p;var u=e.cartesianToCartographic(p,b);o&&(u.height=t[0]),h=h&&u.height<=0,s[0]=u.height,g[0]=n?a[0]:0;for(var c,d,v=1,y=1;y<r;++y){var m=i[y],P=e.cartesianToCartographic(m,E);o&&(P.height=t[y]),h=h&&P.height<=0,c=u,d=P,A.CesiumMath.equalsEpsilon(c.latitude,d.latitude,A.CesiumMath.EPSILON10)&&A.CesiumMath.equalsEpsilon(c.longitude,d.longitude,A.CesiumMath.EPSILON10)?u.height<P.height&&(s[v-1]=P.height):(l[v]=m,s[v]=P.height,g[v]=n?a[y]:0,C.Cartographic.clone(P,u),++v)}if(!(h||v<2))return l.length=v,s.length=v,g.length=v,{positions:l,topHeights:s,bottomHeights:g}}}var H=new Array(2),L=new Array(2),q={positions:void 0,height:void 0,granularity:void 0,ellipsoid:void 0};i.computePositions=function(e,i,t,a,r,n){var o=F(e,i,t,a);if(f.defined(o)){i=o.positions,t=o.topHeights,a=o.bottomHeights;var h,l,s=i.length,g=s-2,p=A.CesiumMath.chordLength(r,e.maximumRadius),u=q;if(u.minDistance=p,u.ellipsoid=e,n){for(var c=0,d=0;d<s-1;d++)c+=M.PolylinePipeline.numberOfPoints(i[d],i[d+1],p)+1;h=new Float64Array(3*c),l=new Float64Array(3*c);var v=H,y=L;u.positions=v,u.height=y;var m=0;for(d=0;d<s-1;d++){v[0]=i[d],v[1]=i[d+1],y[0]=t[d],y[1]=t[d+1];var P=M.PolylinePipeline.generateArc(u);h.set(P,m),y[0]=a[d],y[1]=a[d+1],l.set(M.PolylinePipeline.generateArc(u),m),m+=P.length}}else u.positions=i,u.height=t,h=new Float64Array(M.PolylinePipeline.generateArc(u)),u.height=a,l=new Float64Array(M.PolylinePipeline.generateArc(u));return{bottomPositions:l,topPositions:h,numCorners:g}}},e.WallGeometryLibrary=i});
//# sourceMappingURL=WallGeometryLibrary-8cb3e0c0.js.map
