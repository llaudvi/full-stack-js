const defaultColumns = {
  active: { type: Boolean, default: true },
  createdDate: { type: Date, default: Date.now },
  createdBy: { type: Number, default: 0 },
  modifiedDate: { type: Date, default: Date.now },
  modifiedBy: { type: Number, default: 0 },
};

export default defaultColumns;
