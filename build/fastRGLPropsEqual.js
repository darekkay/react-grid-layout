// this file was prevaled
module.exports = function fastRGLPropsEqual(a, b, isEqualImpl) {
  if (a === b) return true;
  return (
    a.className === b.className &&
    isEqualImpl(a.style, b.style) &&
    a.width === b.width &&
    a.autoSize === b.autoSize &&
    a.cols === b.cols &&
    a.draggableCancel === b.draggableCancel &&
    a.draggableHandle === b.draggableHandle &&
    isEqualImpl(a.verticalCompact, b.verticalCompact) &&
    isEqualImpl(a.compactType, b.compactType) &&
    isEqualImpl(a.layout, b.layout) &&
    isEqualImpl(a.margin, b.margin) &&
    isEqualImpl(a.containerPadding, b.containerPadding) &&
    a.rowHeight === b.rowHeight &&
    a.maxRows === b.maxRows &&
    a.isDraggable === b.isDraggable &&
    a.isResizable === b.isResizable &&
    a.preventCollision === b.preventCollision &&
    a.useCSSTransforms === b.useCSSTransforms &&
    a.transformScale === b.transformScale &&
    a.isDroppable === b.isDroppable &&
    a.onLayoutChange === b.onLayoutChange &&
    a.onDragStart === b.onDragStart &&
    a.onDrag === b.onDrag &&
    a.onDragStop === b.onDragStop &&
    a.onResizeStart === b.onResizeStart &&
    a.onResize === b.onResize &&
    a.onResizeStop === b.onResizeStop &&
    a.onDrop === b.onDrop &&
    isEqualImpl(a.droppingItem, b.droppingItem)
  );
};
