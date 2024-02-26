(() => {
    var __webpack_modules__ = {
        601: (__unused_webpack_module, exports, __webpack_require__) => {
            "use strict";
            /**
 * Support for translating between Uint8Array instances and JavaScript
 * native types.
 *
 * {@link module:Layout~Layout|Layout} is the basis of a class
 * hierarchy that associates property names with sequences of encoded
 * bytes.
 *
 * Layouts are supported for these scalar (numeric) types:
 * * {@link module:Layout~UInt|Unsigned integers in little-endian
 *   format} with {@link module:Layout.u8|8-bit}, {@link
 *   module:Layout.u16|16-bit}, {@link module:Layout.u24|24-bit},
 *   {@link module:Layout.u32|32-bit}, {@link
 *   module:Layout.u40|40-bit}, and {@link module:Layout.u48|48-bit}
 *   representation ranges;
 * * {@link module:Layout~UIntBE|Unsigned integers in big-endian
 *   format} with {@link module:Layout.u16be|16-bit}, {@link
 *   module:Layout.u24be|24-bit}, {@link module:Layout.u32be|32-bit},
 *   {@link module:Layout.u40be|40-bit}, and {@link
 *   module:Layout.u48be|48-bit} representation ranges;
 * * {@link module:Layout~Int|Signed integers in little-endian
 *   format} with {@link module:Layout.s8|8-bit}, {@link
 *   module:Layout.s16|16-bit}, {@link module:Layout.s24|24-bit},
 *   {@link module:Layout.s32|32-bit}, {@link
 *   module:Layout.s40|40-bit}, and {@link module:Layout.s48|48-bit}
 *   representation ranges;
 * * {@link module:Layout~IntBE|Signed integers in big-endian format}
 *   with {@link module:Layout.s16be|16-bit}, {@link
 *   module:Layout.s24be|24-bit}, {@link module:Layout.s32be|32-bit},
 *   {@link module:Layout.s40be|40-bit}, and {@link
 *   module:Layout.s48be|48-bit} representation ranges;
 * * 64-bit integral values that decode to an exact (if magnitude is
 *   less than 2^53) or nearby integral Number in {@link
 *   module:Layout.nu64|unsigned little-endian}, {@link
 *   module:Layout.nu64be|unsigned big-endian}, {@link
 *   module:Layout.ns64|signed little-endian}, and {@link
 *   module:Layout.ns64be|unsigned big-endian} encodings;
 * * 32-bit floating point values with {@link
 *   module:Layout.f32|little-endian} and {@link
 *   module:Layout.f32be|big-endian} representations;
 * * 64-bit floating point values with {@link
 *   module:Layout.f64|little-endian} and {@link
 *   module:Layout.f64be|big-endian} representations;
 * * {@link module:Layout.const|Constants} that take no space in the
 *   encoded expression.
 *
 * and for these aggregate types:
 * * {@link module:Layout.seq|Sequence}s of instances of a {@link
 *   module:Layout~Layout|Layout}, with JavaScript representation as
 *   an Array and constant or data-dependent {@link
 *   module:Layout~Sequence#count|length};
 * * {@link module:Layout.struct|Structure}s that aggregate a
 *   heterogeneous sequence of {@link module:Layout~Layout|Layout}
 *   instances, with JavaScript representation as an Object;
 * * {@link module:Layout.union|Union}s that support multiple {@link
 *   module:Layout~VariantLayout|variant layouts} over a fixed
 *   (padded) or variable (not padded) span of bytes, using an
 *   unsigned integer at the start of the data or a separate {@link
 *   module:Layout.unionLayoutDiscriminator|layout element} to
 *   determine which layout to use when interpreting the buffer
 *   contents;
 * * {@link module:Layout.bits|BitStructure}s that contain a sequence
 *   of individual {@link
 *   module:Layout~BitStructure#addField|BitField}s packed into an 8,
 *   16, 24, or 32-bit unsigned integer starting at the least- or
 *   most-significant bit;
 * * {@link module:Layout.cstr|C strings} of varying length;
 * * {@link module:Layout.blob|Blobs} of fixed- or variable-{@link
 *   module:Layout~Blob#length|length} raw data.
 *
 * All {@link module:Layout~Layout|Layout} instances are immutable
 * after construction, to prevent internal state from becoming
 * inconsistent.
 *
 * @local Layout
 * @local ExternalLayout
 * @local GreedyCount
 * @local OffsetLayout
 * @local UInt
 * @local UIntBE
 * @local Int
 * @local IntBE
 * @local NearUInt64
 * @local NearUInt64BE
 * @local NearInt64
 * @local NearInt64BE
 * @local Float
 * @local FloatBE
 * @local Double
 * @local DoubleBE
 * @local Sequence
 * @local Structure
 * @local UnionDiscriminator
 * @local UnionLayoutDiscriminator
 * @local Union
 * @local VariantLayout
 * @local BitStructure
 * @local BitField
 * @local Boolean
 * @local Blob
 * @local CString
 * @local Constant
 * @local bindConstructorLayout
 * @module Layout
 * @license MIT
 * @author Peter A. Bigot
 * @see {@link https://github.com/pabigot/buffer-layout|buffer-layout on GitHub}
 */
            ({
                value: true
            });
            exports.I0 = exports.DH = exports.NX = exports.u8 = exports.cY = void 0;
            exports.av = exports.O6 = exports.w3 = exports.Wg = void 0;
            const buffer_1 = __webpack_require__(153);
            function checkUint8Array(b) {
                if (!(b instanceof Uint8Array)) throw new TypeError("b must be a Uint8Array");
            }
            checkUint8Array;
            function uint8ArrayToBuffer(b) {
                checkUint8Array(b);
                return buffer_1.Buffer.from(b.buffer, b.byteOffset, b.length);
            }
            uint8ArrayToBuffer;
            class Layout {
                constructor(span, property) {
                    if (!Number.isInteger(span)) throw new TypeError("span must be an integer");
                    this.span = span;
                    this.property = property;
                }
                makeDestinationObject() {
                    return {};
                }
                getSpan(b, offset) {
                    if (0 > this.span) throw new RangeError("indeterminate span");
                    return this.span;
                }
                replicate(property) {
                    const rv = Object.create(this.constructor.prototype);
                    Object.assign(rv, this);
                    rv.property = property;
                    return rv;
                }
                fromArray(values) {
                    return;
                }
            }
            Layout;
            function nameWithProperty(name, lo) {
                if (lo.property) return name + "[" + lo.property + "]";
                return name;
            }
            nameWithProperty;
            function bindConstructorLayout(Class, layout) {
                if ("function" !== typeof Class) throw new TypeError("Class must be constructor");
                if (Object.prototype.hasOwnProperty.call(Class, "layout_")) throw new Error("Class is already bound to a layout");
                if (!(layout && layout instanceof Layout)) throw new TypeError("layout must be a Layout");
                if (Object.prototype.hasOwnProperty.call(layout, "boundConstructor_")) throw new Error("layout is already bound to a constructor");
                Class.layout_ = layout;
                layout.boundConstructor_ = Class;
                layout.makeDestinationObject = () => new Class;
                Object.defineProperty(Class.prototype, "encode", {
                    value(b, offset) {
                        return layout.encode(this, b, offset);
                    },
                    writable: true
                });
                Object.defineProperty(Class, "decode", {
                    value(b, offset) {
                        return layout.decode(b, offset);
                    },
                    writable: true
                });
            }
            bindConstructorLayout;
            class ExternalLayout extends Layout {
                isCount() {
                    throw new Error("ExternalLayout is abstract");
                }
            }
            ExternalLayout;
            class GreedyCount extends ExternalLayout {
                constructor(elementSpan = 1, property) {
                    if (!Number.isInteger(elementSpan) || 0 >= elementSpan) throw new TypeError("elementSpan must be a (positive) integer");
                    super(-1, property);
                    this.elementSpan = elementSpan;
                }
                isCount() {
                    return true;
                }
                decode(b, offset = 0) {
                    checkUint8Array(b);
                    const rem = b.length - offset;
                    return Math.floor(rem / this.elementSpan);
                }
                encode(src, b, offset) {
                    return 0;
                }
            }
            GreedyCount;
            class OffsetLayout extends ExternalLayout {
                constructor(layout, offset = 0, property) {
                    if (!(layout instanceof Layout)) throw new TypeError("layout must be a Layout");
                    if (!Number.isInteger(offset)) throw new TypeError("offset must be integer or undefined");
                    super(layout.span, property || layout.property);
                    this.layout = layout;
                    this.offset = offset;
                }
                isCount() {
                    return this.layout instanceof UInt || this.layout instanceof UIntBE;
                }
                decode(b, offset = 0) {
                    return this.layout.decode(b, offset + this.offset);
                }
                encode(src, b, offset = 0) {
                    return this.layout.encode(src, b, offset + this.offset);
                }
            }
            OffsetLayout;
            class UInt extends Layout {
                constructor(span, property) {
                    super(span, property);
                    if (6 < this.span) throw new RangeError("span must not exceed 6 bytes");
                }
                decode(b, offset = 0) {
                    return uint8ArrayToBuffer(b).readUIntLE(offset, this.span);
                }
                encode(src, b, offset = 0) {
                    uint8ArrayToBuffer(b).writeUIntLE(src, offset, this.span);
                    return this.span;
                }
            }
            UInt;
            class UIntBE extends Layout {
                constructor(span, property) {
                    super(span, property);
                    if (6 < this.span) throw new RangeError("span must not exceed 6 bytes");
                }
                decode(b, offset = 0) {
                    return uint8ArrayToBuffer(b).readUIntBE(offset, this.span);
                }
                encode(src, b, offset = 0) {
                    uint8ArrayToBuffer(b).writeUIntBE(src, offset, this.span);
                    return this.span;
                }
            }
            UIntBE;
            class Int extends Layout {
                constructor(span, property) {
                    super(span, property);
                    if (6 < this.span) throw new RangeError("span must not exceed 6 bytes");
                }
                decode(b, offset = 0) {
                    return uint8ArrayToBuffer(b).readIntLE(offset, this.span);
                }
                encode(src, b, offset = 0) {
                    uint8ArrayToBuffer(b).writeIntLE(src, offset, this.span);
                    return this.span;
                }
            }
            Int;
            class IntBE extends Layout {
                constructor(span, property) {
                    super(span, property);
                    if (6 < this.span) throw new RangeError("span must not exceed 6 bytes");
                }
                decode(b, offset = 0) {
                    return uint8ArrayToBuffer(b).readIntBE(offset, this.span);
                }
                encode(src, b, offset = 0) {
                    uint8ArrayToBuffer(b).writeIntBE(src, offset, this.span);
                    return this.span;
                }
            }
            IntBE;
            const V2E32 = Math.pow(2, 32);
            function divmodInt64(src) {
                const hi32 = Math.floor(src / V2E32);
                const lo32 = src - hi32 * V2E32;
                return {
                    hi32,
                    lo32
                };
            }
            function roundedInt64(hi32, lo32) {
                return hi32 * V2E32 + lo32;
            }
            class NearUInt64 extends Layout {
                constructor(property) {
                    super(8, property);
                }
                decode(b, offset = 0) {
                    const buffer = uint8ArrayToBuffer(b);
                    const lo32 = buffer.readUInt32LE(offset);
                    const hi32 = buffer.readUInt32LE(offset + 4);
                    return roundedInt64(hi32, lo32);
                }
                encode(src, b, offset = 0) {
                    const split = divmodInt64(src);
                    const buffer = uint8ArrayToBuffer(b);
                    buffer.writeUInt32LE(split.lo32, offset);
                    buffer.writeUInt32LE(split.hi32, offset + 4);
                    return 8;
                }
            }
            NearUInt64;
            class NearUInt64BE extends Layout {
                constructor(property) {
                    super(8, property);
                }
                decode(b, offset = 0) {
                    const buffer = uint8ArrayToBuffer(b);
                    const hi32 = buffer.readUInt32BE(offset);
                    const lo32 = buffer.readUInt32BE(offset + 4);
                    return roundedInt64(hi32, lo32);
                }
                encode(src, b, offset = 0) {
                    const split = divmodInt64(src);
                    const buffer = uint8ArrayToBuffer(b);
                    buffer.writeUInt32BE(split.hi32, offset);
                    buffer.writeUInt32BE(split.lo32, offset + 4);
                    return 8;
                }
            }
            NearUInt64BE;
            class NearInt64 extends Layout {
                constructor(property) {
                    super(8, property);
                }
                decode(b, offset = 0) {
                    const buffer = uint8ArrayToBuffer(b);
                    const lo32 = buffer.readUInt32LE(offset);
                    const hi32 = buffer.readInt32LE(offset + 4);
                    return roundedInt64(hi32, lo32);
                }
                encode(src, b, offset = 0) {
                    const split = divmodInt64(src);
                    const buffer = uint8ArrayToBuffer(b);
                    buffer.writeUInt32LE(split.lo32, offset);
                    buffer.writeInt32LE(split.hi32, offset + 4);
                    return 8;
                }
            }
            NearInt64;
            class NearInt64BE extends Layout {
                constructor(property) {
                    super(8, property);
                }
                decode(b, offset = 0) {
                    const buffer = uint8ArrayToBuffer(b);
                    const hi32 = buffer.readInt32BE(offset);
                    const lo32 = buffer.readUInt32BE(offset + 4);
                    return roundedInt64(hi32, lo32);
                }
                encode(src, b, offset = 0) {
                    const split = divmodInt64(src);
                    const buffer = uint8ArrayToBuffer(b);
                    buffer.writeInt32BE(split.hi32, offset);
                    buffer.writeUInt32BE(split.lo32, offset + 4);
                    return 8;
                }
            }
            NearInt64BE;
            class Float extends Layout {
                constructor(property) {
                    super(4, property);
                }
                decode(b, offset = 0) {
                    return uint8ArrayToBuffer(b).readFloatLE(offset);
                }
                encode(src, b, offset = 0) {
                    uint8ArrayToBuffer(b).writeFloatLE(src, offset);
                    return 4;
                }
            }
            Float;
            class FloatBE extends Layout {
                constructor(property) {
                    super(4, property);
                }
                decode(b, offset = 0) {
                    return uint8ArrayToBuffer(b).readFloatBE(offset);
                }
                encode(src, b, offset = 0) {
                    uint8ArrayToBuffer(b).writeFloatBE(src, offset);
                    return 4;
                }
            }
            FloatBE;
            class Double extends Layout {
                constructor(property) {
                    super(8, property);
                }
                decode(b, offset = 0) {
                    return uint8ArrayToBuffer(b).readDoubleLE(offset);
                }
                encode(src, b, offset = 0) {
                    uint8ArrayToBuffer(b).writeDoubleLE(src, offset);
                    return 8;
                }
            }
            Double;
            class DoubleBE extends Layout {
                constructor(property) {
                    super(8, property);
                }
                decode(b, offset = 0) {
                    return uint8ArrayToBuffer(b).readDoubleBE(offset);
                }
                encode(src, b, offset = 0) {
                    uint8ArrayToBuffer(b).writeDoubleBE(src, offset);
                    return 8;
                }
            }
            DoubleBE;
            class Sequence extends Layout {
                constructor(elementLayout, count, property) {
                    if (!(elementLayout instanceof Layout)) throw new TypeError("elementLayout must be a Layout");
                    if (!(count instanceof ExternalLayout && count.isCount() || Number.isInteger(count) && 0 <= count)) throw new TypeError("count must be non-negative integer " + "or an unsigned integer ExternalLayout");
                    let span = -1;
                    if (!(count instanceof ExternalLayout) && 0 < elementLayout.span) span = count * elementLayout.span;
                    super(span, property);
                    this.elementLayout = elementLayout;
                    this.count = count;
                }
                getSpan(b, offset = 0) {
                    if (0 <= this.span) return this.span;
                    let span = 0;
                    let count = this.count;
                    if (count instanceof ExternalLayout) count = count.decode(b, offset);
                    if (0 < this.elementLayout.span) span = count * this.elementLayout.span; else {
                        let idx = 0;
                        while (idx < count) {
                            span += this.elementLayout.getSpan(b, offset + span);
                            ++idx;
                        }
                    }
                    return span;
                }
                decode(b, offset = 0) {
                    const rv = [];
                    let i = 0;
                    let count = this.count;
                    if (count instanceof ExternalLayout) count = count.decode(b, offset);
                    while (i < count) {
                        rv.push(this.elementLayout.decode(b, offset));
                        offset += this.elementLayout.getSpan(b, offset);
                        i += 1;
                    }
                    return rv;
                }
                encode(src, b, offset = 0) {
                    const elo = this.elementLayout;
                    const span = src.reduce(((span, v) => span + elo.encode(v, b, offset + span)), 0);
                    if (this.count instanceof ExternalLayout) this.count.encode(src.length, b, offset);
                    return span;
                }
            }
            Sequence;
            class Structure extends Layout {
                constructor(fields, property, decodePrefixes) {
                    if (!(Array.isArray(fields) && fields.reduce(((acc, v) => acc && v instanceof Layout), true))) throw new TypeError("fields must be array of Layout instances");
                    if ("boolean" === typeof property && void 0 === decodePrefixes) {
                        decodePrefixes = property;
                        property = void 0;
                    }
                    for (const fd of fields) if (0 > fd.span && void 0 === fd.property) throw new Error("fields cannot contain unnamed variable-length layout");
                    let span = -1;
                    try {
                        span = fields.reduce(((span, fd) => span + fd.getSpan()), 0);
                    } catch (e) {}
                    super(span, property);
                    this.fields = fields;
                    this.decodePrefixes = !!decodePrefixes;
                }
                getSpan(b, offset = 0) {
                    if (0 <= this.span) return this.span;
                    let span = 0;
                    try {
                        span = this.fields.reduce(((span, fd) => {
                            const fsp = fd.getSpan(b, offset);
                            offset += fsp;
                            return span + fsp;
                        }), 0);
                    } catch (e) {
                        throw new RangeError("indeterminate span");
                    }
                    return span;
                }
                decode(b, offset = 0) {
                    checkUint8Array(b);
                    const dest = this.makeDestinationObject();
                    for (const fd of this.fields) {
                        if (void 0 !== fd.property) dest[fd.property] = fd.decode(b, offset);
                        offset += fd.getSpan(b, offset);
                        if (this.decodePrefixes && b.length === offset) break;
                    }
                    return dest;
                }
                encode(src, b, offset = 0) {
                    const firstOffset = offset;
                    let lastOffset = 0;
                    let lastWrote = 0;
                    for (const fd of this.fields) {
                        let span = fd.span;
                        lastWrote = 0 < span ? span : 0;
                        if (void 0 !== fd.property) {
                            const fv = src[fd.property];
                            if (void 0 !== fv) {
                                lastWrote = fd.encode(fv, b, offset);
                                if (0 > span) span = fd.getSpan(b, offset);
                            }
                        }
                        lastOffset = offset;
                        offset += span;
                    }
                    return lastOffset + lastWrote - firstOffset;
                }
                fromArray(values) {
                    const dest = this.makeDestinationObject();
                    for (const fd of this.fields) if (void 0 !== fd.property && 0 < values.length) dest[fd.property] = values.shift();
                    return dest;
                }
                layoutFor(property) {
                    if ("string" !== typeof property) throw new TypeError("property must be string");
                    for (const fd of this.fields) if (fd.property === property) return fd;
                    return;
                }
                offsetOf(property) {
                    if ("string" !== typeof property) throw new TypeError("property must be string");
                    let offset = 0;
                    for (const fd of this.fields) {
                        if (fd.property === property) return offset;
                        if (0 > fd.span) offset = -1; else if (0 <= offset) offset += fd.span;
                    }
                    return;
                }
            }
            Structure;
            class UnionDiscriminator {
                constructor(property) {
                    this.property = property;
                }
                decode(b, offset) {
                    throw new Error("UnionDiscriminator is abstract");
                }
                encode(src, b, offset) {
                    throw new Error("UnionDiscriminator is abstract");
                }
            }
            UnionDiscriminator;
            class UnionLayoutDiscriminator extends UnionDiscriminator {
                constructor(layout, property) {
                    if (!(layout instanceof ExternalLayout && layout.isCount())) throw new TypeError("layout must be an unsigned integer ExternalLayout");
                    super(property || layout.property || "variant");
                    this.layout = layout;
                }
                decode(b, offset) {
                    return this.layout.decode(b, offset);
                }
                encode(src, b, offset) {
                    return this.layout.encode(src, b, offset);
                }
            }
            UnionLayoutDiscriminator;
            class Union extends Layout {
                constructor(discr, defaultLayout, property) {
                    let discriminator;
                    if (discr instanceof UInt || discr instanceof UIntBE) discriminator = new UnionLayoutDiscriminator(new OffsetLayout(discr)); else if (discr instanceof ExternalLayout && discr.isCount()) discriminator = new UnionLayoutDiscriminator(discr); else if (!(discr instanceof UnionDiscriminator)) throw new TypeError("discr must be a UnionDiscriminator " + "or an unsigned integer layout"); else discriminator = discr;
                    if (void 0 === defaultLayout) defaultLayout = null;
                    if (!(null === defaultLayout || defaultLayout instanceof Layout)) throw new TypeError("defaultLayout must be null or a Layout");
                    if (null !== defaultLayout) {
                        if (0 > defaultLayout.span) throw new Error("defaultLayout must have constant span");
                        if (void 0 === defaultLayout.property) defaultLayout = defaultLayout.replicate("content");
                    }
                    let span = -1;
                    if (defaultLayout) {
                        span = defaultLayout.span;
                        if (0 <= span && (discr instanceof UInt || discr instanceof UIntBE)) span += discriminator.layout.span;
                    }
                    super(span, property);
                    this.discriminator = discriminator;
                    this.usesPrefixDiscriminator = discr instanceof UInt || discr instanceof UIntBE;
                    this.defaultLayout = defaultLayout;
                    this.registry = {};
                    let boundGetSourceVariant = this.defaultGetSourceVariant.bind(this);
                    this.getSourceVariant = function(src) {
                        return boundGetSourceVariant(src);
                    };
                    this.configGetSourceVariant = function(gsv) {
                        boundGetSourceVariant = gsv.bind(this);
                    };
                }
                getSpan(b, offset = 0) {
                    if (0 <= this.span) return this.span;
                    const vlo = this.getVariant(b, offset);
                    if (!vlo) throw new Error("unable to determine span for unrecognized variant");
                    return vlo.getSpan(b, offset);
                }
                defaultGetSourceVariant(src) {
                    if (Object.prototype.hasOwnProperty.call(src, this.discriminator.property)) {
                        if (this.defaultLayout && this.defaultLayout.property && Object.prototype.hasOwnProperty.call(src, this.defaultLayout.property)) return;
                        const vlo = this.registry[src[this.discriminator.property]];
                        if (vlo && (!vlo.layout || vlo.property && Object.prototype.hasOwnProperty.call(src, vlo.property))) return vlo;
                    } else for (const tag in this.registry) {
                        const vlo = this.registry[tag];
                        if (vlo.property && Object.prototype.hasOwnProperty.call(src, vlo.property)) return vlo;
                    }
                    throw new Error("unable to infer src variant");
                }
                decode(b, offset = 0) {
                    let dest;
                    const dlo = this.discriminator;
                    const discr = dlo.decode(b, offset);
                    const clo = this.registry[discr];
                    if (void 0 === clo) {
                        const defaultLayout = this.defaultLayout;
                        let contentOffset = 0;
                        if (this.usesPrefixDiscriminator) contentOffset = dlo.layout.span;
                        dest = this.makeDestinationObject();
                        dest[dlo.property] = discr;
                        dest[defaultLayout.property] = defaultLayout.decode(b, offset + contentOffset);
                    } else dest = clo.decode(b, offset);
                    return dest;
                }
                encode(src, b, offset = 0) {
                    const vlo = this.getSourceVariant(src);
                    if (void 0 === vlo) {
                        const dlo = this.discriminator;
                        const clo = this.defaultLayout;
                        let contentOffset = 0;
                        if (this.usesPrefixDiscriminator) contentOffset = dlo.layout.span;
                        dlo.encode(src[dlo.property], b, offset);
                        return contentOffset + clo.encode(src[clo.property], b, offset + contentOffset);
                    }
                    return vlo.encode(src, b, offset);
                }
                addVariant(variant, layout, property) {
                    const rv = new VariantLayout(this, variant, layout, property);
                    this.registry[variant] = rv;
                    return rv;
                }
                getVariant(vb, offset = 0) {
                    let variant;
                    if (vb instanceof Uint8Array) variant = this.discriminator.decode(vb, offset); else variant = vb;
                    return this.registry[variant];
                }
            }
            Union;
            class VariantLayout extends Layout {
                constructor(union, variant, layout, property) {
                    if (!(union instanceof Union)) throw new TypeError("union must be a Union");
                    if (!Number.isInteger(variant) || 0 > variant) throw new TypeError("variant must be a (non-negative) integer");
                    if ("string" === typeof layout && void 0 === property) {
                        property = layout;
                        layout = null;
                    }
                    if (layout) {
                        if (!(layout instanceof Layout)) throw new TypeError("layout must be a Layout");
                        if (null !== union.defaultLayout && 0 <= layout.span && layout.span > union.defaultLayout.span) throw new Error("variant span exceeds span of containing union");
                        if ("string" !== typeof property) throw new TypeError("variant must have a String property");
                    }
                    let span = union.span;
                    if (0 > union.span) {
                        span = layout ? layout.span : 0;
                        if (0 <= span && union.usesPrefixDiscriminator) span += union.discriminator.layout.span;
                    }
                    super(span, property);
                    this.union = union;
                    this.variant = variant;
                    this.layout = layout || null;
                }
                getSpan(b, offset = 0) {
                    if (0 <= this.span) return this.span;
                    let contentOffset = 0;
                    if (this.union.usesPrefixDiscriminator) contentOffset = this.union.discriminator.layout.span;
                    let span = 0;
                    if (this.layout) span = this.layout.getSpan(b, offset + contentOffset);
                    return contentOffset + span;
                }
                decode(b, offset = 0) {
                    const dest = this.makeDestinationObject();
                    if (this !== this.union.getVariant(b, offset)) throw new Error("variant mismatch");
                    let contentOffset = 0;
                    if (this.union.usesPrefixDiscriminator) contentOffset = this.union.discriminator.layout.span;
                    if (this.layout) dest[this.property] = this.layout.decode(b, offset + contentOffset); else if (this.property) dest[this.property] = true; else if (this.union.usesPrefixDiscriminator) dest[this.union.discriminator.property] = this.variant;
                    return dest;
                }
                encode(src, b, offset = 0) {
                    let contentOffset = 0;
                    if (this.union.usesPrefixDiscriminator) contentOffset = this.union.discriminator.layout.span;
                    if (this.layout && !Object.prototype.hasOwnProperty.call(src, this.property)) throw new TypeError("variant lacks property " + this.property);
                    this.union.discriminator.encode(this.variant, b, offset);
                    let span = contentOffset;
                    if (this.layout) {
                        this.layout.encode(src[this.property], b, offset + contentOffset);
                        span += this.layout.getSpan(b, offset + contentOffset);
                        if (0 <= this.union.span && span > this.union.span) throw new Error("encoded variant overruns containing union");
                    }
                    return span;
                }
                fromArray(values) {
                    if (this.layout) return this.layout.fromArray(values);
                    return;
                }
            }
            VariantLayout;
            function fixBitwiseResult(v) {
                if (0 > v) v += 4294967296;
                return v;
            }
            class BitStructure extends Layout {
                constructor(word, msb, property) {
                    if (!(word instanceof UInt || word instanceof UIntBE)) throw new TypeError("word must be a UInt or UIntBE layout");
                    if ("string" === typeof msb && void 0 === property) {
                        property = msb;
                        msb = false;
                    }
                    if (4 < word.span) throw new RangeError("word cannot exceed 32 bits");
                    super(word.span, property);
                    this.word = word;
                    this.msb = !!msb;
                    this.fields = [];
                    let value = 0;
                    this._packedSetValue = function(v) {
                        value = fixBitwiseResult(v);
                        return this;
                    };
                    this._packedGetValue = function() {
                        return value;
                    };
                }
                decode(b, offset = 0) {
                    const dest = this.makeDestinationObject();
                    const value = this.word.decode(b, offset);
                    this._packedSetValue(value);
                    for (const fd of this.fields) if (void 0 !== fd.property) dest[fd.property] = fd.decode(b);
                    return dest;
                }
                encode(src, b, offset = 0) {
                    const value = this.word.decode(b, offset);
                    this._packedSetValue(value);
                    for (const fd of this.fields) if (void 0 !== fd.property) {
                        const fv = src[fd.property];
                        if (void 0 !== fv) fd.encode(fv);
                    }
                    return this.word.encode(this._packedGetValue(), b, offset);
                }
                addField(bits, property) {
                    const bf = new BitField(this, bits, property);
                    this.fields.push(bf);
                    return bf;
                }
                addBoolean(property) {
                    const bf = new Boolean(this, property);
                    this.fields.push(bf);
                    return bf;
                }
                fieldFor(property) {
                    if ("string" !== typeof property) throw new TypeError("property must be string");
                    for (const fd of this.fields) if (fd.property === property) return fd;
                    return;
                }
            }
            BitStructure;
            class BitField {
                constructor(container, bits, property) {
                    if (!(container instanceof BitStructure)) throw new TypeError("container must be a BitStructure");
                    if (!Number.isInteger(bits) || 0 >= bits) throw new TypeError("bits must be positive integer");
                    const totalBits = 8 * container.span;
                    const usedBits = container.fields.reduce(((sum, fd) => sum + fd.bits), 0);
                    if (bits + usedBits > totalBits) throw new Error("bits too long for span remainder (" + (totalBits - usedBits) + " of " + totalBits + " remain)");
                    this.container = container;
                    this.bits = bits;
                    this.valueMask = (1 << bits) - 1;
                    if (32 === bits) this.valueMask = 4294967295;
                    this.start = usedBits;
                    if (this.container.msb) this.start = totalBits - usedBits - bits;
                    this.wordMask = fixBitwiseResult(this.valueMask << this.start);
                    this.property = property;
                }
                decode(b, offset) {
                    const word = this.container._packedGetValue();
                    const wordValue = fixBitwiseResult(word & this.wordMask);
                    const value = wordValue >>> this.start;
                    return value;
                }
                encode(value) {
                    if ("number" !== typeof value || !Number.isInteger(value) || value !== fixBitwiseResult(value & this.valueMask)) throw new TypeError(nameWithProperty("BitField.encode", this) + " value must be integer not exceeding " + this.valueMask);
                    const word = this.container._packedGetValue();
                    const wordValue = fixBitwiseResult(value << this.start);
                    this.container._packedSetValue(fixBitwiseResult(word & ~this.wordMask) | wordValue);
                }
            }
            BitField;
            class Boolean extends BitField {
                constructor(container, property) {
                    super(container, 1, property);
                }
                decode(b, offset) {
                    return !!super.decode(b, offset);
                }
                encode(value) {
                    if ("boolean" === typeof value) value = +value;
                    super.encode(value);
                }
            }
            Boolean;
            class Blob extends Layout {
                constructor(length, property) {
                    if (!(length instanceof ExternalLayout && length.isCount() || Number.isInteger(length) && 0 <= length)) throw new TypeError("length must be positive integer " + "or an unsigned integer ExternalLayout");
                    let span = -1;
                    if (!(length instanceof ExternalLayout)) span = length;
                    super(span, property);
                    this.length = length;
                }
                getSpan(b, offset) {
                    let span = this.span;
                    if (0 > span) span = this.length.decode(b, offset);
                    return span;
                }
                decode(b, offset = 0) {
                    let span = this.span;
                    if (0 > span) span = this.length.decode(b, offset);
                    return uint8ArrayToBuffer(b).slice(offset, offset + span);
                }
                encode(src, b, offset) {
                    let span = this.length;
                    if (this.length instanceof ExternalLayout) span = src.length;
                    if (!(src instanceof Uint8Array && span === src.length)) throw new TypeError(nameWithProperty("Blob.encode", this) + " requires (length " + span + ") Uint8Array as src");
                    if (offset + span > b.length) throw new RangeError("encoding overruns Uint8Array");
                    const srcBuffer = uint8ArrayToBuffer(src);
                    uint8ArrayToBuffer(b).write(srcBuffer.toString("hex"), offset, span, "hex");
                    if (this.length instanceof ExternalLayout) this.length.encode(span, b, offset);
                    return span;
                }
            }
            Blob;
            class CString extends Layout {
                constructor(property) {
                    super(-1, property);
                }
                getSpan(b, offset = 0) {
                    checkUint8Array(b);
                    let idx = offset;
                    while (idx < b.length && 0 !== b[idx]) idx += 1;
                    return 1 + idx - offset;
                }
                decode(b, offset = 0) {
                    const span = this.getSpan(b, offset);
                    return uint8ArrayToBuffer(b).slice(offset, offset + span - 1).toString("utf-8");
                }
                encode(src, b, offset = 0) {
                    if ("string" !== typeof src) src = String(src);
                    const srcb = buffer_1.Buffer.from(src, "utf8");
                    const span = srcb.length;
                    if (offset + span > b.length) throw new RangeError("encoding overruns Buffer");
                    const buffer = uint8ArrayToBuffer(b);
                    srcb.copy(buffer, offset);
                    buffer[offset + span] = 0;
                    return span + 1;
                }
            }
            CString;
            class UTF8 extends Layout {
                constructor(maxSpan, property) {
                    if ("string" === typeof maxSpan && void 0 === property) {
                        property = maxSpan;
                        maxSpan = void 0;
                    }
                    if (void 0 === maxSpan) maxSpan = -1; else if (!Number.isInteger(maxSpan)) throw new TypeError("maxSpan must be an integer");
                    super(-1, property);
                    this.maxSpan = maxSpan;
                }
                getSpan(b, offset = 0) {
                    checkUint8Array(b);
                    return b.length - offset;
                }
                decode(b, offset = 0) {
                    const span = this.getSpan(b, offset);
                    if (0 <= this.maxSpan && this.maxSpan < span) throw new RangeError("text length exceeds maxSpan");
                    return uint8ArrayToBuffer(b).slice(offset, offset + span).toString("utf-8");
                }
                encode(src, b, offset = 0) {
                    if ("string" !== typeof src) src = String(src);
                    const srcb = buffer_1.Buffer.from(src, "utf8");
                    const span = srcb.length;
                    if (0 <= this.maxSpan && this.maxSpan < span) throw new RangeError("text length exceeds maxSpan");
                    if (offset + span > b.length) throw new RangeError("encoding overruns Buffer");
                    srcb.copy(uint8ArrayToBuffer(b), offset);
                    return span;
                }
            }
            UTF8;
            class Constant extends Layout {
                constructor(value, property) {
                    super(0, property);
                    this.value = value;
                }
                decode(b, offset) {
                    return this.value;
                }
                encode(src, b, offset) {
                    return 0;
                }
            }
            Constant;
            (elementSpan, property) => new GreedyCount(elementSpan, property);
            exports.cY = (layout, offset, property) => new OffsetLayout(layout, offset, property);
            exports.u8 = property => new UInt(1, property);
            exports.NX = property => new UInt(2, property);
            property => new UInt(3, property);
            exports.DH = property => new UInt(4, property);
            property => new UInt(5, property);
            property => new UInt(6, property);
            exports.I0 = property => new NearUInt64(property);
            property => new UIntBE(2, property);
            property => new UIntBE(3, property);
            property => new UIntBE(4, property);
            property => new UIntBE(5, property);
            property => new UIntBE(6, property);
            property => new NearUInt64BE(property);
            property => new Int(1, property);
            property => new Int(2, property);
            property => new Int(3, property);
            property => new Int(4, property);
            property => new Int(5, property);
            property => new Int(6, property);
            exports.Wg = property => new NearInt64(property);
            property => new IntBE(2, property);
            property => new IntBE(3, property);
            property => new IntBE(4, property);
            property => new IntBE(5, property);
            property => new IntBE(6, property);
            property => new NearInt64BE(property);
            property => new Float(property);
            property => new FloatBE(property);
            property => new Double(property);
            property => new DoubleBE(property);
            exports.w3 = (fields, property, decodePrefixes) => new Structure(fields, property, decodePrefixes);
            (word, msb, property) => new BitStructure(word, msb, property);
            exports.O6 = (elementLayout, count, property) => new Sequence(elementLayout, count, property);
            (discr, defaultLayout, property) => new Union(discr, defaultLayout, property);
            (layout, property) => new UnionLayoutDiscriminator(layout, property);
            exports.av = (length, property) => new Blob(length, property);
            property => new CString(property);
            (maxSpan, property) => new UTF8(maxSpan, property);
            (value, property) => new Constant(value, property);
        },
        153: (__unused_webpack_module, exports, __webpack_require__) => {
            "use strict";
            /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */            const base64 = __webpack_require__(526);
            const ieee754 = __webpack_require__(251);
            const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
            exports.Buffer = Buffer;
            exports.SlowBuffer = SlowBuffer;
            exports.INSPECT_MAX_BYTES = 50;
            const K_MAX_LENGTH = 2147483647;
            exports.kMaxLength = K_MAX_LENGTH;
            Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
            if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") console.error("This browser lacks typed array (Uint8Array) support which is required by " + "`buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
            function typedArraySupport() {
                try {
                    const arr = new Uint8Array(1);
                    const proto = {
                        foo: function() {
                            return 42;
                        }
                    };
                    Object.setPrototypeOf(proto, Uint8Array.prototype);
                    Object.setPrototypeOf(arr, proto);
                    return arr.foo() === 42;
                } catch (e) {
                    return false;
                }
            }
            Object.defineProperty(Buffer.prototype, "parent", {
                enumerable: true,
                get: function() {
                    if (!Buffer.isBuffer(this)) return;
                    return this.buffer;
                }
            });
            Object.defineProperty(Buffer.prototype, "offset", {
                enumerable: true,
                get: function() {
                    if (!Buffer.isBuffer(this)) return;
                    return this.byteOffset;
                }
            });
            function createBuffer(length) {
                if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
                const buf = new Uint8Array(length);
                Object.setPrototypeOf(buf, Buffer.prototype);
                return buf;
            }
            function Buffer(arg, encodingOrOffset, length) {
                if (typeof arg === "number") {
                    if (typeof encodingOrOffset === "string") throw new TypeError('The "string" argument must be of type string. Received type number');
                    return allocUnsafe(arg);
                }
                return from(arg, encodingOrOffset, length);
            }
            Buffer.poolSize = 8192;
            function from(value, encodingOrOffset, length) {
                if (typeof value === "string") return fromString(value, encodingOrOffset);
                if (ArrayBuffer.isView(value)) return fromArrayView(value);
                if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof value);
                if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
                if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
                if (typeof value === "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
                const valueOf = value.valueOf && value.valueOf();
                if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
                const b = fromObject(value);
                if (b) return b;
                if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") return Buffer.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof value);
            }
            Buffer.from = function(value, encodingOrOffset, length) {
                return from(value, encodingOrOffset, length);
            };
            Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
            Object.setPrototypeOf(Buffer, Uint8Array);
            function assertSize(size) {
                if (typeof size !== "number") throw new TypeError('"size" argument must be of type number'); else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
            }
            function alloc(size, fill, encoding) {
                assertSize(size);
                if (size <= 0) return createBuffer(size);
                if (fill !== void 0) return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
                return createBuffer(size);
            }
            Buffer.alloc = function(size, fill, encoding) {
                return alloc(size, fill, encoding);
            };
            function allocUnsafe(size) {
                assertSize(size);
                return createBuffer(size < 0 ? 0 : checked(size) | 0);
            }
            Buffer.allocUnsafe = function(size) {
                return allocUnsafe(size);
            };
            Buffer.allocUnsafeSlow = function(size) {
                return allocUnsafe(size);
            };
            function fromString(string, encoding) {
                if (typeof encoding !== "string" || encoding === "") encoding = "utf8";
                if (!Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
                const length = byteLength(string, encoding) | 0;
                let buf = createBuffer(length);
                const actual = buf.write(string, encoding);
                if (actual !== length) buf = buf.slice(0, actual);
                return buf;
            }
            function fromArrayLike(array) {
                const length = array.length < 0 ? 0 : checked(array.length) | 0;
                const buf = createBuffer(length);
                for (let i = 0; i < length; i += 1) buf[i] = array[i] & 255;
                return buf;
            }
            function fromArrayView(arrayView) {
                if (isInstance(arrayView, Uint8Array)) {
                    const copy = new Uint8Array(arrayView);
                    return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
                }
                return fromArrayLike(arrayView);
            }
            function fromArrayBuffer(array, byteOffset, length) {
                if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
                if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
                let buf;
                if (byteOffset === void 0 && length === void 0) buf = new Uint8Array(array); else if (length === void 0) buf = new Uint8Array(array, byteOffset); else buf = new Uint8Array(array, byteOffset, length);
                Object.setPrototypeOf(buf, Buffer.prototype);
                return buf;
            }
            function fromObject(obj) {
                if (Buffer.isBuffer(obj)) {
                    const len = checked(obj.length) | 0;
                    const buf = createBuffer(len);
                    if (buf.length === 0) return buf;
                    obj.copy(buf, 0, 0, len);
                    return buf;
                }
                if (obj.length !== void 0) {
                    if (typeof obj.length !== "number" || numberIsNaN(obj.length)) return createBuffer(0);
                    return fromArrayLike(obj);
                }
                if (obj.type === "Buffer" && Array.isArray(obj.data)) return fromArrayLike(obj.data);
            }
            function checked(length) {
                if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum " + "size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
                return length | 0;
            }
            function SlowBuffer(length) {
                if (+length != length) length = 0;
                return Buffer.alloc(+length);
            }
            Buffer.isBuffer = function isBuffer(b) {
                return b != null && b._isBuffer === true && b !== Buffer.prototype;
            };
            Buffer.compare = function compare(a, b) {
                if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
                if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
                if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (a === b) return 0;
                let x = a.length;
                let y = b.length;
                for (let i = 0, len = Math.min(x, y); i < len; ++i) if (a[i] !== b[i]) {
                    x = a[i];
                    y = b[i];
                    break;
                }
                if (x < y) return -1;
                if (y < x) return 1;
                return 0;
            };
            Buffer.isEncoding = function isEncoding(encoding) {
                switch (String(encoding).toLowerCase()) {
                  case "hex":
                  case "utf8":
                  case "utf-8":
                  case "ascii":
                  case "latin1":
                  case "binary":
                  case "base64":
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return true;

                  default:
                    return false;
                }
            };
            Buffer.concat = function concat(list, length) {
                if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (list.length === 0) return Buffer.alloc(0);
                let i;
                if (length === void 0) {
                    length = 0;
                    for (i = 0; i < list.length; ++i) length += list[i].length;
                }
                const buffer = Buffer.allocUnsafe(length);
                let pos = 0;
                for (i = 0; i < list.length; ++i) {
                    let buf = list[i];
                    if (isInstance(buf, Uint8Array)) if (pos + buf.length > buffer.length) {
                        if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
                        buf.copy(buffer, pos);
                    } else Uint8Array.prototype.set.call(buffer, buf, pos); else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers'); else buf.copy(buffer, pos);
                    pos += buf.length;
                }
                return buffer;
            };
            function byteLength(string, encoding) {
                if (Buffer.isBuffer(string)) return string.length;
                if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
                if (typeof string !== "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' + "Received type " + typeof string);
                const len = string.length;
                const mustMatch = arguments.length > 2 && arguments[2] === true;
                if (!mustMatch && len === 0) return 0;
                let loweredCase = false;
                for (;;) switch (encoding) {
                  case "ascii":
                  case "latin1":
                  case "binary":
                    return len;

                  case "utf8":
                  case "utf-8":
                    return utf8ToBytes(string).length;

                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return len * 2;

                  case "hex":
                    return len >>> 1;

                  case "base64":
                    return base64ToBytes(string).length;

                  default:
                    if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length;
                    encoding = ("" + encoding).toLowerCase();
                    loweredCase = true;
                }
            }
            Buffer.byteLength = byteLength;
            function slowToString(encoding, start, end) {
                let loweredCase = false;
                if (start === void 0 || start < 0) start = 0;
                if (start > this.length) return "";
                if (end === void 0 || end > this.length) end = this.length;
                if (end <= 0) return "";
                end >>>= 0;
                start >>>= 0;
                if (end <= start) return "";
                if (!encoding) encoding = "utf8";
                while (true) switch (encoding) {
                  case "hex":
                    return hexSlice(this, start, end);

                  case "utf8":
                  case "utf-8":
                    return utf8Slice(this, start, end);

                  case "ascii":
                    return asciiSlice(this, start, end);

                  case "latin1":
                  case "binary":
                    return latin1Slice(this, start, end);

                  case "base64":
                    return base64Slice(this, start, end);

                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return utf16leSlice(this, start, end);

                  default:
                    if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
                    encoding = (encoding + "").toLowerCase();
                    loweredCase = true;
                }
            }
            Buffer.prototype._isBuffer = true;
            function swap(b, n, m) {
                const i = b[n];
                b[n] = b[m];
                b[m] = i;
            }
            Buffer.prototype.swap16 = function swap16() {
                const len = this.length;
                if (len % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (let i = 0; i < len; i += 2) swap(this, i, i + 1);
                return this;
            };
            Buffer.prototype.swap32 = function swap32() {
                const len = this.length;
                if (len % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (let i = 0; i < len; i += 4) {
                    swap(this, i, i + 3);
                    swap(this, i + 1, i + 2);
                }
                return this;
            };
            Buffer.prototype.swap64 = function swap64() {
                const len = this.length;
                if (len % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (let i = 0; i < len; i += 8) {
                    swap(this, i, i + 7);
                    swap(this, i + 1, i + 6);
                    swap(this, i + 2, i + 5);
                    swap(this, i + 3, i + 4);
                }
                return this;
            };
            Buffer.prototype.toString = function toString() {
                const length = this.length;
                if (length === 0) return "";
                if (arguments.length === 0) return utf8Slice(this, 0, length);
                return slowToString.apply(this, arguments);
            };
            Buffer.prototype.toLocaleString = Buffer.prototype.toString;
            Buffer.prototype.equals = function equals(b) {
                if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
                if (this === b) return true;
                return Buffer.compare(this, b) === 0;
            };
            Buffer.prototype.inspect = function inspect() {
                let str = "";
                const max = exports.INSPECT_MAX_BYTES;
                str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
                if (this.length > max) str += " ... ";
                return "<Buffer " + str + ">";
            };
            if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
            Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
                if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
                if (!Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. ' + "Received type " + typeof target);
                if (start === void 0) start = 0;
                if (end === void 0) end = target ? target.length : 0;
                if (thisStart === void 0) thisStart = 0;
                if (thisEnd === void 0) thisEnd = this.length;
                if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
                if (thisStart >= thisEnd && start >= end) return 0;
                if (thisStart >= thisEnd) return -1;
                if (start >= end) return 1;
                start >>>= 0;
                end >>>= 0;
                thisStart >>>= 0;
                thisEnd >>>= 0;
                if (this === target) return 0;
                let x = thisEnd - thisStart;
                let y = end - start;
                const len = Math.min(x, y);
                const thisCopy = this.slice(thisStart, thisEnd);
                const targetCopy = target.slice(start, end);
                for (let i = 0; i < len; ++i) if (thisCopy[i] !== targetCopy[i]) {
                    x = thisCopy[i];
                    y = targetCopy[i];
                    break;
                }
                if (x < y) return -1;
                if (y < x) return 1;
                return 0;
            };
            function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
                if (buffer.length === 0) return -1;
                if (typeof byteOffset === "string") {
                    encoding = byteOffset;
                    byteOffset = 0;
                } else if (byteOffset > 2147483647) byteOffset = 2147483647; else if (byteOffset < -2147483648) byteOffset = -2147483648;
                byteOffset = +byteOffset;
                if (numberIsNaN(byteOffset)) byteOffset = dir ? 0 : buffer.length - 1;
                if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
                if (byteOffset >= buffer.length) if (dir) return -1; else byteOffset = buffer.length - 1; else if (byteOffset < 0) if (dir) byteOffset = 0; else return -1;
                if (typeof val === "string") val = Buffer.from(val, encoding);
                if (Buffer.isBuffer(val)) {
                    if (val.length === 0) return -1;
                    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
                } else if (typeof val === "number") {
                    val &= 255;
                    if (typeof Uint8Array.prototype.indexOf === "function") if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset); else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
                    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir);
                }
                throw new TypeError("val must be string, number or Buffer");
            }
            function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
                let indexSize = 1;
                let arrLength = arr.length;
                let valLength = val.length;
                if (encoding !== void 0) {
                    encoding = String(encoding).toLowerCase();
                    if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
                        if (arr.length < 2 || val.length < 2) return -1;
                        indexSize = 2;
                        arrLength /= 2;
                        valLength /= 2;
                        byteOffset /= 2;
                    }
                }
                function read(buf, i) {
                    if (indexSize === 1) return buf[i]; else return buf.readUInt16BE(i * indexSize);
                }
                let i;
                if (dir) {
                    let foundIndex = -1;
                    for (i = byteOffset; i < arrLength; i++) if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
                        if (foundIndex === -1) foundIndex = i;
                        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
                    } else {
                        if (foundIndex !== -1) i -= i - foundIndex;
                        foundIndex = -1;
                    }
                } else {
                    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
                    for (i = byteOffset; i >= 0; i--) {
                        let found = true;
                        for (let j = 0; j < valLength; j++) if (read(arr, i + j) !== read(val, j)) {
                            found = false;
                            break;
                        }
                        if (found) return i;
                    }
                }
                return -1;
            }
            Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
                return this.indexOf(val, byteOffset, encoding) !== -1;
            };
            Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
                return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
            };
            Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
                return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
            };
            function hexWrite(buf, string, offset, length) {
                offset = Number(offset) || 0;
                const remaining = buf.length - offset;
                if (!length) length = remaining; else {
                    length = Number(length);
                    if (length > remaining) length = remaining;
                }
                const strLen = string.length;
                if (length > strLen / 2) length = strLen / 2;
                let i;
                for (i = 0; i < length; ++i) {
                    const parsed = parseInt(string.substr(i * 2, 2), 16);
                    if (numberIsNaN(parsed)) return i;
                    buf[offset + i] = parsed;
                }
                return i;
            }
            function utf8Write(buf, string, offset, length) {
                return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
            }
            function asciiWrite(buf, string, offset, length) {
                return blitBuffer(asciiToBytes(string), buf, offset, length);
            }
            function base64Write(buf, string, offset, length) {
                return blitBuffer(base64ToBytes(string), buf, offset, length);
            }
            function ucs2Write(buf, string, offset, length) {
                return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
            }
            Buffer.prototype.write = function write(string, offset, length, encoding) {
                if (offset === void 0) {
                    encoding = "utf8";
                    length = this.length;
                    offset = 0;
                } else if (length === void 0 && typeof offset === "string") {
                    encoding = offset;
                    length = this.length;
                    offset = 0;
                } else if (isFinite(offset)) {
                    offset >>>= 0;
                    if (isFinite(length)) {
                        length >>>= 0;
                        if (encoding === void 0) encoding = "utf8";
                    } else {
                        encoding = length;
                        length = void 0;
                    }
                } else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                const remaining = this.length - offset;
                if (length === void 0 || length > remaining) length = remaining;
                if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                if (!encoding) encoding = "utf8";
                let loweredCase = false;
                for (;;) switch (encoding) {
                  case "hex":
                    return hexWrite(this, string, offset, length);

                  case "utf8":
                  case "utf-8":
                    return utf8Write(this, string, offset, length);

                  case "ascii":
                  case "latin1":
                  case "binary":
                    return asciiWrite(this, string, offset, length);

                  case "base64":
                    return base64Write(this, string, offset, length);

                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return ucs2Write(this, string, offset, length);

                  default:
                    if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
                    encoding = ("" + encoding).toLowerCase();
                    loweredCase = true;
                }
            };
            Buffer.prototype.toJSON = function toJSON() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                };
            };
            function base64Slice(buf, start, end) {
                if (start === 0 && end === buf.length) return base64.fromByteArray(buf); else return base64.fromByteArray(buf.slice(start, end));
            }
            function utf8Slice(buf, start, end) {
                end = Math.min(buf.length, end);
                const res = [];
                let i = start;
                while (i < end) {
                    const firstByte = buf[i];
                    let codePoint = null;
                    let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
                    if (i + bytesPerSequence <= end) {
                        let secondByte, thirdByte, fourthByte, tempCodePoint;
                        switch (bytesPerSequence) {
                          case 1:
                            if (firstByte < 128) codePoint = firstByte;
                            break;

                          case 2:
                            secondByte = buf[i + 1];
                            if ((secondByte & 192) === 128) {
                                tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                                if (tempCodePoint > 127) codePoint = tempCodePoint;
                            }
                            break;

                          case 3:
                            secondByte = buf[i + 1];
                            thirdByte = buf[i + 2];
                            if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                                tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                                if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) codePoint = tempCodePoint;
                            }
                            break;

                          case 4:
                            secondByte = buf[i + 1];
                            thirdByte = buf[i + 2];
                            fourthByte = buf[i + 3];
                            if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                                tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                                if (tempCodePoint > 65535 && tempCodePoint < 1114112) codePoint = tempCodePoint;
                            }
                        }
                    }
                    if (codePoint === null) {
                        codePoint = 65533;
                        bytesPerSequence = 1;
                    } else if (codePoint > 65535) {
                        codePoint -= 65536;
                        res.push(codePoint >>> 10 & 1023 | 55296);
                        codePoint = 56320 | codePoint & 1023;
                    }
                    res.push(codePoint);
                    i += bytesPerSequence;
                }
                return decodeCodePointsArray(res);
            }
            const MAX_ARGUMENTS_LENGTH = 4096;
            function decodeCodePointsArray(codePoints) {
                const len = codePoints.length;
                if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints);
                let res = "";
                let i = 0;
                while (i < len) res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
                return res;
            }
            function asciiSlice(buf, start, end) {
                let ret = "";
                end = Math.min(buf.length, end);
                for (let i = start; i < end; ++i) ret += String.fromCharCode(buf[i] & 127);
                return ret;
            }
            function latin1Slice(buf, start, end) {
                let ret = "";
                end = Math.min(buf.length, end);
                for (let i = start; i < end; ++i) ret += String.fromCharCode(buf[i]);
                return ret;
            }
            function hexSlice(buf, start, end) {
                const len = buf.length;
                if (!start || start < 0) start = 0;
                if (!end || end < 0 || end > len) end = len;
                let out = "";
                for (let i = start; i < end; ++i) out += hexSliceLookupTable[buf[i]];
                return out;
            }
            function utf16leSlice(buf, start, end) {
                const bytes = buf.slice(start, end);
                let res = "";
                for (let i = 0; i < bytes.length - 1; i += 2) res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
                return res;
            }
            Buffer.prototype.slice = function slice(start, end) {
                const len = this.length;
                start = ~~start;
                end = end === void 0 ? len : ~~end;
                if (start < 0) {
                    start += len;
                    if (start < 0) start = 0;
                } else if (start > len) start = len;
                if (end < 0) {
                    end += len;
                    if (end < 0) end = 0;
                } else if (end > len) end = len;
                if (end < start) end = start;
                const newBuf = this.subarray(start, end);
                Object.setPrototypeOf(newBuf, Buffer.prototype);
                return newBuf;
            };
            function checkOffset(offset, ext, length) {
                if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
                if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
            }
            Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
                offset >>>= 0;
                byteLength >>>= 0;
                if (!noAssert) checkOffset(offset, byteLength, this.length);
                let val = this[offset];
                let mul = 1;
                let i = 0;
                while (++i < byteLength && (mul *= 256)) val += this[offset + i] * mul;
                return val;
            };
            Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
                offset >>>= 0;
                byteLength >>>= 0;
                if (!noAssert) checkOffset(offset, byteLength, this.length);
                let val = this[offset + --byteLength];
                let mul = 1;
                while (byteLength > 0 && (mul *= 256)) val += this[offset + --byteLength] * mul;
                return val;
            };
            Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
                offset >>>= 0;
                if (!noAssert) checkOffset(offset, 1, this.length);
                return this[offset];
            };
            Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
                offset >>>= 0;
                if (!noAssert) checkOffset(offset, 2, this.length);
                return this[offset] | this[offset + 1] << 8;
            };
            Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
                offset >>>= 0;
                if (!noAssert) checkOffset(offset, 2, this.length);
                return this[offset] << 8 | this[offset + 1];
            };
            Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
                offset >>>= 0;
                if (!noAssert) checkOffset(offset, 4, this.length);
                return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
            };
            Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
                offset >>>= 0;
                if (!noAssert) checkOffset(offset, 4, this.length);
                return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
            };
            Buffer.prototype.readBigUInt64LE = defineBigIntMethod((function readBigUInt64LE(offset) {
                offset >>>= 0;
                validateNumber(offset, "offset");
                const first = this[offset];
                const last = this[offset + 7];
                if (first === void 0 || last === void 0) boundsError(offset, this.length - 8);
                const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
                const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
                return BigInt(lo) + (BigInt(hi) << BigInt(32));
            }));
            Buffer.prototype.readBigUInt64BE = defineBigIntMethod((function readBigUInt64BE(offset) {
                offset >>>= 0;
                validateNumber(offset, "offset");
                const first = this[offset];
                const last = this[offset + 7];
                if (first === void 0 || last === void 0) boundsError(offset, this.length - 8);
                const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
                const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
                return (BigInt(hi) << BigInt(32)) + BigInt(lo);
            }));
            Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
                offset >>>= 0;
                byteLength >>>= 0;
                if (!noAssert) checkOffset(offset, byteLength, this.length);
                let val = this[offset];
                let mul = 1;
                let i = 0;
                while (++i < byteLength && (mul *= 256)) val += this[offset + i] * mul;
                mul *= 128;
                if (val >= mul) val -= Math.pow(2, 8 * byteLength);
                return val;
            };
            Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
                offset >>>= 0;
                byteLength >>>= 0;
                if (!noAssert) checkOffset(offset, byteLength, this.length);
                let i = byteLength;
                let mul = 1;
                let val = this[offset + --i];
                while (i > 0 && (mul *= 256)) val += this[offset + --i] * mul;
                mul *= 128;
                if (val >= mul) val -= Math.pow(2, 8 * byteLength);
                return val;
            };
            Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
                offset >>>= 0;
                if (!noAssert) checkOffset(offset, 1, this.length);
                if (!(this[offset] & 128)) return this[offset];
                return (255 - this[offset] + 1) * -1;
            };
            Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
                offset >>>= 0;
                if (!noAssert) checkOffset(offset, 2, this.length);
                const val = this[offset] | this[offset + 1] << 8;
                return val & 32768 ? val | 4294901760 : val;
            };
            Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
                offset >>>= 0;
                if (!noAssert) checkOffset(offset, 2, this.length);
                const val = this[offset + 1] | this[offset] << 8;
                return val & 32768 ? val | 4294901760 : val;
            };
            Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
                offset >>>= 0;
                if (!noAssert) checkOffset(offset, 4, this.length);
                return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
            };
            Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
                offset >>>= 0;
                if (!noAssert) checkOffset(offset, 4, this.length);
                return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
            };
            Buffer.prototype.readBigInt64LE = defineBigIntMethod((function readBigInt64LE(offset) {
                offset >>>= 0;
                validateNumber(offset, "offset");
                const first = this[offset];
                const last = this[offset + 7];
                if (first === void 0 || last === void 0) boundsError(offset, this.length - 8);
                const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
                return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
            }));
            Buffer.prototype.readBigInt64BE = defineBigIntMethod((function readBigInt64BE(offset) {
                offset >>>= 0;
                validateNumber(offset, "offset");
                const first = this[offset];
                const last = this[offset + 7];
                if (first === void 0 || last === void 0) boundsError(offset, this.length - 8);
                const val = (first << 24) + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
                return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
            }));
            Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
                offset >>>= 0;
                if (!noAssert) checkOffset(offset, 4, this.length);
                return ieee754.read(this, offset, true, 23, 4);
            };
            Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
                offset >>>= 0;
                if (!noAssert) checkOffset(offset, 4, this.length);
                return ieee754.read(this, offset, false, 23, 4);
            };
            Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
                offset >>>= 0;
                if (!noAssert) checkOffset(offset, 8, this.length);
                return ieee754.read(this, offset, true, 52, 8);
            };
            Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
                offset >>>= 0;
                if (!noAssert) checkOffset(offset, 8, this.length);
                return ieee754.read(this, offset, false, 52, 8);
            };
            function checkInt(buf, value, offset, ext, max, min) {
                if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
                if (offset + ext > buf.length) throw new RangeError("Index out of range");
            }
            Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
                value = +value;
                offset >>>= 0;
                byteLength >>>= 0;
                if (!noAssert) {
                    const maxBytes = Math.pow(2, 8 * byteLength) - 1;
                    checkInt(this, value, offset, byteLength, maxBytes, 0);
                }
                let mul = 1;
                let i = 0;
                this[offset] = value & 255;
                while (++i < byteLength && (mul *= 256)) this[offset + i] = value / mul & 255;
                return offset + byteLength;
            };
            Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
                value = +value;
                offset >>>= 0;
                byteLength >>>= 0;
                if (!noAssert) {
                    const maxBytes = Math.pow(2, 8 * byteLength) - 1;
                    checkInt(this, value, offset, byteLength, maxBytes, 0);
                }
                let i = byteLength - 1;
                let mul = 1;
                this[offset + i] = value & 255;
                while (--i >= 0 && (mul *= 256)) this[offset + i] = value / mul & 255;
                return offset + byteLength;
            };
            Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
                value = +value;
                offset >>>= 0;
                if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
                this[offset] = value & 255;
                return offset + 1;
            };
            Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
                value = +value;
                offset >>>= 0;
                if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
                this[offset] = value & 255;
                this[offset + 1] = value >>> 8;
                return offset + 2;
            };
            Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
                value = +value;
                offset >>>= 0;
                if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
                this[offset] = value >>> 8;
                this[offset + 1] = value & 255;
                return offset + 2;
            };
            Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
                value = +value;
                offset >>>= 0;
                if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
                this[offset + 3] = value >>> 24;
                this[offset + 2] = value >>> 16;
                this[offset + 1] = value >>> 8;
                this[offset] = value & 255;
                return offset + 4;
            };
            Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
                value = +value;
                offset >>>= 0;
                if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
                this[offset] = value >>> 24;
                this[offset + 1] = value >>> 16;
                this[offset + 2] = value >>> 8;
                this[offset + 3] = value & 255;
                return offset + 4;
            };
            function wrtBigUInt64LE(buf, value, offset, min, max) {
                checkIntBI(value, min, max, buf, offset, 7);
                let lo = Number(value & BigInt(4294967295));
                buf[offset++] = lo;
                lo >>= 8;
                buf[offset++] = lo;
                lo >>= 8;
                buf[offset++] = lo;
                lo >>= 8;
                buf[offset++] = lo;
                let hi = Number(value >> BigInt(32) & BigInt(4294967295));
                buf[offset++] = hi;
                hi >>= 8;
                buf[offset++] = hi;
                hi >>= 8;
                buf[offset++] = hi;
                hi >>= 8;
                buf[offset++] = hi;
                return offset;
            }
            function wrtBigUInt64BE(buf, value, offset, min, max) {
                checkIntBI(value, min, max, buf, offset, 7);
                let lo = Number(value & BigInt(4294967295));
                buf[offset + 7] = lo;
                lo >>= 8;
                buf[offset + 6] = lo;
                lo >>= 8;
                buf[offset + 5] = lo;
                lo >>= 8;
                buf[offset + 4] = lo;
                let hi = Number(value >> BigInt(32) & BigInt(4294967295));
                buf[offset + 3] = hi;
                hi >>= 8;
                buf[offset + 2] = hi;
                hi >>= 8;
                buf[offset + 1] = hi;
                hi >>= 8;
                buf[offset] = hi;
                return offset + 8;
            }
            Buffer.prototype.writeBigUInt64LE = defineBigIntMethod((function writeBigUInt64LE(value, offset = 0) {
                return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
            }));
            Buffer.prototype.writeBigUInt64BE = defineBigIntMethod((function writeBigUInt64BE(value, offset = 0) {
                return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
            }));
            Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
                value = +value;
                offset >>>= 0;
                if (!noAssert) {
                    const limit = Math.pow(2, 8 * byteLength - 1);
                    checkInt(this, value, offset, byteLength, limit - 1, -limit);
                }
                let i = 0;
                let mul = 1;
                let sub = 0;
                this[offset] = value & 255;
                while (++i < byteLength && (mul *= 256)) {
                    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
                    this[offset + i] = (value / mul >> 0) - sub & 255;
                }
                return offset + byteLength;
            };
            Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
                value = +value;
                offset >>>= 0;
                if (!noAssert) {
                    const limit = Math.pow(2, 8 * byteLength - 1);
                    checkInt(this, value, offset, byteLength, limit - 1, -limit);
                }
                let i = byteLength - 1;
                let mul = 1;
                let sub = 0;
                this[offset + i] = value & 255;
                while (--i >= 0 && (mul *= 256)) {
                    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
                    this[offset + i] = (value / mul >> 0) - sub & 255;
                }
                return offset + byteLength;
            };
            Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
                value = +value;
                offset >>>= 0;
                if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
                if (value < 0) value = 255 + value + 1;
                this[offset] = value & 255;
                return offset + 1;
            };
            Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
                value = +value;
                offset >>>= 0;
                if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
                this[offset] = value & 255;
                this[offset + 1] = value >>> 8;
                return offset + 2;
            };
            Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
                value = +value;
                offset >>>= 0;
                if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
                this[offset] = value >>> 8;
                this[offset + 1] = value & 255;
                return offset + 2;
            };
            Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
                value = +value;
                offset >>>= 0;
                if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
                this[offset] = value & 255;
                this[offset + 1] = value >>> 8;
                this[offset + 2] = value >>> 16;
                this[offset + 3] = value >>> 24;
                return offset + 4;
            };
            Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
                value = +value;
                offset >>>= 0;
                if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
                if (value < 0) value = 4294967295 + value + 1;
                this[offset] = value >>> 24;
                this[offset + 1] = value >>> 16;
                this[offset + 2] = value >>> 8;
                this[offset + 3] = value & 255;
                return offset + 4;
            };
            Buffer.prototype.writeBigInt64LE = defineBigIntMethod((function writeBigInt64LE(value, offset = 0) {
                return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
            }));
            Buffer.prototype.writeBigInt64BE = defineBigIntMethod((function writeBigInt64BE(value, offset = 0) {
                return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
            }));
            function checkIEEE754(buf, value, offset, ext, max, min) {
                if (offset + ext > buf.length) throw new RangeError("Index out of range");
                if (offset < 0) throw new RangeError("Index out of range");
            }
            function writeFloat(buf, value, offset, littleEndian, noAssert) {
                value = +value;
                offset >>>= 0;
                if (!noAssert) checkIEEE754(buf, value, offset, 4, 34028234663852886e22, -34028234663852886e22);
                ieee754.write(buf, value, offset, littleEndian, 23, 4);
                return offset + 4;
            }
            Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
                return writeFloat(this, value, offset, true, noAssert);
            };
            Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
                return writeFloat(this, value, offset, false, noAssert);
            };
            function writeDouble(buf, value, offset, littleEndian, noAssert) {
                value = +value;
                offset >>>= 0;
                if (!noAssert) checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292);
                ieee754.write(buf, value, offset, littleEndian, 52, 8);
                return offset + 8;
            }
            Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
                return writeDouble(this, value, offset, true, noAssert);
            };
            Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
                return writeDouble(this, value, offset, false, noAssert);
            };
            Buffer.prototype.copy = function copy(target, targetStart, start, end) {
                if (!Buffer.isBuffer(target)) throw new TypeError("argument should be a Buffer");
                if (!start) start = 0;
                if (!end && end !== 0) end = this.length;
                if (targetStart >= target.length) targetStart = target.length;
                if (!targetStart) targetStart = 0;
                if (end > 0 && end < start) end = start;
                if (end === start) return 0;
                if (target.length === 0 || this.length === 0) return 0;
                if (targetStart < 0) throw new RangeError("targetStart out of bounds");
                if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
                if (end < 0) throw new RangeError("sourceEnd out of bounds");
                if (end > this.length) end = this.length;
                if (target.length - targetStart < end - start) end = target.length - targetStart + start;
                const len = end - start;
                if (this === target && typeof Uint8Array.prototype.copyWithin === "function") this.copyWithin(targetStart, start, end); else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
                return len;
            };
            Buffer.prototype.fill = function fill(val, start, end, encoding) {
                if (typeof val === "string") {
                    if (typeof start === "string") {
                        encoding = start;
                        start = 0;
                        end = this.length;
                    } else if (typeof end === "string") {
                        encoding = end;
                        end = this.length;
                    }
                    if (encoding !== void 0 && typeof encoding !== "string") throw new TypeError("encoding must be a string");
                    if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
                    if (val.length === 1) {
                        const code = val.charCodeAt(0);
                        if (encoding === "utf8" && code < 128 || encoding === "latin1") val = code;
                    }
                } else if (typeof val === "number") val &= 255; else if (typeof val === "boolean") val = Number(val);
                if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
                if (end <= start) return this;
                start >>>= 0;
                end = end === void 0 ? this.length : end >>> 0;
                if (!val) val = 0;
                let i;
                if (typeof val === "number") for (i = start; i < end; ++i) this[i] = val; else {
                    const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
                    const len = bytes.length;
                    if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
                    for (i = 0; i < end - start; ++i) this[i + start] = bytes[i % len];
                }
                return this;
            };
            const errors = {};
            function E(sym, getMessage, Base) {
                errors[sym] = class NodeError extends Base {
                    constructor() {
                        super();
                        Object.defineProperty(this, "message", {
                            value: getMessage.apply(this, arguments),
                            writable: true,
                            configurable: true
                        });
                        this.name = `${this.name} [${sym}]`;
                        this.stack;
                        delete this.name;
                    }
                    get code() {
                        return sym;
                    }
                    set code(value) {
                        Object.defineProperty(this, "code", {
                            configurable: true,
                            enumerable: true,
                            value,
                            writable: true
                        });
                    }
                    toString() {
                        return `${this.name} [${sym}]: ${this.message}`;
                    }
                };
            }
            E("ERR_BUFFER_OUT_OF_BOUNDS", (function(name) {
                if (name) return `${name} is outside of buffer bounds`;
                return "Attempt to access memory outside buffer bounds";
            }), RangeError);
            E("ERR_INVALID_ARG_TYPE", (function(name, actual) {
                return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
            }), TypeError);
            E("ERR_OUT_OF_RANGE", (function(str, range, input) {
                let msg = `The value of "${str}" is out of range.`;
                let received = input;
                if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) received = addNumericalSeparator(String(input)); else if (typeof input === "bigint") {
                    received = String(input);
                    if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) received = addNumericalSeparator(received);
                    received += "n";
                }
                msg += ` It must be ${range}. Received ${received}`;
                return msg;
            }), RangeError);
            function addNumericalSeparator(val) {
                let res = "";
                let i = val.length;
                const start = val[0] === "-" ? 1 : 0;
                for (;i >= start + 4; i -= 3) res = `_${val.slice(i - 3, i)}${res}`;
                return `${val.slice(0, i)}${res}`;
            }
            function checkBounds(buf, offset, byteLength) {
                validateNumber(offset, "offset");
                if (buf[offset] === void 0 || buf[offset + byteLength] === void 0) boundsError(offset, buf.length - (byteLength + 1));
            }
            function checkIntBI(value, min, max, buf, offset, byteLength) {
                if (value > max || value < min) {
                    const n = typeof min === "bigint" ? "n" : "";
                    let range;
                    if (byteLength > 3) if (min === 0 || min === BigInt(0)) range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`; else range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength + 1) * 8 - 1}${n}`; else range = `>= ${min}${n} and <= ${max}${n}`;
                    throw new errors.ERR_OUT_OF_RANGE("value", range, value);
                }
                checkBounds(buf, offset, byteLength);
            }
            function validateNumber(value, name) {
                if (typeof value !== "number") throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
            }
            function boundsError(value, length, type) {
                if (Math.floor(value) !== value) {
                    validateNumber(value, type);
                    throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
                }
                if (length < 0) throw new errors.ERR_BUFFER_OUT_OF_BOUNDS;
                throw new errors.ERR_OUT_OF_RANGE(type || "offset", `>= ${type ? 1 : 0} and <= ${length}`, value);
            }
            const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
            function base64clean(str) {
                str = str.split("=")[0];
                str = str.trim().replace(INVALID_BASE64_RE, "");
                if (str.length < 2) return "";
                while (str.length % 4 !== 0) str += "=";
                return str;
            }
            function utf8ToBytes(string, units) {
                units = units || 1 / 0;
                let codePoint;
                const length = string.length;
                let leadSurrogate = null;
                const bytes = [];
                for (let i = 0; i < length; ++i) {
                    codePoint = string.charCodeAt(i);
                    if (codePoint > 55295 && codePoint < 57344) {
                        if (!leadSurrogate) {
                            if (codePoint > 56319) {
                                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                                continue;
                            } else if (i + 1 === length) {
                                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                                continue;
                            }
                            leadSurrogate = codePoint;
                            continue;
                        }
                        if (codePoint < 56320) {
                            if ((units -= 3) > -1) bytes.push(239, 191, 189);
                            leadSurrogate = codePoint;
                            continue;
                        }
                        codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
                    } else if (leadSurrogate) if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    leadSurrogate = null;
                    if (codePoint < 128) {
                        if ((units -= 1) < 0) break;
                        bytes.push(codePoint);
                    } else if (codePoint < 2048) {
                        if ((units -= 2) < 0) break;
                        bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
                    } else if (codePoint < 65536) {
                        if ((units -= 3) < 0) break;
                        bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
                    } else if (codePoint < 1114112) {
                        if ((units -= 4) < 0) break;
                        bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
                    } else throw new Error("Invalid code point");
                }
                return bytes;
            }
            function asciiToBytes(str) {
                const byteArray = [];
                for (let i = 0; i < str.length; ++i) byteArray.push(str.charCodeAt(i) & 255);
                return byteArray;
            }
            function utf16leToBytes(str, units) {
                let c, hi, lo;
                const byteArray = [];
                for (let i = 0; i < str.length; ++i) {
                    if ((units -= 2) < 0) break;
                    c = str.charCodeAt(i);
                    hi = c >> 8;
                    lo = c % 256;
                    byteArray.push(lo);
                    byteArray.push(hi);
                }
                return byteArray;
            }
            function base64ToBytes(str) {
                return base64.toByteArray(base64clean(str));
            }
            function blitBuffer(src, dst, offset, length) {
                let i;
                for (i = 0; i < length; ++i) {
                    if (i + offset >= dst.length || i >= src.length) break;
                    dst[i + offset] = src[i];
                }
                return i;
            }
            function isInstance(obj, type) {
                return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
            }
            function numberIsNaN(obj) {
                return obj !== obj;
            }
            const hexSliceLookupTable = function() {
                const alphabet = "0123456789abcdef";
                const table = new Array(256);
                for (let i = 0; i < 16; ++i) {
                    const i16 = i * 16;
                    for (let j = 0; j < 16; ++j) table[i16 + j] = alphabet[i] + alphabet[j];
                }
                return table;
            }();
            function defineBigIntMethod(fn) {
                return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
            }
            function BufferBigIntNotDefined() {
                throw new Error("BigInt not supported");
            }
        },
        621: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var _Buffer = __webpack_require__(861).Buffer;
            function base(ALPHABET) {
                if (ALPHABET.length >= 255) throw new TypeError("Alphabet too long");
                var BASE_MAP = new Uint8Array(256);
                for (var j = 0; j < BASE_MAP.length; j++) BASE_MAP[j] = 255;
                for (var i = 0; i < ALPHABET.length; i++) {
                    var x = ALPHABET.charAt(i);
                    var xc = x.charCodeAt(0);
                    if (BASE_MAP[xc] !== 255) throw new TypeError(x + " is ambiguous");
                    BASE_MAP[xc] = i;
                }
                var BASE = ALPHABET.length;
                var LEADER = ALPHABET.charAt(0);
                var FACTOR = Math.log(BASE) / Math.log(256);
                var iFACTOR = Math.log(256) / Math.log(BASE);
                function encode(source) {
                    if (Array.isArray(source) || source instanceof Uint8Array) source = _Buffer.from(source);
                    if (!_Buffer.isBuffer(source)) throw new TypeError("Expected Buffer");
                    if (source.length === 0) return "";
                    var zeroes = 0;
                    var length = 0;
                    var pbegin = 0;
                    var pend = source.length;
                    while (pbegin !== pend && source[pbegin] === 0) {
                        pbegin++;
                        zeroes++;
                    }
                    var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
                    var b58 = new Uint8Array(size);
                    while (pbegin !== pend) {
                        var carry = source[pbegin];
                        var i = 0;
                        for (var it1 = size - 1; (carry !== 0 || i < length) && it1 !== -1; it1--, i++) {
                            carry += 256 * b58[it1] >>> 0;
                            b58[it1] = carry % BASE >>> 0;
                            carry = carry / BASE >>> 0;
                        }
                        if (carry !== 0) throw new Error("Non-zero carry");
                        length = i;
                        pbegin++;
                    }
                    var it2 = size - length;
                    while (it2 !== size && b58[it2] === 0) it2++;
                    var str = LEADER.repeat(zeroes);
                    for (;it2 < size; ++it2) str += ALPHABET.charAt(b58[it2]);
                    return str;
                }
                function decodeUnsafe(source) {
                    if (typeof source !== "string") throw new TypeError("Expected String");
                    if (source.length === 0) return _Buffer.alloc(0);
                    var psz = 0;
                    var zeroes = 0;
                    var length = 0;
                    while (source[psz] === LEADER) {
                        zeroes++;
                        psz++;
                    }
                    var size = (source.length - psz) * FACTOR + 1 >>> 0;
                    var b256 = new Uint8Array(size);
                    while (source[psz]) {
                        var carry = BASE_MAP[source.charCodeAt(psz)];
                        if (carry === 255) return;
                        var i = 0;
                        for (var it3 = size - 1; (carry !== 0 || i < length) && it3 !== -1; it3--, i++) {
                            carry += BASE * b256[it3] >>> 0;
                            b256[it3] = carry % 256 >>> 0;
                            carry = carry / 256 >>> 0;
                        }
                        if (carry !== 0) throw new Error("Non-zero carry");
                        length = i;
                        psz++;
                    }
                    var it4 = size - length;
                    while (it4 !== size && b256[it4] === 0) it4++;
                    var vch = _Buffer.allocUnsafe(zeroes + (size - it4));
                    vch.fill(0, 0, zeroes);
                    var j = zeroes;
                    while (it4 !== size) vch[j++] = b256[it4++];
                    return vch;
                }
                function decode(string) {
                    var buffer = decodeUnsafe(string);
                    if (buffer) return buffer;
                    throw new Error("Non-base" + BASE + " character");
                }
                return {
                    encode,
                    decodeUnsafe,
                    decode
                };
            }
            module.exports = base;
        },
        466: (module, __unused_webpack_exports, __webpack_require__) => {
            var basex = __webpack_require__(621);
            var ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
            module.exports = basex(ALPHABET);
        },
        290: (__unused_webpack_module, exports, __webpack_require__) => {
            "use strict";
            /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
            const base64 = __webpack_require__(526);
            const ieee754 = __webpack_require__(251);
            const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
            exports.hp = Buffer;
            SlowBuffer;
            exports.IS = 50;
            const K_MAX_LENGTH = 2147483647;
            K_MAX_LENGTH;
            Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
            if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") console.error("This browser lacks typed array (Uint8Array) support which is required by " + "`buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
            function typedArraySupport() {
                try {
                    const arr = new Uint8Array(1);
                    const proto = {
                        foo: function() {
                            return 42;
                        }
                    };
                    Object.setPrototypeOf(proto, Uint8Array.prototype);
                    Object.setPrototypeOf(arr, proto);
                    return arr.foo() === 42;
                } catch (e) {
                    return false;
                }
            }
            Object.defineProperty(Buffer.prototype, "parent", {
                enumerable: true,
                get: function() {
                    if (!Buffer.isBuffer(this)) return;
                    return this.buffer;
                }
            });
            Object.defineProperty(Buffer.prototype, "offset", {
                enumerable: true,
                get: function() {
                    if (!Buffer.isBuffer(this)) return;
                    return this.byteOffset;
                }
            });
            function createBuffer(length) {
                if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
                const buf = new Uint8Array(length);
                Object.setPrototypeOf(buf, Buffer.prototype);
                return buf;
            }
            function Buffer(arg, encodingOrOffset, length) {
                if (typeof arg === "number") {
                    if (typeof encodingOrOffset === "string") throw new TypeError('The "string" argument must be of type string. Received type number');
                    return allocUnsafe(arg);
                }
                return from(arg, encodingOrOffset, length);
            }
            Buffer.poolSize = 8192;
            function from(value, encodingOrOffset, length) {
                if (typeof value === "string") return fromString(value, encodingOrOffset);
                if (ArrayBuffer.isView(value)) return fromArrayView(value);
                if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof value);
                if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
                if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
                if (typeof value === "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
                const valueOf = value.valueOf && value.valueOf();
                if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
                const b = fromObject(value);
                if (b) return b;
                if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") return Buffer.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof value);
            }
            Buffer.from = function(value, encodingOrOffset, length) {
                return from(value, encodingOrOffset, length);
            };
            Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
            Object.setPrototypeOf(Buffer, Uint8Array);
            function assertSize(size) {
                if (typeof size !== "number") throw new TypeError('"size" argument must be of type number'); else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
            }
            function alloc(size, fill, encoding) {
                assertSize(size);
                if (size <= 0) return createBuffer(size);
                if (fill !== void 0) return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
                return createBuffer(size);
            }
            Buffer.alloc = function(size, fill, encoding) {
                return alloc(size, fill, encoding);
            };
            function allocUnsafe(size) {
                assertSize(size);
                return createBuffer(size < 0 ? 0 : checked(size) | 0);
            }
            Buffer.allocUnsafe = function(size) {
                return allocUnsafe(size);
            };
            Buffer.allocUnsafeSlow = function(size) {
                return allocUnsafe(size);
            };
            function fromString(string, encoding) {
                if (typeof encoding !== "string" || encoding === "") encoding = "utf8";
                if (!Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
                const length = byteLength(string, encoding) | 0;
                let buf = createBuffer(length);
                const actual = buf.write(string, encoding);
                if (actual !== length) buf = buf.slice(0, actual);
                return buf;
            }
            function fromArrayLike(array) {
                const length = array.length < 0 ? 0 : checked(array.length) | 0;
                const buf = createBuffer(length);
                for (let i = 0; i < length; i += 1) buf[i] = array[i] & 255;
                return buf;
            }
            function fromArrayView(arrayView) {
                if (isInstance(arrayView, Uint8Array)) {
                    const copy = new Uint8Array(arrayView);
                    return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
                }
                return fromArrayLike(arrayView);
            }
            function fromArrayBuffer(array, byteOffset, length) {
                if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
                if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
                let buf;
                if (byteOffset === void 0 && length === void 0) buf = new Uint8Array(array); else if (length === void 0) buf = new Uint8Array(array, byteOffset); else buf = new Uint8Array(array, byteOffset, length);
                Object.setPrototypeOf(buf, Buffer.prototype);
                return buf;
            }
            function fromObject(obj) {
                if (Buffer.isBuffer(obj)) {
                    const len = checked(obj.length) | 0;
                    const buf = createBuffer(len);
                    if (buf.length === 0) return buf;
                    obj.copy(buf, 0, 0, len);
                    return buf;
                }
                if (obj.length !== void 0) {
                    if (typeof obj.length !== "number" || numberIsNaN(obj.length)) return createBuffer(0);
                    return fromArrayLike(obj);
                }
                if (obj.type === "Buffer" && Array.isArray(obj.data)) return fromArrayLike(obj.data);
            }
            function checked(length) {
                if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum " + "size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
                return length | 0;
            }
            function SlowBuffer(length) {
                if (+length != length) length = 0;
                return Buffer.alloc(+length);
            }
            Buffer.isBuffer = function isBuffer(b) {
                return b != null && b._isBuffer === true && b !== Buffer.prototype;
            };
            Buffer.compare = function compare(a, b) {
                if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
                if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
                if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (a === b) return 0;
                let x = a.length;
                let y = b.length;
                for (let i = 0, len = Math.min(x, y); i < len; ++i) if (a[i] !== b[i]) {
                    x = a[i];
                    y = b[i];
                    break;
                }
                if (x < y) return -1;
                if (y < x) return 1;
                return 0;
            };
            Buffer.isEncoding = function isEncoding(encoding) {
                switch (String(encoding).toLowerCase()) {
                  case "hex":
                  case "utf8":
                  case "utf-8":
                  case "ascii":
                  case "latin1":
                  case "binary":
                  case "base64":
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return true;

                  default:
                    return false;
                }
            };
            Buffer.concat = function concat(list, length) {
                if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (list.length === 0) return Buffer.alloc(0);
                let i;
                if (length === void 0) {
                    length = 0;
                    for (i = 0; i < list.length; ++i) length += list[i].length;
                }
                const buffer = Buffer.allocUnsafe(length);
                let pos = 0;
                for (i = 0; i < list.length; ++i) {
                    let buf = list[i];
                    if (isInstance(buf, Uint8Array)) if (pos + buf.length > buffer.length) {
                        if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
                        buf.copy(buffer, pos);
                    } else Uint8Array.prototype.set.call(buffer, buf, pos); else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers'); else buf.copy(buffer, pos);
                    pos += buf.length;
                }
                return buffer;
            };
            function byteLength(string, encoding) {
                if (Buffer.isBuffer(string)) return string.length;
                if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
                if (typeof string !== "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' + "Received type " + typeof string);
                const len = string.length;
                const mustMatch = arguments.length > 2 && arguments[2] === true;
                if (!mustMatch && len === 0) return 0;
                let loweredCase = false;
                for (;;) switch (encoding) {
                  case "ascii":
                  case "latin1":
                  case "binary":
                    return len;

                  case "utf8":
                  case "utf-8":
                    return utf8ToBytes(string).length;

                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return len * 2;

                  case "hex":
                    return len >>> 1;

                  case "base64":
                    return base64ToBytes(string).length;

                  default:
                    if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length;
                    encoding = ("" + encoding).toLowerCase();
                    loweredCase = true;
                }
            }
            Buffer.byteLength = byteLength;
            function slowToString(encoding, start, end) {
                let loweredCase = false;
                if (start === void 0 || start < 0) start = 0;
                if (start > this.length) return "";
                if (end === void 0 || end > this.length) end = this.length;
                if (end <= 0) return "";
                end >>>= 0;
                start >>>= 0;
                if (end <= start) return "";
                if (!encoding) encoding = "utf8";
                while (true) switch (encoding) {
                  case "hex":
                    return hexSlice(this, start, end);

                  case "utf8":
                  case "utf-8":
                    return utf8Slice(this, start, end);

                  case "ascii":
                    return asciiSlice(this, start, end);

                  case "latin1":
                  case "binary":
                    return latin1Slice(this, start, end);

                  case "base64":
                    return base64Slice(this, start, end);

                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return utf16leSlice(this, start, end);

                  default:
                    if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
                    encoding = (encoding + "").toLowerCase();
                    loweredCase = true;
                }
            }
            Buffer.prototype._isBuffer = true;
            function swap(b, n, m) {
                const i = b[n];
                b[n] = b[m];
                b[m] = i;
            }
            Buffer.prototype.swap16 = function swap16() {
                const len = this.length;
                if (len % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (let i = 0; i < len; i += 2) swap(this, i, i + 1);
                return this;
            };
            Buffer.prototype.swap32 = function swap32() {
                const len = this.length;
                if (len % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (let i = 0; i < len; i += 4) {
                    swap(this, i, i + 3);
                    swap(this, i + 1, i + 2);
                }
                return this;
            };
            Buffer.prototype.swap64 = function swap64() {
                const len = this.length;
                if (len % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (let i = 0; i < len; i += 8) {
                    swap(this, i, i + 7);
                    swap(this, i + 1, i + 6);
                    swap(this, i + 2, i + 5);
                    swap(this, i + 3, i + 4);
                }
                return this;
            };
            Buffer.prototype.toString = function toString() {
                const length = this.length;
                if (length === 0) return "";
                if (arguments.length === 0) return utf8Slice(this, 0, length);
                return slowToString.apply(this, arguments);
            };
            Buffer.prototype.toLocaleString = Buffer.prototype.toString;
            Buffer.prototype.equals = function equals(b) {
                if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
                if (this === b) return true;
                return Buffer.compare(this, b) === 0;
            };
            Buffer.prototype.inspect = function inspect() {
                let str = "";
                const max = exports.IS;
                str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
                if (this.length > max) str += " ... ";
                return "<Buffer " + str + ">";
            };
            if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
            Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
                if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
                if (!Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. ' + "Received type " + typeof target);
                if (start === void 0) start = 0;
                if (end === void 0) end = target ? target.length : 0;
                if (thisStart === void 0) thisStart = 0;
                if (thisEnd === void 0) thisEnd = this.length;
                if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
                if (thisStart >= thisEnd && start >= end) return 0;
                if (thisStart >= thisEnd) return -1;
                if (start >= end) return 1;
                start >>>= 0;
                end >>>= 0;
                thisStart >>>= 0;
                thisEnd >>>= 0;
                if (this === target) return 0;
                let x = thisEnd - thisStart;
                let y = end - start;
                const len = Math.min(x, y);
                const thisCopy = this.slice(thisStart, thisEnd);
                const targetCopy = target.slice(start, end);
                for (let i = 0; i < len; ++i) if (thisCopy[i] !== targetCopy[i]) {
                    x = thisCopy[i];
                    y = targetCopy[i];
                    break;
                }
                if (x < y) return -1;
                if (y < x) return 1;
                return 0;
            };
            function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
                if (buffer.length === 0) return -1;
                if (typeof byteOffset === "string") {
                    encoding = byteOffset;
                    byteOffset = 0;
                } else if (byteOffset > 2147483647) byteOffset = 2147483647; else if (byteOffset < -2147483648) byteOffset = -2147483648;
                byteOffset = +byteOffset;
                if (numberIsNaN(byteOffset)) byteOffset = dir ? 0 : buffer.length - 1;
                if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
                if (byteOffset >= buffer.length) if (dir) return -1; else byteOffset = buffer.length - 1; else if (byteOffset < 0) if (dir) byteOffset = 0; else return -1;
                if (typeof val === "string") val = Buffer.from(val, encoding);
                if (Buffer.isBuffer(val)) {
                    if (val.length === 0) return -1;
                    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
                } else if (typeof val === "number") {
                    val &= 255;
                    if (typeof Uint8Array.prototype.indexOf === "function") if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset); else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
                    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir);
                }
                throw new TypeError("val must be string, number or Buffer");
            }
            function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
                let indexSize = 1;
                let arrLength = arr.length;
                let valLength = val.length;
                if (encoding !== void 0) {
                    encoding = String(encoding).toLowerCase();
                    if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
                        if (arr.length < 2 || val.length < 2) return -1;
                        indexSize = 2;
                        arrLength /= 2;
                        valLength /= 2;
                        byteOffset /= 2;
                    }
                }
                function read(buf, i) {
                    if (indexSize === 1) return buf[i]; else return buf.readUInt16BE(i * indexSize);
                }
                let i;
                if (dir) {
                    let foundIndex = -1;
                    for (i = byteOffset; i < arrLength; i++) if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
                        if (foundIndex === -1) foundIndex = i;
                        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
                    } else {
                        if (foundIndex !== -1) i -= i - foundIndex;
                        foundIndex = -1;
                    }
                } else {
                    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
                    for (i = byteOffset; i >= 0; i--) {
                        let found = true;
                        for (let j = 0; j < valLength; j++) if (read(arr, i + j) !== read(val, j)) {
                            found = false;
                            break;
                        }
                        if (found) return i;
                    }
                }
                return -1;
            }
            Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
                return this.indexOf(val, byteOffset, encoding) !== -1;
            };
            Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
                return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
            };
            Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
                return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
            };
            function hexWrite(buf, string, offset, length) {
                offset = Number(offset) || 0;
                const remaining = buf.length - offset;
                if (!length) length = remaining; else {
                    length = Number(length);
                    if (length > remaining) length = remaining;
                }
                const strLen = string.length;
                if (length > strLen / 2) length = strLen / 2;
                let i;
                for (i = 0; i < length; ++i) {
                    const parsed = parseInt(string.substr(i * 2, 2), 16);
                    if (numberIsNaN(parsed)) return i;
                    buf[offset + i] = parsed;
                }
                return i;
            }
            function utf8Write(buf, string, offset, length) {
                return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
            }
            function asciiWrite(buf, string, offset, length) {
                return blitBuffer(asciiToBytes(string), buf, offset, length);
            }
            function base64Write(buf, string, offset, length) {
                return blitBuffer(base64ToBytes(string), buf, offset, length);
            }
            function ucs2Write(buf, string, offset, length) {
                return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
            }
            Buffer.prototype.write = function write(string, offset, length, encoding) {
                if (offset === void 0) {
                    encoding = "utf8";
                    length = this.length;
                    offset = 0;
                } else if (length === void 0 && typeof offset === "string") {
                    encoding = offset;
                    length = this.length;
                    offset = 0;
                } else if (isFinite(offset)) {
                    offset >>>= 0;
                    if (isFinite(length)) {
                        length >>>= 0;
                        if (encoding === void 0) encoding = "utf8";
                    } else {
                        encoding = length;
                        length = void 0;
                    }
                } else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                const remaining = this.length - offset;
                if (length === void 0 || length > remaining) length = remaining;
                if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                if (!encoding) encoding = "utf8";
                let loweredCase = false;
                for (;;) switch (encoding) {
                  case "hex":
                    return hexWrite(this, string, offset, length);

                  case "utf8":
                  case "utf-8":
                    return utf8Write(this, string, offset, length);

                  case "ascii":
                  case "latin1":
                  case "binary":
                    return asciiWrite(this, string, offset, length);

                  case "base64":
                    return base64Write(this, string, offset, length);

                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return ucs2Write(this, string, offset, length);

                  default:
                    if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
                    encoding = ("" + encoding).toLowerCase();
                    loweredCase = true;
                }
            };
            Buffer.prototype.toJSON = function toJSON() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                };
            };
            function base64Slice(buf, start, end) {
                if (start === 0 && end === buf.length) return base64.fromByteArray(buf); else return base64.fromByteArray(buf.slice(start, end));
            }
            function utf8Slice(buf, start, end) {
                end = Math.min(buf.length, end);
                const res = [];
                let i = start;
                while (i < end) {
                    const firstByte = buf[i];
                    let codePoint = null;
                    let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
                    if (i + bytesPerSequence <= end) {
                        let secondByte, thirdByte, fourthByte, tempCodePoint;
                        switch (bytesPerSequence) {
                          case 1:
                            if (firstByte < 128) codePoint = firstByte;
                            break;

                          case 2:
                            secondByte = buf[i + 1];
                            if ((secondByte & 192) === 128) {
                                tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                                if (tempCodePoint > 127) codePoint = tempCodePoint;
                            }
                            break;

                          case 3:
                            secondByte = buf[i + 1];
                            thirdByte = buf[i + 2];
                            if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                                tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                                if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) codePoint = tempCodePoint;
                            }
                            break;

                          case 4:
                            secondByte = buf[i + 1];
                            thirdByte = buf[i + 2];
                            fourthByte = buf[i + 3];
                            if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                                tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                                if (tempCodePoint > 65535 && tempCodePoint < 1114112) codePoint = tempCodePoint;
                            }
                        }
                    }
                    if (codePoint === null) {
                        codePoint = 65533;
                        bytesPerSequence = 1;
                    } else if (codePoint > 65535) {
                        codePoint -= 65536;
                        res.push(codePoint >>> 10 & 1023 | 55296);
                        codePoint = 56320 | codePoint & 1023;
                    }
                    res.push(codePoint);
                    i += bytesPerSequence;
                }
                return decodeCodePointsArray(res);
            }
            const MAX_ARGUMENTS_LENGTH = 4096;
            function decodeCodePointsArray(codePoints) {
                const len = codePoints.length;
                if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints);
                let res = "";
                let i = 0;
                while (i < len) res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
                return res;
            }
            function asciiSlice(buf, start, end) {
                let ret = "";
                end = Math.min(buf.length, end);
                for (let i = start; i < end; ++i) ret += String.fromCharCode(buf[i] & 127);
                return ret;
            }
            function latin1Slice(buf, start, end) {
                let ret = "";
                end = Math.min(buf.length, end);
                for (let i = start; i < end; ++i) ret += String.fromCharCode(buf[i]);
                return ret;
            }
            function hexSlice(buf, start, end) {
                const len = buf.length;
                if (!start || start < 0) start = 0;
                if (!end || end < 0 || end > len) end = len;
                let out = "";
                for (let i = start; i < end; ++i) out += hexSliceLookupTable[buf[i]];
                return out;
            }
            function utf16leSlice(buf, start, end) {
                const bytes = buf.slice(start, end);
                let res = "";
                for (let i = 0; i < bytes.length - 1; i += 2) res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
                return res;
            }
            Buffer.prototype.slice = function slice(start, end) {
                const len = this.length;
                start = ~~start;
                end = end === void 0 ? len : ~~end;
                if (start < 0) {
                    start += len;
                    if (start < 0) start = 0;
                } else if (start > len) start = len;
                if (end < 0) {
                    end += len;
                    if (end < 0) end = 0;
                } else if (end > len) end = len;
                if (end < start) end = start;
                const newBuf = this.subarray(start, end);
                Object.setPrototypeOf(newBuf, Buffer.prototype);
                return newBuf;
            };
            function checkOffset(offset, ext, length) {
                if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
                if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
            }
            Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
                offset >>>= 0;
                byteLength >>>= 0;
                if (!noAssert) checkOffset(offset, byteLength, this.length);
                let val = this[offset];
                let mul = 1;
                let i = 0;
                while (++i < byteLength && (mul *= 256)) val += this[offset + i] * mul;
                return val;
            };
            Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
                offset >>>= 0;
                byteLength >>>= 0;
                if (!noAssert) checkOffset(offset, byteLength, this.length);
                let val = this[offset + --byteLength];
                let mul = 1;
                while (byteLength > 0 && (mul *= 256)) val += this[offset + --byteLength] * mul;
                return val;
            };
            Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
                offset >>>= 0;
                if (!noAssert) checkOffset(offset, 1, this.length);
                return this[offset];
            };
            Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
                offset >>>= 0;
                if (!noAssert) checkOffset(offset, 2, this.length);
                return this[offset] | this[offset + 1] << 8;
            };
            Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
                offset >>>= 0;
                if (!noAssert) checkOffset(offset, 2, this.length);
                return this[offset] << 8 | this[offset + 1];
            };
            Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
                offset >>>= 0;
                if (!noAssert) checkOffset(offset, 4, this.length);
                return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
            };
            Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
                offset >>>= 0;
                if (!noAssert) checkOffset(offset, 4, this.length);
                return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
            };
            Buffer.prototype.readBigUInt64LE = defineBigIntMethod((function readBigUInt64LE(offset) {
                offset >>>= 0;
                validateNumber(offset, "offset");
                const first = this[offset];
                const last = this[offset + 7];
                if (first === void 0 || last === void 0) boundsError(offset, this.length - 8);
                const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
                const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
                return BigInt(lo) + (BigInt(hi) << BigInt(32));
            }));
            Buffer.prototype.readBigUInt64BE = defineBigIntMethod((function readBigUInt64BE(offset) {
                offset >>>= 0;
                validateNumber(offset, "offset");
                const first = this[offset];
                const last = this[offset + 7];
                if (first === void 0 || last === void 0) boundsError(offset, this.length - 8);
                const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
                const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
                return (BigInt(hi) << BigInt(32)) + BigInt(lo);
            }));
            Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
                offset >>>= 0;
                byteLength >>>= 0;
                if (!noAssert) checkOffset(offset, byteLength, this.length);
                let val = this[offset];
                let mul = 1;
                let i = 0;
                while (++i < byteLength && (mul *= 256)) val += this[offset + i] * mul;
                mul *= 128;
                if (val >= mul) val -= Math.pow(2, 8 * byteLength);
                return val;
            };
            Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
                offset >>>= 0;
                byteLength >>>= 0;
                if (!noAssert) checkOffset(offset, byteLength, this.length);
                let i = byteLength;
                let mul = 1;
                let val = this[offset + --i];
                while (i > 0 && (mul *= 256)) val += this[offset + --i] * mul;
                mul *= 128;
                if (val >= mul) val -= Math.pow(2, 8 * byteLength);
                return val;
            };
            Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
                offset >>>= 0;
                if (!noAssert) checkOffset(offset, 1, this.length);
                if (!(this[offset] & 128)) return this[offset];
                return (255 - this[offset] + 1) * -1;
            };
            Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
                offset >>>= 0;
                if (!noAssert) checkOffset(offset, 2, this.length);
                const val = this[offset] | this[offset + 1] << 8;
                return val & 32768 ? val | 4294901760 : val;
            };
            Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
                offset >>>= 0;
                if (!noAssert) checkOffset(offset, 2, this.length);
                const val = this[offset + 1] | this[offset] << 8;
                return val & 32768 ? val | 4294901760 : val;
            };
            Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
                offset >>>= 0;
                if (!noAssert) checkOffset(offset, 4, this.length);
                return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
            };
            Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
                offset >>>= 0;
                if (!noAssert) checkOffset(offset, 4, this.length);
                return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
            };
            Buffer.prototype.readBigInt64LE = defineBigIntMethod((function readBigInt64LE(offset) {
                offset >>>= 0;
                validateNumber(offset, "offset");
                const first = this[offset];
                const last = this[offset + 7];
                if (first === void 0 || last === void 0) boundsError(offset, this.length - 8);
                const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
                return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
            }));
            Buffer.prototype.readBigInt64BE = defineBigIntMethod((function readBigInt64BE(offset) {
                offset >>>= 0;
                validateNumber(offset, "offset");
                const first = this[offset];
                const last = this[offset + 7];
                if (first === void 0 || last === void 0) boundsError(offset, this.length - 8);
                const val = (first << 24) + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
                return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
            }));
            Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
                offset >>>= 0;
                if (!noAssert) checkOffset(offset, 4, this.length);
                return ieee754.read(this, offset, true, 23, 4);
            };
            Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
                offset >>>= 0;
                if (!noAssert) checkOffset(offset, 4, this.length);
                return ieee754.read(this, offset, false, 23, 4);
            };
            Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
                offset >>>= 0;
                if (!noAssert) checkOffset(offset, 8, this.length);
                return ieee754.read(this, offset, true, 52, 8);
            };
            Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
                offset >>>= 0;
                if (!noAssert) checkOffset(offset, 8, this.length);
                return ieee754.read(this, offset, false, 52, 8);
            };
            function checkInt(buf, value, offset, ext, max, min) {
                if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
                if (offset + ext > buf.length) throw new RangeError("Index out of range");
            }
            Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
                value = +value;
                offset >>>= 0;
                byteLength >>>= 0;
                if (!noAssert) {
                    const maxBytes = Math.pow(2, 8 * byteLength) - 1;
                    checkInt(this, value, offset, byteLength, maxBytes, 0);
                }
                let mul = 1;
                let i = 0;
                this[offset] = value & 255;
                while (++i < byteLength && (mul *= 256)) this[offset + i] = value / mul & 255;
                return offset + byteLength;
            };
            Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
                value = +value;
                offset >>>= 0;
                byteLength >>>= 0;
                if (!noAssert) {
                    const maxBytes = Math.pow(2, 8 * byteLength) - 1;
                    checkInt(this, value, offset, byteLength, maxBytes, 0);
                }
                let i = byteLength - 1;
                let mul = 1;
                this[offset + i] = value & 255;
                while (--i >= 0 && (mul *= 256)) this[offset + i] = value / mul & 255;
                return offset + byteLength;
            };
            Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
                value = +value;
                offset >>>= 0;
                if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
                this[offset] = value & 255;
                return offset + 1;
            };
            Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
                value = +value;
                offset >>>= 0;
                if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
                this[offset] = value & 255;
                this[offset + 1] = value >>> 8;
                return offset + 2;
            };
            Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
                value = +value;
                offset >>>= 0;
                if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
                this[offset] = value >>> 8;
                this[offset + 1] = value & 255;
                return offset + 2;
            };
            Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
                value = +value;
                offset >>>= 0;
                if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
                this[offset + 3] = value >>> 24;
                this[offset + 2] = value >>> 16;
                this[offset + 1] = value >>> 8;
                this[offset] = value & 255;
                return offset + 4;
            };
            Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
                value = +value;
                offset >>>= 0;
                if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
                this[offset] = value >>> 24;
                this[offset + 1] = value >>> 16;
                this[offset + 2] = value >>> 8;
                this[offset + 3] = value & 255;
                return offset + 4;
            };
            function wrtBigUInt64LE(buf, value, offset, min, max) {
                checkIntBI(value, min, max, buf, offset, 7);
                let lo = Number(value & BigInt(4294967295));
                buf[offset++] = lo;
                lo >>= 8;
                buf[offset++] = lo;
                lo >>= 8;
                buf[offset++] = lo;
                lo >>= 8;
                buf[offset++] = lo;
                let hi = Number(value >> BigInt(32) & BigInt(4294967295));
                buf[offset++] = hi;
                hi >>= 8;
                buf[offset++] = hi;
                hi >>= 8;
                buf[offset++] = hi;
                hi >>= 8;
                buf[offset++] = hi;
                return offset;
            }
            function wrtBigUInt64BE(buf, value, offset, min, max) {
                checkIntBI(value, min, max, buf, offset, 7);
                let lo = Number(value & BigInt(4294967295));
                buf[offset + 7] = lo;
                lo >>= 8;
                buf[offset + 6] = lo;
                lo >>= 8;
                buf[offset + 5] = lo;
                lo >>= 8;
                buf[offset + 4] = lo;
                let hi = Number(value >> BigInt(32) & BigInt(4294967295));
                buf[offset + 3] = hi;
                hi >>= 8;
                buf[offset + 2] = hi;
                hi >>= 8;
                buf[offset + 1] = hi;
                hi >>= 8;
                buf[offset] = hi;
                return offset + 8;
            }
            Buffer.prototype.writeBigUInt64LE = defineBigIntMethod((function writeBigUInt64LE(value, offset = 0) {
                return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
            }));
            Buffer.prototype.writeBigUInt64BE = defineBigIntMethod((function writeBigUInt64BE(value, offset = 0) {
                return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
            }));
            Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
                value = +value;
                offset >>>= 0;
                if (!noAssert) {
                    const limit = Math.pow(2, 8 * byteLength - 1);
                    checkInt(this, value, offset, byteLength, limit - 1, -limit);
                }
                let i = 0;
                let mul = 1;
                let sub = 0;
                this[offset] = value & 255;
                while (++i < byteLength && (mul *= 256)) {
                    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
                    this[offset + i] = (value / mul >> 0) - sub & 255;
                }
                return offset + byteLength;
            };
            Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
                value = +value;
                offset >>>= 0;
                if (!noAssert) {
                    const limit = Math.pow(2, 8 * byteLength - 1);
                    checkInt(this, value, offset, byteLength, limit - 1, -limit);
                }
                let i = byteLength - 1;
                let mul = 1;
                let sub = 0;
                this[offset + i] = value & 255;
                while (--i >= 0 && (mul *= 256)) {
                    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
                    this[offset + i] = (value / mul >> 0) - sub & 255;
                }
                return offset + byteLength;
            };
            Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
                value = +value;
                offset >>>= 0;
                if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
                if (value < 0) value = 255 + value + 1;
                this[offset] = value & 255;
                return offset + 1;
            };
            Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
                value = +value;
                offset >>>= 0;
                if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
                this[offset] = value & 255;
                this[offset + 1] = value >>> 8;
                return offset + 2;
            };
            Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
                value = +value;
                offset >>>= 0;
                if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
                this[offset] = value >>> 8;
                this[offset + 1] = value & 255;
                return offset + 2;
            };
            Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
                value = +value;
                offset >>>= 0;
                if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
                this[offset] = value & 255;
                this[offset + 1] = value >>> 8;
                this[offset + 2] = value >>> 16;
                this[offset + 3] = value >>> 24;
                return offset + 4;
            };
            Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
                value = +value;
                offset >>>= 0;
                if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
                if (value < 0) value = 4294967295 + value + 1;
                this[offset] = value >>> 24;
                this[offset + 1] = value >>> 16;
                this[offset + 2] = value >>> 8;
                this[offset + 3] = value & 255;
                return offset + 4;
            };
            Buffer.prototype.writeBigInt64LE = defineBigIntMethod((function writeBigInt64LE(value, offset = 0) {
                return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
            }));
            Buffer.prototype.writeBigInt64BE = defineBigIntMethod((function writeBigInt64BE(value, offset = 0) {
                return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
            }));
            function checkIEEE754(buf, value, offset, ext, max, min) {
                if (offset + ext > buf.length) throw new RangeError("Index out of range");
                if (offset < 0) throw new RangeError("Index out of range");
            }
            function writeFloat(buf, value, offset, littleEndian, noAssert) {
                value = +value;
                offset >>>= 0;
                if (!noAssert) checkIEEE754(buf, value, offset, 4, 34028234663852886e22, -34028234663852886e22);
                ieee754.write(buf, value, offset, littleEndian, 23, 4);
                return offset + 4;
            }
            Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
                return writeFloat(this, value, offset, true, noAssert);
            };
            Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
                return writeFloat(this, value, offset, false, noAssert);
            };
            function writeDouble(buf, value, offset, littleEndian, noAssert) {
                value = +value;
                offset >>>= 0;
                if (!noAssert) checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292);
                ieee754.write(buf, value, offset, littleEndian, 52, 8);
                return offset + 8;
            }
            Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
                return writeDouble(this, value, offset, true, noAssert);
            };
            Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
                return writeDouble(this, value, offset, false, noAssert);
            };
            Buffer.prototype.copy = function copy(target, targetStart, start, end) {
                if (!Buffer.isBuffer(target)) throw new TypeError("argument should be a Buffer");
                if (!start) start = 0;
                if (!end && end !== 0) end = this.length;
                if (targetStart >= target.length) targetStart = target.length;
                if (!targetStart) targetStart = 0;
                if (end > 0 && end < start) end = start;
                if (end === start) return 0;
                if (target.length === 0 || this.length === 0) return 0;
                if (targetStart < 0) throw new RangeError("targetStart out of bounds");
                if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
                if (end < 0) throw new RangeError("sourceEnd out of bounds");
                if (end > this.length) end = this.length;
                if (target.length - targetStart < end - start) end = target.length - targetStart + start;
                const len = end - start;
                if (this === target && typeof Uint8Array.prototype.copyWithin === "function") this.copyWithin(targetStart, start, end); else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
                return len;
            };
            Buffer.prototype.fill = function fill(val, start, end, encoding) {
                if (typeof val === "string") {
                    if (typeof start === "string") {
                        encoding = start;
                        start = 0;
                        end = this.length;
                    } else if (typeof end === "string") {
                        encoding = end;
                        end = this.length;
                    }
                    if (encoding !== void 0 && typeof encoding !== "string") throw new TypeError("encoding must be a string");
                    if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
                    if (val.length === 1) {
                        const code = val.charCodeAt(0);
                        if (encoding === "utf8" && code < 128 || encoding === "latin1") val = code;
                    }
                } else if (typeof val === "number") val &= 255; else if (typeof val === "boolean") val = Number(val);
                if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
                if (end <= start) return this;
                start >>>= 0;
                end = end === void 0 ? this.length : end >>> 0;
                if (!val) val = 0;
                let i;
                if (typeof val === "number") for (i = start; i < end; ++i) this[i] = val; else {
                    const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
                    const len = bytes.length;
                    if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
                    for (i = 0; i < end - start; ++i) this[i + start] = bytes[i % len];
                }
                return this;
            };
            const errors = {};
            function E(sym, getMessage, Base) {
                errors[sym] = class NodeError extends Base {
                    constructor() {
                        super();
                        Object.defineProperty(this, "message", {
                            value: getMessage.apply(this, arguments),
                            writable: true,
                            configurable: true
                        });
                        this.name = `${this.name} [${sym}]`;
                        this.stack;
                        delete this.name;
                    }
                    get code() {
                        return sym;
                    }
                    set code(value) {
                        Object.defineProperty(this, "code", {
                            configurable: true,
                            enumerable: true,
                            value,
                            writable: true
                        });
                    }
                    toString() {
                        return `${this.name} [${sym}]: ${this.message}`;
                    }
                };
            }
            E("ERR_BUFFER_OUT_OF_BOUNDS", (function(name) {
                if (name) return `${name} is outside of buffer bounds`;
                return "Attempt to access memory outside buffer bounds";
            }), RangeError);
            E("ERR_INVALID_ARG_TYPE", (function(name, actual) {
                return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
            }), TypeError);
            E("ERR_OUT_OF_RANGE", (function(str, range, input) {
                let msg = `The value of "${str}" is out of range.`;
                let received = input;
                if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) received = addNumericalSeparator(String(input)); else if (typeof input === "bigint") {
                    received = String(input);
                    if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) received = addNumericalSeparator(received);
                    received += "n";
                }
                msg += ` It must be ${range}. Received ${received}`;
                return msg;
            }), RangeError);
            function addNumericalSeparator(val) {
                let res = "";
                let i = val.length;
                const start = val[0] === "-" ? 1 : 0;
                for (;i >= start + 4; i -= 3) res = `_${val.slice(i - 3, i)}${res}`;
                return `${val.slice(0, i)}${res}`;
            }
            function checkBounds(buf, offset, byteLength) {
                validateNumber(offset, "offset");
                if (buf[offset] === void 0 || buf[offset + byteLength] === void 0) boundsError(offset, buf.length - (byteLength + 1));
            }
            function checkIntBI(value, min, max, buf, offset, byteLength) {
                if (value > max || value < min) {
                    const n = typeof min === "bigint" ? "n" : "";
                    let range;
                    if (byteLength > 3) if (min === 0 || min === BigInt(0)) range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`; else range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength + 1) * 8 - 1}${n}`; else range = `>= ${min}${n} and <= ${max}${n}`;
                    throw new errors.ERR_OUT_OF_RANGE("value", range, value);
                }
                checkBounds(buf, offset, byteLength);
            }
            function validateNumber(value, name) {
                if (typeof value !== "number") throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
            }
            function boundsError(value, length, type) {
                if (Math.floor(value) !== value) {
                    validateNumber(value, type);
                    throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
                }
                if (length < 0) throw new errors.ERR_BUFFER_OUT_OF_BOUNDS;
                throw new errors.ERR_OUT_OF_RANGE(type || "offset", `>= ${type ? 1 : 0} and <= ${length}`, value);
            }
            const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
            function base64clean(str) {
                str = str.split("=")[0];
                str = str.trim().replace(INVALID_BASE64_RE, "");
                if (str.length < 2) return "";
                while (str.length % 4 !== 0) str += "=";
                return str;
            }
            function utf8ToBytes(string, units) {
                units = units || 1 / 0;
                let codePoint;
                const length = string.length;
                let leadSurrogate = null;
                const bytes = [];
                for (let i = 0; i < length; ++i) {
                    codePoint = string.charCodeAt(i);
                    if (codePoint > 55295 && codePoint < 57344) {
                        if (!leadSurrogate) {
                            if (codePoint > 56319) {
                                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                                continue;
                            } else if (i + 1 === length) {
                                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                                continue;
                            }
                            leadSurrogate = codePoint;
                            continue;
                        }
                        if (codePoint < 56320) {
                            if ((units -= 3) > -1) bytes.push(239, 191, 189);
                            leadSurrogate = codePoint;
                            continue;
                        }
                        codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
                    } else if (leadSurrogate) if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    leadSurrogate = null;
                    if (codePoint < 128) {
                        if ((units -= 1) < 0) break;
                        bytes.push(codePoint);
                    } else if (codePoint < 2048) {
                        if ((units -= 2) < 0) break;
                        bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
                    } else if (codePoint < 65536) {
                        if ((units -= 3) < 0) break;
                        bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
                    } else if (codePoint < 1114112) {
                        if ((units -= 4) < 0) break;
                        bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
                    } else throw new Error("Invalid code point");
                }
                return bytes;
            }
            function asciiToBytes(str) {
                const byteArray = [];
                for (let i = 0; i < str.length; ++i) byteArray.push(str.charCodeAt(i) & 255);
                return byteArray;
            }
            function utf16leToBytes(str, units) {
                let c, hi, lo;
                const byteArray = [];
                for (let i = 0; i < str.length; ++i) {
                    if ((units -= 2) < 0) break;
                    c = str.charCodeAt(i);
                    hi = c >> 8;
                    lo = c % 256;
                    byteArray.push(lo);
                    byteArray.push(hi);
                }
                return byteArray;
            }
            function base64ToBytes(str) {
                return base64.toByteArray(base64clean(str));
            }
            function blitBuffer(src, dst, offset, length) {
                let i;
                for (i = 0; i < length; ++i) {
                    if (i + offset >= dst.length || i >= src.length) break;
                    dst[i + offset] = src[i];
                }
                return i;
            }
            function isInstance(obj, type) {
                return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
            }
            function numberIsNaN(obj) {
                return obj !== obj;
            }
            const hexSliceLookupTable = function() {
                const alphabet = "0123456789abcdef";
                const table = new Array(256);
                for (let i = 0; i < 16; ++i) {
                    const i16 = i * 16;
                    for (let j = 0; j < 16; ++j) table[i16 + j] = alphabet[i] + alphabet[j];
                }
                return table;
            }();
            function defineBigIntMethod(fn) {
                return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
            }
            function BufferBigIntNotDefined() {
                throw new Error("BigInt not supported");
            }
        },
        526: (__unused_webpack_module, exports) => {
            "use strict";
            exports.byteLength = byteLength;
            exports.toByteArray = toByteArray;
            exports.fromByteArray = fromByteArray;
            var lookup = [];
            var revLookup = [];
            var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
            var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            for (var i = 0, len = code.length; i < len; ++i) {
                lookup[i] = code[i];
                revLookup[code.charCodeAt(i)] = i;
            }
            revLookup["-".charCodeAt(0)] = 62;
            revLookup["_".charCodeAt(0)] = 63;
            function getLens(b64) {
                var len = b64.length;
                if (len % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                var validLen = b64.indexOf("=");
                if (validLen === -1) validLen = len;
                var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
                return [ validLen, placeHoldersLen ];
            }
            function byteLength(b64) {
                var lens = getLens(b64);
                var validLen = lens[0];
                var placeHoldersLen = lens[1];
                return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
            }
            function _byteLength(b64, validLen, placeHoldersLen) {
                return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
            }
            function toByteArray(b64) {
                var tmp;
                var lens = getLens(b64);
                var validLen = lens[0];
                var placeHoldersLen = lens[1];
                var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
                var curByte = 0;
                var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
                var i;
                for (i = 0; i < len; i += 4) {
                    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
                    arr[curByte++] = tmp >> 16 & 255;
                    arr[curByte++] = tmp >> 8 & 255;
                    arr[curByte++] = tmp & 255;
                }
                if (placeHoldersLen === 2) {
                    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
                    arr[curByte++] = tmp & 255;
                }
                if (placeHoldersLen === 1) {
                    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
                    arr[curByte++] = tmp >> 8 & 255;
                    arr[curByte++] = tmp & 255;
                }
                return arr;
            }
            function tripletToBase64(num) {
                return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
            }
            function encodeChunk(uint8, start, end) {
                var tmp;
                var output = [];
                for (var i = start; i < end; i += 3) {
                    tmp = (uint8[i] << 16 & 16711680) + (uint8[i + 1] << 8 & 65280) + (uint8[i + 2] & 255);
                    output.push(tripletToBase64(tmp));
                }
                return output.join("");
            }
            function fromByteArray(uint8) {
                var tmp;
                var len = uint8.length;
                var extraBytes = len % 3;
                var parts = [];
                var maxChunkLength = 16383;
                for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
                if (extraBytes === 1) {
                    tmp = uint8[len - 1];
                    parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
                } else if (extraBytes === 2) {
                    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
                    parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=");
                }
                return parts.join("");
            }
        },
        184: (__unused_webpack_module, exports) => {
            "use strict";
            ({
                value: true
            });
            let converter;
            function toBigIntLE(buf) {
                {
                    const reversed = Buffer.from(buf);
                    reversed.reverse();
                    const hex = reversed.toString("hex");
                    if (hex.length === 0) return BigInt(0);
                    return BigInt(`0x${hex}`);
                }
                return converter.toBigInt(buf, false);
            }
            exports.k5 = toBigIntLE;
            function toBigIntBE(buf) {
                {
                    const hex = buf.toString("hex");
                    if (hex.length === 0) return BigInt(0);
                    return BigInt(`0x${hex}`);
                }
                return converter.toBigInt(buf, true);
            }
            toBigIntBE;
            function toBufferLE(num, width) {
                {
                    const hex = num.toString(16);
                    const buffer = Buffer.from(hex.padStart(width * 2, "0").slice(0, width * 2), "hex");
                    buffer.reverse();
                    return buffer;
                }
                return converter.fromBigInt(num, Buffer.allocUnsafe(width), false);
            }
            exports.Bq = toBufferLE;
            function toBufferBE(num, width) {
                {
                    const hex = num.toString(16);
                    return Buffer.from(hex.padStart(width * 2, "0").slice(0, width * 2), "hex");
                }
                return converter.fromBigInt(num, Buffer.allocUnsafe(width), true);
            }
            toBufferBE;
        },
        404: function(module, __unused_webpack_exports, __webpack_require__) {
            module = __webpack_require__.nmd(module);
            (function(module, exports) {
                "use strict";
                function assert(val, msg) {
                    if (!val) throw new Error(msg || "Assertion failed");
                }
                function inherits(ctor, superCtor) {
                    ctor.super_ = superCtor;
                    var TempCtor = function() {};
                    TempCtor.prototype = superCtor.prototype;
                    ctor.prototype = new TempCtor;
                    ctor.prototype.constructor = ctor;
                }
                function BN(number, base, endian) {
                    if (BN.isBN(number)) return number;
                    this.negative = 0;
                    this.words = null;
                    this.length = 0;
                    this.red = null;
                    if (number !== null) {
                        if (base === "le" || base === "be") {
                            endian = base;
                            base = 10;
                        }
                        this._init(number || 0, base || 10, endian || "be");
                    }
                }
                if (typeof module === "object") module.exports = BN; else exports.BN = BN;
                BN.BN = BN;
                BN.wordSize = 26;
                var Buffer;
                try {
                    if (typeof window !== "undefined" && typeof window.Buffer !== "undefined") Buffer = window.Buffer; else Buffer = __webpack_require__(790).Buffer;
                } catch (e) {}
                BN.isBN = function isBN(num) {
                    if (num instanceof BN) return true;
                    return num !== null && typeof num === "object" && num.constructor.wordSize === BN.wordSize && Array.isArray(num.words);
                };
                BN.max = function max(left, right) {
                    if (left.cmp(right) > 0) return left;
                    return right;
                };
                BN.min = function min(left, right) {
                    if (left.cmp(right) < 0) return left;
                    return right;
                };
                BN.prototype._init = function init(number, base, endian) {
                    if (typeof number === "number") return this._initNumber(number, base, endian);
                    if (typeof number === "object") return this._initArray(number, base, endian);
                    if (base === "hex") base = 16;
                    assert(base === (base | 0) && base >= 2 && base <= 36);
                    number = number.toString().replace(/\s+/g, "");
                    var start = 0;
                    if (number[0] === "-") {
                        start++;
                        this.negative = 1;
                    }
                    if (start < number.length) if (base === 16) this._parseHex(number, start, endian); else {
                        this._parseBase(number, base, start);
                        if (endian === "le") this._initArray(this.toArray(), base, endian);
                    }
                };
                BN.prototype._initNumber = function _initNumber(number, base, endian) {
                    if (number < 0) {
                        this.negative = 1;
                        number = -number;
                    }
                    if (number < 67108864) {
                        this.words = [ number & 67108863 ];
                        this.length = 1;
                    } else if (number < 4503599627370496) {
                        this.words = [ number & 67108863, number / 67108864 & 67108863 ];
                        this.length = 2;
                    } else {
                        assert(number < 9007199254740992);
                        this.words = [ number & 67108863, number / 67108864 & 67108863, 1 ];
                        this.length = 3;
                    }
                    if (endian !== "le") return;
                    this._initArray(this.toArray(), base, endian);
                };
                BN.prototype._initArray = function _initArray(number, base, endian) {
                    assert(typeof number.length === "number");
                    if (number.length <= 0) {
                        this.words = [ 0 ];
                        this.length = 1;
                        return this;
                    }
                    this.length = Math.ceil(number.length / 3);
                    this.words = new Array(this.length);
                    for (var i = 0; i < this.length; i++) this.words[i] = 0;
                    var j, w;
                    var off = 0;
                    if (endian === "be") for (i = number.length - 1, j = 0; i >= 0; i -= 3) {
                        w = number[i] | number[i - 1] << 8 | number[i - 2] << 16;
                        this.words[j] |= w << off & 67108863;
                        this.words[j + 1] = w >>> 26 - off & 67108863;
                        off += 24;
                        if (off >= 26) {
                            off -= 26;
                            j++;
                        }
                    } else if (endian === "le") for (i = 0, j = 0; i < number.length; i += 3) {
                        w = number[i] | number[i + 1] << 8 | number[i + 2] << 16;
                        this.words[j] |= w << off & 67108863;
                        this.words[j + 1] = w >>> 26 - off & 67108863;
                        off += 24;
                        if (off >= 26) {
                            off -= 26;
                            j++;
                        }
                    }
                    return this._strip();
                };
                function parseHex4Bits(string, index) {
                    var c = string.charCodeAt(index);
                    if (c >= 48 && c <= 57) return c - 48; else if (c >= 65 && c <= 70) return c - 55; else if (c >= 97 && c <= 102) return c - 87; else assert(false, "Invalid character in " + string);
                }
                function parseHexByte(string, lowerBound, index) {
                    var r = parseHex4Bits(string, index);
                    if (index - 1 >= lowerBound) r |= parseHex4Bits(string, index - 1) << 4;
                    return r;
                }
                BN.prototype._parseHex = function _parseHex(number, start, endian) {
                    this.length = Math.ceil((number.length - start) / 6);
                    this.words = new Array(this.length);
                    for (var i = 0; i < this.length; i++) this.words[i] = 0;
                    var off = 0;
                    var j = 0;
                    var w;
                    if (endian === "be") for (i = number.length - 1; i >= start; i -= 2) {
                        w = parseHexByte(number, start, i) << off;
                        this.words[j] |= w & 67108863;
                        if (off >= 18) {
                            off -= 18;
                            j += 1;
                            this.words[j] |= w >>> 26;
                        } else off += 8;
                    } else {
                        var parseLength = number.length - start;
                        for (i = parseLength % 2 === 0 ? start + 1 : start; i < number.length; i += 2) {
                            w = parseHexByte(number, start, i) << off;
                            this.words[j] |= w & 67108863;
                            if (off >= 18) {
                                off -= 18;
                                j += 1;
                                this.words[j] |= w >>> 26;
                            } else off += 8;
                        }
                    }
                    this._strip();
                };
                function parseBase(str, start, end, mul) {
                    var r = 0;
                    var b = 0;
                    var len = Math.min(str.length, end);
                    for (var i = start; i < len; i++) {
                        var c = str.charCodeAt(i) - 48;
                        r *= mul;
                        if (c >= 49) b = c - 49 + 10; else if (c >= 17) b = c - 17 + 10; else b = c;
                        assert(c >= 0 && b < mul, "Invalid character");
                        r += b;
                    }
                    return r;
                }
                BN.prototype._parseBase = function _parseBase(number, base, start) {
                    this.words = [ 0 ];
                    this.length = 1;
                    for (var limbLen = 0, limbPow = 1; limbPow <= 67108863; limbPow *= base) limbLen++;
                    limbLen--;
                    limbPow = limbPow / base | 0;
                    var total = number.length - start;
                    var mod = total % limbLen;
                    var end = Math.min(total, total - mod) + start;
                    var word = 0;
                    for (var i = start; i < end; i += limbLen) {
                        word = parseBase(number, i, i + limbLen, base);
                        this.imuln(limbPow);
                        if (this.words[0] + word < 67108864) this.words[0] += word; else this._iaddn(word);
                    }
                    if (mod !== 0) {
                        var pow = 1;
                        word = parseBase(number, i, number.length, base);
                        for (i = 0; i < mod; i++) pow *= base;
                        this.imuln(pow);
                        if (this.words[0] + word < 67108864) this.words[0] += word; else this._iaddn(word);
                    }
                    this._strip();
                };
                BN.prototype.copy = function copy(dest) {
                    dest.words = new Array(this.length);
                    for (var i = 0; i < this.length; i++) dest.words[i] = this.words[i];
                    dest.length = this.length;
                    dest.negative = this.negative;
                    dest.red = this.red;
                };
                function move(dest, src) {
                    dest.words = src.words;
                    dest.length = src.length;
                    dest.negative = src.negative;
                    dest.red = src.red;
                }
                BN.prototype._move = function _move(dest) {
                    move(dest, this);
                };
                BN.prototype.clone = function clone() {
                    var r = new BN(null);
                    this.copy(r);
                    return r;
                };
                BN.prototype._expand = function _expand(size) {
                    while (this.length < size) this.words[this.length++] = 0;
                    return this;
                };
                BN.prototype._strip = function strip() {
                    while (this.length > 1 && this.words[this.length - 1] === 0) this.length--;
                    return this._normSign();
                };
                BN.prototype._normSign = function _normSign() {
                    if (this.length === 1 && this.words[0] === 0) this.negative = 0;
                    return this;
                };
                if (typeof Symbol !== "undefined" && typeof Symbol.for === "function") try {
                    BN.prototype[Symbol.for("nodejs.util.inspect.custom")] = inspect;
                } catch (e) {
                    BN.prototype.inspect = inspect;
                } else BN.prototype.inspect = inspect;
                function inspect() {
                    return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
                }
                var zeros = [ "", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000" ];
                var groupSizes = [ 0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 ];
                var groupBases = [ 0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176 ];
                BN.prototype.toString = function toString(base, padding) {
                    base = base || 10;
                    padding = padding | 0 || 1;
                    var out;
                    if (base === 16 || base === "hex") {
                        out = "";
                        var off = 0;
                        var carry = 0;
                        for (var i = 0; i < this.length; i++) {
                            var w = this.words[i];
                            var word = ((w << off | carry) & 16777215).toString(16);
                            carry = w >>> 24 - off & 16777215;
                            off += 2;
                            if (off >= 26) {
                                off -= 26;
                                i--;
                            }
                            if (carry !== 0 || i !== this.length - 1) out = zeros[6 - word.length] + word + out; else out = word + out;
                        }
                        if (carry !== 0) out = carry.toString(16) + out;
                        while (out.length % padding !== 0) out = "0" + out;
                        if (this.negative !== 0) out = "-" + out;
                        return out;
                    }
                    if (base === (base | 0) && base >= 2 && base <= 36) {
                        var groupSize = groupSizes[base];
                        var groupBase = groupBases[base];
                        out = "";
                        var c = this.clone();
                        c.negative = 0;
                        while (!c.isZero()) {
                            var r = c.modrn(groupBase).toString(base);
                            c = c.idivn(groupBase);
                            if (!c.isZero()) out = zeros[groupSize - r.length] + r + out; else out = r + out;
                        }
                        if (this.isZero()) out = "0" + out;
                        while (out.length % padding !== 0) out = "0" + out;
                        if (this.negative !== 0) out = "-" + out;
                        return out;
                    }
                    assert(false, "Base should be between 2 and 36");
                };
                BN.prototype.toNumber = function toNumber() {
                    var ret = this.words[0];
                    if (this.length === 2) ret += this.words[1] * 67108864; else if (this.length === 3 && this.words[2] === 1) ret += 4503599627370496 + this.words[1] * 67108864; else if (this.length > 2) assert(false, "Number can only safely store up to 53 bits");
                    return this.negative !== 0 ? -ret : ret;
                };
                BN.prototype.toJSON = function toJSON() {
                    return this.toString(16, 2);
                };
                if (Buffer) BN.prototype.toBuffer = function toBuffer(endian, length) {
                    return this.toArrayLike(Buffer, endian, length);
                };
                BN.prototype.toArray = function toArray(endian, length) {
                    return this.toArrayLike(Array, endian, length);
                };
                var allocate = function allocate(ArrayType, size) {
                    if (ArrayType.allocUnsafe) return ArrayType.allocUnsafe(size);
                    return new ArrayType(size);
                };
                BN.prototype.toArrayLike = function toArrayLike(ArrayType, endian, length) {
                    this._strip();
                    var byteLength = this.byteLength();
                    var reqLength = length || Math.max(1, byteLength);
                    assert(byteLength <= reqLength, "byte array longer than desired length");
                    assert(reqLength > 0, "Requested array length <= 0");
                    var res = allocate(ArrayType, reqLength);
                    var postfix = endian === "le" ? "LE" : "BE";
                    this["_toArrayLike" + postfix](res, byteLength);
                    return res;
                };
                BN.prototype._toArrayLikeLE = function _toArrayLikeLE(res, byteLength) {
                    var position = 0;
                    var carry = 0;
                    for (var i = 0, shift = 0; i < this.length; i++) {
                        var word = this.words[i] << shift | carry;
                        res[position++] = word & 255;
                        if (position < res.length) res[position++] = word >> 8 & 255;
                        if (position < res.length) res[position++] = word >> 16 & 255;
                        if (shift === 6) {
                            if (position < res.length) res[position++] = word >> 24 & 255;
                            carry = 0;
                            shift = 0;
                        } else {
                            carry = word >>> 24;
                            shift += 2;
                        }
                    }
                    if (position < res.length) {
                        res[position++] = carry;
                        while (position < res.length) res[position++] = 0;
                    }
                };
                BN.prototype._toArrayLikeBE = function _toArrayLikeBE(res, byteLength) {
                    var position = res.length - 1;
                    var carry = 0;
                    for (var i = 0, shift = 0; i < this.length; i++) {
                        var word = this.words[i] << shift | carry;
                        res[position--] = word & 255;
                        if (position >= 0) res[position--] = word >> 8 & 255;
                        if (position >= 0) res[position--] = word >> 16 & 255;
                        if (shift === 6) {
                            if (position >= 0) res[position--] = word >> 24 & 255;
                            carry = 0;
                            shift = 0;
                        } else {
                            carry = word >>> 24;
                            shift += 2;
                        }
                    }
                    if (position >= 0) {
                        res[position--] = carry;
                        while (position >= 0) res[position--] = 0;
                    }
                };
                if (Math.clz32) BN.prototype._countBits = function _countBits(w) {
                    return 32 - Math.clz32(w);
                }; else BN.prototype._countBits = function _countBits(w) {
                    var t = w;
                    var r = 0;
                    if (t >= 4096) {
                        r += 13;
                        t >>>= 13;
                    }
                    if (t >= 64) {
                        r += 7;
                        t >>>= 7;
                    }
                    if (t >= 8) {
                        r += 4;
                        t >>>= 4;
                    }
                    if (t >= 2) {
                        r += 2;
                        t >>>= 2;
                    }
                    return r + t;
                };
                BN.prototype._zeroBits = function _zeroBits(w) {
                    if (w === 0) return 26;
                    var t = w;
                    var r = 0;
                    if ((t & 8191) === 0) {
                        r += 13;
                        t >>>= 13;
                    }
                    if ((t & 127) === 0) {
                        r += 7;
                        t >>>= 7;
                    }
                    if ((t & 15) === 0) {
                        r += 4;
                        t >>>= 4;
                    }
                    if ((t & 3) === 0) {
                        r += 2;
                        t >>>= 2;
                    }
                    if ((t & 1) === 0) r++;
                    return r;
                };
                BN.prototype.bitLength = function bitLength() {
                    var w = this.words[this.length - 1];
                    var hi = this._countBits(w);
                    return (this.length - 1) * 26 + hi;
                };
                function toBitArray(num) {
                    var w = new Array(num.bitLength());
                    for (var bit = 0; bit < w.length; bit++) {
                        var off = bit / 26 | 0;
                        var wbit = bit % 26;
                        w[bit] = num.words[off] >>> wbit & 1;
                    }
                    return w;
                }
                BN.prototype.zeroBits = function zeroBits() {
                    if (this.isZero()) return 0;
                    var r = 0;
                    for (var i = 0; i < this.length; i++) {
                        var b = this._zeroBits(this.words[i]);
                        r += b;
                        if (b !== 26) break;
                    }
                    return r;
                };
                BN.prototype.byteLength = function byteLength() {
                    return Math.ceil(this.bitLength() / 8);
                };
                BN.prototype.toTwos = function toTwos(width) {
                    if (this.negative !== 0) return this.abs().inotn(width).iaddn(1);
                    return this.clone();
                };
                BN.prototype.fromTwos = function fromTwos(width) {
                    if (this.testn(width - 1)) return this.notn(width).iaddn(1).ineg();
                    return this.clone();
                };
                BN.prototype.isNeg = function isNeg() {
                    return this.negative !== 0;
                };
                BN.prototype.neg = function neg() {
                    return this.clone().ineg();
                };
                BN.prototype.ineg = function ineg() {
                    if (!this.isZero()) this.negative ^= 1;
                    return this;
                };
                BN.prototype.iuor = function iuor(num) {
                    while (this.length < num.length) this.words[this.length++] = 0;
                    for (var i = 0; i < num.length; i++) this.words[i] = this.words[i] | num.words[i];
                    return this._strip();
                };
                BN.prototype.ior = function ior(num) {
                    assert((this.negative | num.negative) === 0);
                    return this.iuor(num);
                };
                BN.prototype.or = function or(num) {
                    if (this.length > num.length) return this.clone().ior(num);
                    return num.clone().ior(this);
                };
                BN.prototype.uor = function uor(num) {
                    if (this.length > num.length) return this.clone().iuor(num);
                    return num.clone().iuor(this);
                };
                BN.prototype.iuand = function iuand(num) {
                    var b;
                    if (this.length > num.length) b = num; else b = this;
                    for (var i = 0; i < b.length; i++) this.words[i] = this.words[i] & num.words[i];
                    this.length = b.length;
                    return this._strip();
                };
                BN.prototype.iand = function iand(num) {
                    assert((this.negative | num.negative) === 0);
                    return this.iuand(num);
                };
                BN.prototype.and = function and(num) {
                    if (this.length > num.length) return this.clone().iand(num);
                    return num.clone().iand(this);
                };
                BN.prototype.uand = function uand(num) {
                    if (this.length > num.length) return this.clone().iuand(num);
                    return num.clone().iuand(this);
                };
                BN.prototype.iuxor = function iuxor(num) {
                    var a;
                    var b;
                    if (this.length > num.length) {
                        a = this;
                        b = num;
                    } else {
                        a = num;
                        b = this;
                    }
                    for (var i = 0; i < b.length; i++) this.words[i] = a.words[i] ^ b.words[i];
                    if (this !== a) for (;i < a.length; i++) this.words[i] = a.words[i];
                    this.length = a.length;
                    return this._strip();
                };
                BN.prototype.ixor = function ixor(num) {
                    assert((this.negative | num.negative) === 0);
                    return this.iuxor(num);
                };
                BN.prototype.xor = function xor(num) {
                    if (this.length > num.length) return this.clone().ixor(num);
                    return num.clone().ixor(this);
                };
                BN.prototype.uxor = function uxor(num) {
                    if (this.length > num.length) return this.clone().iuxor(num);
                    return num.clone().iuxor(this);
                };
                BN.prototype.inotn = function inotn(width) {
                    assert(typeof width === "number" && width >= 0);
                    var bytesNeeded = Math.ceil(width / 26) | 0;
                    var bitsLeft = width % 26;
                    this._expand(bytesNeeded);
                    if (bitsLeft > 0) bytesNeeded--;
                    for (var i = 0; i < bytesNeeded; i++) this.words[i] = ~this.words[i] & 67108863;
                    if (bitsLeft > 0) this.words[i] = ~this.words[i] & 67108863 >> 26 - bitsLeft;
                    return this._strip();
                };
                BN.prototype.notn = function notn(width) {
                    return this.clone().inotn(width);
                };
                BN.prototype.setn = function setn(bit, val) {
                    assert(typeof bit === "number" && bit >= 0);
                    var off = bit / 26 | 0;
                    var wbit = bit % 26;
                    this._expand(off + 1);
                    if (val) this.words[off] = this.words[off] | 1 << wbit; else this.words[off] = this.words[off] & ~(1 << wbit);
                    return this._strip();
                };
                BN.prototype.iadd = function iadd(num) {
                    var r;
                    if (this.negative !== 0 && num.negative === 0) {
                        this.negative = 0;
                        r = this.isub(num);
                        this.negative ^= 1;
                        return this._normSign();
                    } else if (this.negative === 0 && num.negative !== 0) {
                        num.negative = 0;
                        r = this.isub(num);
                        num.negative = 1;
                        return r._normSign();
                    }
                    var a, b;
                    if (this.length > num.length) {
                        a = this;
                        b = num;
                    } else {
                        a = num;
                        b = this;
                    }
                    var carry = 0;
                    for (var i = 0; i < b.length; i++) {
                        r = (a.words[i] | 0) + (b.words[i] | 0) + carry;
                        this.words[i] = r & 67108863;
                        carry = r >>> 26;
                    }
                    for (;carry !== 0 && i < a.length; i++) {
                        r = (a.words[i] | 0) + carry;
                        this.words[i] = r & 67108863;
                        carry = r >>> 26;
                    }
                    this.length = a.length;
                    if (carry !== 0) {
                        this.words[this.length] = carry;
                        this.length++;
                    } else if (a !== this) for (;i < a.length; i++) this.words[i] = a.words[i];
                    return this;
                };
                BN.prototype.add = function add(num) {
                    var res;
                    if (num.negative !== 0 && this.negative === 0) {
                        num.negative = 0;
                        res = this.sub(num);
                        num.negative ^= 1;
                        return res;
                    } else if (num.negative === 0 && this.negative !== 0) {
                        this.negative = 0;
                        res = num.sub(this);
                        this.negative = 1;
                        return res;
                    }
                    if (this.length > num.length) return this.clone().iadd(num);
                    return num.clone().iadd(this);
                };
                BN.prototype.isub = function isub(num) {
                    if (num.negative !== 0) {
                        num.negative = 0;
                        var r = this.iadd(num);
                        num.negative = 1;
                        return r._normSign();
                    } else if (this.negative !== 0) {
                        this.negative = 0;
                        this.iadd(num);
                        this.negative = 1;
                        return this._normSign();
                    }
                    var cmp = this.cmp(num);
                    if (cmp === 0) {
                        this.negative = 0;
                        this.length = 1;
                        this.words[0] = 0;
                        return this;
                    }
                    var a, b;
                    if (cmp > 0) {
                        a = this;
                        b = num;
                    } else {
                        a = num;
                        b = this;
                    }
                    var carry = 0;
                    for (var i = 0; i < b.length; i++) {
                        r = (a.words[i] | 0) - (b.words[i] | 0) + carry;
                        carry = r >> 26;
                        this.words[i] = r & 67108863;
                    }
                    for (;carry !== 0 && i < a.length; i++) {
                        r = (a.words[i] | 0) + carry;
                        carry = r >> 26;
                        this.words[i] = r & 67108863;
                    }
                    if (carry === 0 && i < a.length && a !== this) for (;i < a.length; i++) this.words[i] = a.words[i];
                    this.length = Math.max(this.length, i);
                    if (a !== this) this.negative = 1;
                    return this._strip();
                };
                BN.prototype.sub = function sub(num) {
                    return this.clone().isub(num);
                };
                function smallMulTo(self, num, out) {
                    out.negative = num.negative ^ self.negative;
                    var len = self.length + num.length | 0;
                    out.length = len;
                    len = len - 1 | 0;
                    var a = self.words[0] | 0;
                    var b = num.words[0] | 0;
                    var r = a * b;
                    var lo = r & 67108863;
                    var carry = r / 67108864 | 0;
                    out.words[0] = lo;
                    for (var k = 1; k < len; k++) {
                        var ncarry = carry >>> 26;
                        var rword = carry & 67108863;
                        var maxJ = Math.min(k, num.length - 1);
                        for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
                            var i = k - j | 0;
                            a = self.words[i] | 0;
                            b = num.words[j] | 0;
                            r = a * b + rword;
                            ncarry += r / 67108864 | 0;
                            rword = r & 67108863;
                        }
                        out.words[k] = rword | 0;
                        carry = ncarry | 0;
                    }
                    if (carry !== 0) out.words[k] = carry | 0; else out.length--;
                    return out._strip();
                }
                var comb10MulTo = function comb10MulTo(self, num, out) {
                    var a = self.words;
                    var b = num.words;
                    var o = out.words;
                    var c = 0;
                    var lo;
                    var mid;
                    var hi;
                    var a0 = a[0] | 0;
                    var al0 = a0 & 8191;
                    var ah0 = a0 >>> 13;
                    var a1 = a[1] | 0;
                    var al1 = a1 & 8191;
                    var ah1 = a1 >>> 13;
                    var a2 = a[2] | 0;
                    var al2 = a2 & 8191;
                    var ah2 = a2 >>> 13;
                    var a3 = a[3] | 0;
                    var al3 = a3 & 8191;
                    var ah3 = a3 >>> 13;
                    var a4 = a[4] | 0;
                    var al4 = a4 & 8191;
                    var ah4 = a4 >>> 13;
                    var a5 = a[5] | 0;
                    var al5 = a5 & 8191;
                    var ah5 = a5 >>> 13;
                    var a6 = a[6] | 0;
                    var al6 = a6 & 8191;
                    var ah6 = a6 >>> 13;
                    var a7 = a[7] | 0;
                    var al7 = a7 & 8191;
                    var ah7 = a7 >>> 13;
                    var a8 = a[8] | 0;
                    var al8 = a8 & 8191;
                    var ah8 = a8 >>> 13;
                    var a9 = a[9] | 0;
                    var al9 = a9 & 8191;
                    var ah9 = a9 >>> 13;
                    var b0 = b[0] | 0;
                    var bl0 = b0 & 8191;
                    var bh0 = b0 >>> 13;
                    var b1 = b[1] | 0;
                    var bl1 = b1 & 8191;
                    var bh1 = b1 >>> 13;
                    var b2 = b[2] | 0;
                    var bl2 = b2 & 8191;
                    var bh2 = b2 >>> 13;
                    var b3 = b[3] | 0;
                    var bl3 = b3 & 8191;
                    var bh3 = b3 >>> 13;
                    var b4 = b[4] | 0;
                    var bl4 = b4 & 8191;
                    var bh4 = b4 >>> 13;
                    var b5 = b[5] | 0;
                    var bl5 = b5 & 8191;
                    var bh5 = b5 >>> 13;
                    var b6 = b[6] | 0;
                    var bl6 = b6 & 8191;
                    var bh6 = b6 >>> 13;
                    var b7 = b[7] | 0;
                    var bl7 = b7 & 8191;
                    var bh7 = b7 >>> 13;
                    var b8 = b[8] | 0;
                    var bl8 = b8 & 8191;
                    var bh8 = b8 >>> 13;
                    var b9 = b[9] | 0;
                    var bl9 = b9 & 8191;
                    var bh9 = b9 >>> 13;
                    out.negative = self.negative ^ num.negative;
                    out.length = 19;
                    lo = Math.imul(al0, bl0);
                    mid = Math.imul(al0, bh0);
                    mid = mid + Math.imul(ah0, bl0) | 0;
                    hi = Math.imul(ah0, bh0);
                    var w0 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
                    c = (hi + (mid >>> 13) | 0) + (w0 >>> 26) | 0;
                    w0 &= 67108863;
                    lo = Math.imul(al1, bl0);
                    mid = Math.imul(al1, bh0);
                    mid = mid + Math.imul(ah1, bl0) | 0;
                    hi = Math.imul(ah1, bh0);
                    lo = lo + Math.imul(al0, bl1) | 0;
                    mid = mid + Math.imul(al0, bh1) | 0;
                    mid = mid + Math.imul(ah0, bl1) | 0;
                    hi = hi + Math.imul(ah0, bh1) | 0;
                    var w1 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
                    c = (hi + (mid >>> 13) | 0) + (w1 >>> 26) | 0;
                    w1 &= 67108863;
                    lo = Math.imul(al2, bl0);
                    mid = Math.imul(al2, bh0);
                    mid = mid + Math.imul(ah2, bl0) | 0;
                    hi = Math.imul(ah2, bh0);
                    lo = lo + Math.imul(al1, bl1) | 0;
                    mid = mid + Math.imul(al1, bh1) | 0;
                    mid = mid + Math.imul(ah1, bl1) | 0;
                    hi = hi + Math.imul(ah1, bh1) | 0;
                    lo = lo + Math.imul(al0, bl2) | 0;
                    mid = mid + Math.imul(al0, bh2) | 0;
                    mid = mid + Math.imul(ah0, bl2) | 0;
                    hi = hi + Math.imul(ah0, bh2) | 0;
                    var w2 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
                    c = (hi + (mid >>> 13) | 0) + (w2 >>> 26) | 0;
                    w2 &= 67108863;
                    lo = Math.imul(al3, bl0);
                    mid = Math.imul(al3, bh0);
                    mid = mid + Math.imul(ah3, bl0) | 0;
                    hi = Math.imul(ah3, bh0);
                    lo = lo + Math.imul(al2, bl1) | 0;
                    mid = mid + Math.imul(al2, bh1) | 0;
                    mid = mid + Math.imul(ah2, bl1) | 0;
                    hi = hi + Math.imul(ah2, bh1) | 0;
                    lo = lo + Math.imul(al1, bl2) | 0;
                    mid = mid + Math.imul(al1, bh2) | 0;
                    mid = mid + Math.imul(ah1, bl2) | 0;
                    hi = hi + Math.imul(ah1, bh2) | 0;
                    lo = lo + Math.imul(al0, bl3) | 0;
                    mid = mid + Math.imul(al0, bh3) | 0;
                    mid = mid + Math.imul(ah0, bl3) | 0;
                    hi = hi + Math.imul(ah0, bh3) | 0;
                    var w3 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
                    c = (hi + (mid >>> 13) | 0) + (w3 >>> 26) | 0;
                    w3 &= 67108863;
                    lo = Math.imul(al4, bl0);
                    mid = Math.imul(al4, bh0);
                    mid = mid + Math.imul(ah4, bl0) | 0;
                    hi = Math.imul(ah4, bh0);
                    lo = lo + Math.imul(al3, bl1) | 0;
                    mid = mid + Math.imul(al3, bh1) | 0;
                    mid = mid + Math.imul(ah3, bl1) | 0;
                    hi = hi + Math.imul(ah3, bh1) | 0;
                    lo = lo + Math.imul(al2, bl2) | 0;
                    mid = mid + Math.imul(al2, bh2) | 0;
                    mid = mid + Math.imul(ah2, bl2) | 0;
                    hi = hi + Math.imul(ah2, bh2) | 0;
                    lo = lo + Math.imul(al1, bl3) | 0;
                    mid = mid + Math.imul(al1, bh3) | 0;
                    mid = mid + Math.imul(ah1, bl3) | 0;
                    hi = hi + Math.imul(ah1, bh3) | 0;
                    lo = lo + Math.imul(al0, bl4) | 0;
                    mid = mid + Math.imul(al0, bh4) | 0;
                    mid = mid + Math.imul(ah0, bl4) | 0;
                    hi = hi + Math.imul(ah0, bh4) | 0;
                    var w4 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
                    c = (hi + (mid >>> 13) | 0) + (w4 >>> 26) | 0;
                    w4 &= 67108863;
                    lo = Math.imul(al5, bl0);
                    mid = Math.imul(al5, bh0);
                    mid = mid + Math.imul(ah5, bl0) | 0;
                    hi = Math.imul(ah5, bh0);
                    lo = lo + Math.imul(al4, bl1) | 0;
                    mid = mid + Math.imul(al4, bh1) | 0;
                    mid = mid + Math.imul(ah4, bl1) | 0;
                    hi = hi + Math.imul(ah4, bh1) | 0;
                    lo = lo + Math.imul(al3, bl2) | 0;
                    mid = mid + Math.imul(al3, bh2) | 0;
                    mid = mid + Math.imul(ah3, bl2) | 0;
                    hi = hi + Math.imul(ah3, bh2) | 0;
                    lo = lo + Math.imul(al2, bl3) | 0;
                    mid = mid + Math.imul(al2, bh3) | 0;
                    mid = mid + Math.imul(ah2, bl3) | 0;
                    hi = hi + Math.imul(ah2, bh3) | 0;
                    lo = lo + Math.imul(al1, bl4) | 0;
                    mid = mid + Math.imul(al1, bh4) | 0;
                    mid = mid + Math.imul(ah1, bl4) | 0;
                    hi = hi + Math.imul(ah1, bh4) | 0;
                    lo = lo + Math.imul(al0, bl5) | 0;
                    mid = mid + Math.imul(al0, bh5) | 0;
                    mid = mid + Math.imul(ah0, bl5) | 0;
                    hi = hi + Math.imul(ah0, bh5) | 0;
                    var w5 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
                    c = (hi + (mid >>> 13) | 0) + (w5 >>> 26) | 0;
                    w5 &= 67108863;
                    lo = Math.imul(al6, bl0);
                    mid = Math.imul(al6, bh0);
                    mid = mid + Math.imul(ah6, bl0) | 0;
                    hi = Math.imul(ah6, bh0);
                    lo = lo + Math.imul(al5, bl1) | 0;
                    mid = mid + Math.imul(al5, bh1) | 0;
                    mid = mid + Math.imul(ah5, bl1) | 0;
                    hi = hi + Math.imul(ah5, bh1) | 0;
                    lo = lo + Math.imul(al4, bl2) | 0;
                    mid = mid + Math.imul(al4, bh2) | 0;
                    mid = mid + Math.imul(ah4, bl2) | 0;
                    hi = hi + Math.imul(ah4, bh2) | 0;
                    lo = lo + Math.imul(al3, bl3) | 0;
                    mid = mid + Math.imul(al3, bh3) | 0;
                    mid = mid + Math.imul(ah3, bl3) | 0;
                    hi = hi + Math.imul(ah3, bh3) | 0;
                    lo = lo + Math.imul(al2, bl4) | 0;
                    mid = mid + Math.imul(al2, bh4) | 0;
                    mid = mid + Math.imul(ah2, bl4) | 0;
                    hi = hi + Math.imul(ah2, bh4) | 0;
                    lo = lo + Math.imul(al1, bl5) | 0;
                    mid = mid + Math.imul(al1, bh5) | 0;
                    mid = mid + Math.imul(ah1, bl5) | 0;
                    hi = hi + Math.imul(ah1, bh5) | 0;
                    lo = lo + Math.imul(al0, bl6) | 0;
                    mid = mid + Math.imul(al0, bh6) | 0;
                    mid = mid + Math.imul(ah0, bl6) | 0;
                    hi = hi + Math.imul(ah0, bh6) | 0;
                    var w6 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
                    c = (hi + (mid >>> 13) | 0) + (w6 >>> 26) | 0;
                    w6 &= 67108863;
                    lo = Math.imul(al7, bl0);
                    mid = Math.imul(al7, bh0);
                    mid = mid + Math.imul(ah7, bl0) | 0;
                    hi = Math.imul(ah7, bh0);
                    lo = lo + Math.imul(al6, bl1) | 0;
                    mid = mid + Math.imul(al6, bh1) | 0;
                    mid = mid + Math.imul(ah6, bl1) | 0;
                    hi = hi + Math.imul(ah6, bh1) | 0;
                    lo = lo + Math.imul(al5, bl2) | 0;
                    mid = mid + Math.imul(al5, bh2) | 0;
                    mid = mid + Math.imul(ah5, bl2) | 0;
                    hi = hi + Math.imul(ah5, bh2) | 0;
                    lo = lo + Math.imul(al4, bl3) | 0;
                    mid = mid + Math.imul(al4, bh3) | 0;
                    mid = mid + Math.imul(ah4, bl3) | 0;
                    hi = hi + Math.imul(ah4, bh3) | 0;
                    lo = lo + Math.imul(al3, bl4) | 0;
                    mid = mid + Math.imul(al3, bh4) | 0;
                    mid = mid + Math.imul(ah3, bl4) | 0;
                    hi = hi + Math.imul(ah3, bh4) | 0;
                    lo = lo + Math.imul(al2, bl5) | 0;
                    mid = mid + Math.imul(al2, bh5) | 0;
                    mid = mid + Math.imul(ah2, bl5) | 0;
                    hi = hi + Math.imul(ah2, bh5) | 0;
                    lo = lo + Math.imul(al1, bl6) | 0;
                    mid = mid + Math.imul(al1, bh6) | 0;
                    mid = mid + Math.imul(ah1, bl6) | 0;
                    hi = hi + Math.imul(ah1, bh6) | 0;
                    lo = lo + Math.imul(al0, bl7) | 0;
                    mid = mid + Math.imul(al0, bh7) | 0;
                    mid = mid + Math.imul(ah0, bl7) | 0;
                    hi = hi + Math.imul(ah0, bh7) | 0;
                    var w7 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
                    c = (hi + (mid >>> 13) | 0) + (w7 >>> 26) | 0;
                    w7 &= 67108863;
                    lo = Math.imul(al8, bl0);
                    mid = Math.imul(al8, bh0);
                    mid = mid + Math.imul(ah8, bl0) | 0;
                    hi = Math.imul(ah8, bh0);
                    lo = lo + Math.imul(al7, bl1) | 0;
                    mid = mid + Math.imul(al7, bh1) | 0;
                    mid = mid + Math.imul(ah7, bl1) | 0;
                    hi = hi + Math.imul(ah7, bh1) | 0;
                    lo = lo + Math.imul(al6, bl2) | 0;
                    mid = mid + Math.imul(al6, bh2) | 0;
                    mid = mid + Math.imul(ah6, bl2) | 0;
                    hi = hi + Math.imul(ah6, bh2) | 0;
                    lo = lo + Math.imul(al5, bl3) | 0;
                    mid = mid + Math.imul(al5, bh3) | 0;
                    mid = mid + Math.imul(ah5, bl3) | 0;
                    hi = hi + Math.imul(ah5, bh3) | 0;
                    lo = lo + Math.imul(al4, bl4) | 0;
                    mid = mid + Math.imul(al4, bh4) | 0;
                    mid = mid + Math.imul(ah4, bl4) | 0;
                    hi = hi + Math.imul(ah4, bh4) | 0;
                    lo = lo + Math.imul(al3, bl5) | 0;
                    mid = mid + Math.imul(al3, bh5) | 0;
                    mid = mid + Math.imul(ah3, bl5) | 0;
                    hi = hi + Math.imul(ah3, bh5) | 0;
                    lo = lo + Math.imul(al2, bl6) | 0;
                    mid = mid + Math.imul(al2, bh6) | 0;
                    mid = mid + Math.imul(ah2, bl6) | 0;
                    hi = hi + Math.imul(ah2, bh6) | 0;
                    lo = lo + Math.imul(al1, bl7) | 0;
                    mid = mid + Math.imul(al1, bh7) | 0;
                    mid = mid + Math.imul(ah1, bl7) | 0;
                    hi = hi + Math.imul(ah1, bh7) | 0;
                    lo = lo + Math.imul(al0, bl8) | 0;
                    mid = mid + Math.imul(al0, bh8) | 0;
                    mid = mid + Math.imul(ah0, bl8) | 0;
                    hi = hi + Math.imul(ah0, bh8) | 0;
                    var w8 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
                    c = (hi + (mid >>> 13) | 0) + (w8 >>> 26) | 0;
                    w8 &= 67108863;
                    lo = Math.imul(al9, bl0);
                    mid = Math.imul(al9, bh0);
                    mid = mid + Math.imul(ah9, bl0) | 0;
                    hi = Math.imul(ah9, bh0);
                    lo = lo + Math.imul(al8, bl1) | 0;
                    mid = mid + Math.imul(al8, bh1) | 0;
                    mid = mid + Math.imul(ah8, bl1) | 0;
                    hi = hi + Math.imul(ah8, bh1) | 0;
                    lo = lo + Math.imul(al7, bl2) | 0;
                    mid = mid + Math.imul(al7, bh2) | 0;
                    mid = mid + Math.imul(ah7, bl2) | 0;
                    hi = hi + Math.imul(ah7, bh2) | 0;
                    lo = lo + Math.imul(al6, bl3) | 0;
                    mid = mid + Math.imul(al6, bh3) | 0;
                    mid = mid + Math.imul(ah6, bl3) | 0;
                    hi = hi + Math.imul(ah6, bh3) | 0;
                    lo = lo + Math.imul(al5, bl4) | 0;
                    mid = mid + Math.imul(al5, bh4) | 0;
                    mid = mid + Math.imul(ah5, bl4) | 0;
                    hi = hi + Math.imul(ah5, bh4) | 0;
                    lo = lo + Math.imul(al4, bl5) | 0;
                    mid = mid + Math.imul(al4, bh5) | 0;
                    mid = mid + Math.imul(ah4, bl5) | 0;
                    hi = hi + Math.imul(ah4, bh5) | 0;
                    lo = lo + Math.imul(al3, bl6) | 0;
                    mid = mid + Math.imul(al3, bh6) | 0;
                    mid = mid + Math.imul(ah3, bl6) | 0;
                    hi = hi + Math.imul(ah3, bh6) | 0;
                    lo = lo + Math.imul(al2, bl7) | 0;
                    mid = mid + Math.imul(al2, bh7) | 0;
                    mid = mid + Math.imul(ah2, bl7) | 0;
                    hi = hi + Math.imul(ah2, bh7) | 0;
                    lo = lo + Math.imul(al1, bl8) | 0;
                    mid = mid + Math.imul(al1, bh8) | 0;
                    mid = mid + Math.imul(ah1, bl8) | 0;
                    hi = hi + Math.imul(ah1, bh8) | 0;
                    lo = lo + Math.imul(al0, bl9) | 0;
                    mid = mid + Math.imul(al0, bh9) | 0;
                    mid = mid + Math.imul(ah0, bl9) | 0;
                    hi = hi + Math.imul(ah0, bh9) | 0;
                    var w9 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
                    c = (hi + (mid >>> 13) | 0) + (w9 >>> 26) | 0;
                    w9 &= 67108863;
                    lo = Math.imul(al9, bl1);
                    mid = Math.imul(al9, bh1);
                    mid = mid + Math.imul(ah9, bl1) | 0;
                    hi = Math.imul(ah9, bh1);
                    lo = lo + Math.imul(al8, bl2) | 0;
                    mid = mid + Math.imul(al8, bh2) | 0;
                    mid = mid + Math.imul(ah8, bl2) | 0;
                    hi = hi + Math.imul(ah8, bh2) | 0;
                    lo = lo + Math.imul(al7, bl3) | 0;
                    mid = mid + Math.imul(al7, bh3) | 0;
                    mid = mid + Math.imul(ah7, bl3) | 0;
                    hi = hi + Math.imul(ah7, bh3) | 0;
                    lo = lo + Math.imul(al6, bl4) | 0;
                    mid = mid + Math.imul(al6, bh4) | 0;
                    mid = mid + Math.imul(ah6, bl4) | 0;
                    hi = hi + Math.imul(ah6, bh4) | 0;
                    lo = lo + Math.imul(al5, bl5) | 0;
                    mid = mid + Math.imul(al5, bh5) | 0;
                    mid = mid + Math.imul(ah5, bl5) | 0;
                    hi = hi + Math.imul(ah5, bh5) | 0;
                    lo = lo + Math.imul(al4, bl6) | 0;
                    mid = mid + Math.imul(al4, bh6) | 0;
                    mid = mid + Math.imul(ah4, bl6) | 0;
                    hi = hi + Math.imul(ah4, bh6) | 0;
                    lo = lo + Math.imul(al3, bl7) | 0;
                    mid = mid + Math.imul(al3, bh7) | 0;
                    mid = mid + Math.imul(ah3, bl7) | 0;
                    hi = hi + Math.imul(ah3, bh7) | 0;
                    lo = lo + Math.imul(al2, bl8) | 0;
                    mid = mid + Math.imul(al2, bh8) | 0;
                    mid = mid + Math.imul(ah2, bl8) | 0;
                    hi = hi + Math.imul(ah2, bh8) | 0;
                    lo = lo + Math.imul(al1, bl9) | 0;
                    mid = mid + Math.imul(al1, bh9) | 0;
                    mid = mid + Math.imul(ah1, bl9) | 0;
                    hi = hi + Math.imul(ah1, bh9) | 0;
                    var w10 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
                    c = (hi + (mid >>> 13) | 0) + (w10 >>> 26) | 0;
                    w10 &= 67108863;
                    lo = Math.imul(al9, bl2);
                    mid = Math.imul(al9, bh2);
                    mid = mid + Math.imul(ah9, bl2) | 0;
                    hi = Math.imul(ah9, bh2);
                    lo = lo + Math.imul(al8, bl3) | 0;
                    mid = mid + Math.imul(al8, bh3) | 0;
                    mid = mid + Math.imul(ah8, bl3) | 0;
                    hi = hi + Math.imul(ah8, bh3) | 0;
                    lo = lo + Math.imul(al7, bl4) | 0;
                    mid = mid + Math.imul(al7, bh4) | 0;
                    mid = mid + Math.imul(ah7, bl4) | 0;
                    hi = hi + Math.imul(ah7, bh4) | 0;
                    lo = lo + Math.imul(al6, bl5) | 0;
                    mid = mid + Math.imul(al6, bh5) | 0;
                    mid = mid + Math.imul(ah6, bl5) | 0;
                    hi = hi + Math.imul(ah6, bh5) | 0;
                    lo = lo + Math.imul(al5, bl6) | 0;
                    mid = mid + Math.imul(al5, bh6) | 0;
                    mid = mid + Math.imul(ah5, bl6) | 0;
                    hi = hi + Math.imul(ah5, bh6) | 0;
                    lo = lo + Math.imul(al4, bl7) | 0;
                    mid = mid + Math.imul(al4, bh7) | 0;
                    mid = mid + Math.imul(ah4, bl7) | 0;
                    hi = hi + Math.imul(ah4, bh7) | 0;
                    lo = lo + Math.imul(al3, bl8) | 0;
                    mid = mid + Math.imul(al3, bh8) | 0;
                    mid = mid + Math.imul(ah3, bl8) | 0;
                    hi = hi + Math.imul(ah3, bh8) | 0;
                    lo = lo + Math.imul(al2, bl9) | 0;
                    mid = mid + Math.imul(al2, bh9) | 0;
                    mid = mid + Math.imul(ah2, bl9) | 0;
                    hi = hi + Math.imul(ah2, bh9) | 0;
                    var w11 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
                    c = (hi + (mid >>> 13) | 0) + (w11 >>> 26) | 0;
                    w11 &= 67108863;
                    lo = Math.imul(al9, bl3);
                    mid = Math.imul(al9, bh3);
                    mid = mid + Math.imul(ah9, bl3) | 0;
                    hi = Math.imul(ah9, bh3);
                    lo = lo + Math.imul(al8, bl4) | 0;
                    mid = mid + Math.imul(al8, bh4) | 0;
                    mid = mid + Math.imul(ah8, bl4) | 0;
                    hi = hi + Math.imul(ah8, bh4) | 0;
                    lo = lo + Math.imul(al7, bl5) | 0;
                    mid = mid + Math.imul(al7, bh5) | 0;
                    mid = mid + Math.imul(ah7, bl5) | 0;
                    hi = hi + Math.imul(ah7, bh5) | 0;
                    lo = lo + Math.imul(al6, bl6) | 0;
                    mid = mid + Math.imul(al6, bh6) | 0;
                    mid = mid + Math.imul(ah6, bl6) | 0;
                    hi = hi + Math.imul(ah6, bh6) | 0;
                    lo = lo + Math.imul(al5, bl7) | 0;
                    mid = mid + Math.imul(al5, bh7) | 0;
                    mid = mid + Math.imul(ah5, bl7) | 0;
                    hi = hi + Math.imul(ah5, bh7) | 0;
                    lo = lo + Math.imul(al4, bl8) | 0;
                    mid = mid + Math.imul(al4, bh8) | 0;
                    mid = mid + Math.imul(ah4, bl8) | 0;
                    hi = hi + Math.imul(ah4, bh8) | 0;
                    lo = lo + Math.imul(al3, bl9) | 0;
                    mid = mid + Math.imul(al3, bh9) | 0;
                    mid = mid + Math.imul(ah3, bl9) | 0;
                    hi = hi + Math.imul(ah3, bh9) | 0;
                    var w12 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
                    c = (hi + (mid >>> 13) | 0) + (w12 >>> 26) | 0;
                    w12 &= 67108863;
                    lo = Math.imul(al9, bl4);
                    mid = Math.imul(al9, bh4);
                    mid = mid + Math.imul(ah9, bl4) | 0;
                    hi = Math.imul(ah9, bh4);
                    lo = lo + Math.imul(al8, bl5) | 0;
                    mid = mid + Math.imul(al8, bh5) | 0;
                    mid = mid + Math.imul(ah8, bl5) | 0;
                    hi = hi + Math.imul(ah8, bh5) | 0;
                    lo = lo + Math.imul(al7, bl6) | 0;
                    mid = mid + Math.imul(al7, bh6) | 0;
                    mid = mid + Math.imul(ah7, bl6) | 0;
                    hi = hi + Math.imul(ah7, bh6) | 0;
                    lo = lo + Math.imul(al6, bl7) | 0;
                    mid = mid + Math.imul(al6, bh7) | 0;
                    mid = mid + Math.imul(ah6, bl7) | 0;
                    hi = hi + Math.imul(ah6, bh7) | 0;
                    lo = lo + Math.imul(al5, bl8) | 0;
                    mid = mid + Math.imul(al5, bh8) | 0;
                    mid = mid + Math.imul(ah5, bl8) | 0;
                    hi = hi + Math.imul(ah5, bh8) | 0;
                    lo = lo + Math.imul(al4, bl9) | 0;
                    mid = mid + Math.imul(al4, bh9) | 0;
                    mid = mid + Math.imul(ah4, bl9) | 0;
                    hi = hi + Math.imul(ah4, bh9) | 0;
                    var w13 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
                    c = (hi + (mid >>> 13) | 0) + (w13 >>> 26) | 0;
                    w13 &= 67108863;
                    lo = Math.imul(al9, bl5);
                    mid = Math.imul(al9, bh5);
                    mid = mid + Math.imul(ah9, bl5) | 0;
                    hi = Math.imul(ah9, bh5);
                    lo = lo + Math.imul(al8, bl6) | 0;
                    mid = mid + Math.imul(al8, bh6) | 0;
                    mid = mid + Math.imul(ah8, bl6) | 0;
                    hi = hi + Math.imul(ah8, bh6) | 0;
                    lo = lo + Math.imul(al7, bl7) | 0;
                    mid = mid + Math.imul(al7, bh7) | 0;
                    mid = mid + Math.imul(ah7, bl7) | 0;
                    hi = hi + Math.imul(ah7, bh7) | 0;
                    lo = lo + Math.imul(al6, bl8) | 0;
                    mid = mid + Math.imul(al6, bh8) | 0;
                    mid = mid + Math.imul(ah6, bl8) | 0;
                    hi = hi + Math.imul(ah6, bh8) | 0;
                    lo = lo + Math.imul(al5, bl9) | 0;
                    mid = mid + Math.imul(al5, bh9) | 0;
                    mid = mid + Math.imul(ah5, bl9) | 0;
                    hi = hi + Math.imul(ah5, bh9) | 0;
                    var w14 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
                    c = (hi + (mid >>> 13) | 0) + (w14 >>> 26) | 0;
                    w14 &= 67108863;
                    lo = Math.imul(al9, bl6);
                    mid = Math.imul(al9, bh6);
                    mid = mid + Math.imul(ah9, bl6) | 0;
                    hi = Math.imul(ah9, bh6);
                    lo = lo + Math.imul(al8, bl7) | 0;
                    mid = mid + Math.imul(al8, bh7) | 0;
                    mid = mid + Math.imul(ah8, bl7) | 0;
                    hi = hi + Math.imul(ah8, bh7) | 0;
                    lo = lo + Math.imul(al7, bl8) | 0;
                    mid = mid + Math.imul(al7, bh8) | 0;
                    mid = mid + Math.imul(ah7, bl8) | 0;
                    hi = hi + Math.imul(ah7, bh8) | 0;
                    lo = lo + Math.imul(al6, bl9) | 0;
                    mid = mid + Math.imul(al6, bh9) | 0;
                    mid = mid + Math.imul(ah6, bl9) | 0;
                    hi = hi + Math.imul(ah6, bh9) | 0;
                    var w15 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
                    c = (hi + (mid >>> 13) | 0) + (w15 >>> 26) | 0;
                    w15 &= 67108863;
                    lo = Math.imul(al9, bl7);
                    mid = Math.imul(al9, bh7);
                    mid = mid + Math.imul(ah9, bl7) | 0;
                    hi = Math.imul(ah9, bh7);
                    lo = lo + Math.imul(al8, bl8) | 0;
                    mid = mid + Math.imul(al8, bh8) | 0;
                    mid = mid + Math.imul(ah8, bl8) | 0;
                    hi = hi + Math.imul(ah8, bh8) | 0;
                    lo = lo + Math.imul(al7, bl9) | 0;
                    mid = mid + Math.imul(al7, bh9) | 0;
                    mid = mid + Math.imul(ah7, bl9) | 0;
                    hi = hi + Math.imul(ah7, bh9) | 0;
                    var w16 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
                    c = (hi + (mid >>> 13) | 0) + (w16 >>> 26) | 0;
                    w16 &= 67108863;
                    lo = Math.imul(al9, bl8);
                    mid = Math.imul(al9, bh8);
                    mid = mid + Math.imul(ah9, bl8) | 0;
                    hi = Math.imul(ah9, bh8);
                    lo = lo + Math.imul(al8, bl9) | 0;
                    mid = mid + Math.imul(al8, bh9) | 0;
                    mid = mid + Math.imul(ah8, bl9) | 0;
                    hi = hi + Math.imul(ah8, bh9) | 0;
                    var w17 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
                    c = (hi + (mid >>> 13) | 0) + (w17 >>> 26) | 0;
                    w17 &= 67108863;
                    lo = Math.imul(al9, bl9);
                    mid = Math.imul(al9, bh9);
                    mid = mid + Math.imul(ah9, bl9) | 0;
                    hi = Math.imul(ah9, bh9);
                    var w18 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
                    c = (hi + (mid >>> 13) | 0) + (w18 >>> 26) | 0;
                    w18 &= 67108863;
                    o[0] = w0;
                    o[1] = w1;
                    o[2] = w2;
                    o[3] = w3;
                    o[4] = w4;
                    o[5] = w5;
                    o[6] = w6;
                    o[7] = w7;
                    o[8] = w8;
                    o[9] = w9;
                    o[10] = w10;
                    o[11] = w11;
                    o[12] = w12;
                    o[13] = w13;
                    o[14] = w14;
                    o[15] = w15;
                    o[16] = w16;
                    o[17] = w17;
                    o[18] = w18;
                    if (c !== 0) {
                        o[19] = c;
                        out.length++;
                    }
                    return out;
                };
                if (!Math.imul) comb10MulTo = smallMulTo;
                function bigMulTo(self, num, out) {
                    out.negative = num.negative ^ self.negative;
                    out.length = self.length + num.length;
                    var carry = 0;
                    var hncarry = 0;
                    for (var k = 0; k < out.length - 1; k++) {
                        var ncarry = hncarry;
                        hncarry = 0;
                        var rword = carry & 67108863;
                        var maxJ = Math.min(k, num.length - 1);
                        for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
                            var i = k - j;
                            var a = self.words[i] | 0;
                            var b = num.words[j] | 0;
                            var r = a * b;
                            var lo = r & 67108863;
                            ncarry = ncarry + (r / 67108864 | 0) | 0;
                            lo = lo + rword | 0;
                            rword = lo & 67108863;
                            ncarry = ncarry + (lo >>> 26) | 0;
                            hncarry += ncarry >>> 26;
                            ncarry &= 67108863;
                        }
                        out.words[k] = rword;
                        carry = ncarry;
                        ncarry = hncarry;
                    }
                    if (carry !== 0) out.words[k] = carry; else out.length--;
                    return out._strip();
                }
                function jumboMulTo(self, num, out) {
                    return bigMulTo(self, num, out);
                }
                BN.prototype.mulTo = function mulTo(num, out) {
                    var res;
                    var len = this.length + num.length;
                    if (this.length === 10 && num.length === 10) res = comb10MulTo(this, num, out); else if (len < 63) res = smallMulTo(this, num, out); else if (len < 1024) res = bigMulTo(this, num, out); else res = jumboMulTo(this, num, out);
                    return res;
                };
                function FFTM(x, y) {
                    this.x = x;
                    this.y = y;
                }
                FFTM.prototype.makeRBT = function makeRBT(N) {
                    var t = new Array(N);
                    var l = BN.prototype._countBits(N) - 1;
                    for (var i = 0; i < N; i++) t[i] = this.revBin(i, l, N);
                    return t;
                };
                FFTM.prototype.revBin = function revBin(x, l, N) {
                    if (x === 0 || x === N - 1) return x;
                    var rb = 0;
                    for (var i = 0; i < l; i++) {
                        rb |= (x & 1) << l - i - 1;
                        x >>= 1;
                    }
                    return rb;
                };
                FFTM.prototype.permute = function permute(rbt, rws, iws, rtws, itws, N) {
                    for (var i = 0; i < N; i++) {
                        rtws[i] = rws[rbt[i]];
                        itws[i] = iws[rbt[i]];
                    }
                };
                FFTM.prototype.transform = function transform(rws, iws, rtws, itws, N, rbt) {
                    this.permute(rbt, rws, iws, rtws, itws, N);
                    for (var s = 1; s < N; s <<= 1) {
                        var l = s << 1;
                        var rtwdf = Math.cos(2 * Math.PI / l);
                        var itwdf = Math.sin(2 * Math.PI / l);
                        for (var p = 0; p < N; p += l) {
                            var rtwdf_ = rtwdf;
                            var itwdf_ = itwdf;
                            for (var j = 0; j < s; j++) {
                                var re = rtws[p + j];
                                var ie = itws[p + j];
                                var ro = rtws[p + j + s];
                                var io = itws[p + j + s];
                                var rx = rtwdf_ * ro - itwdf_ * io;
                                io = rtwdf_ * io + itwdf_ * ro;
                                ro = rx;
                                rtws[p + j] = re + ro;
                                itws[p + j] = ie + io;
                                rtws[p + j + s] = re - ro;
                                itws[p + j + s] = ie - io;
                                if (j !== l) {
                                    rx = rtwdf * rtwdf_ - itwdf * itwdf_;
                                    itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
                                    rtwdf_ = rx;
                                }
                            }
                        }
                    }
                };
                FFTM.prototype.guessLen13b = function guessLen13b(n, m) {
                    var N = Math.max(m, n) | 1;
                    var odd = N & 1;
                    var i = 0;
                    for (N = N / 2 | 0; N; N >>>= 1) i++;
                    return 1 << i + 1 + odd;
                };
                FFTM.prototype.conjugate = function conjugate(rws, iws, N) {
                    if (N <= 1) return;
                    for (var i = 0; i < N / 2; i++) {
                        var t = rws[i];
                        rws[i] = rws[N - i - 1];
                        rws[N - i - 1] = t;
                        t = iws[i];
                        iws[i] = -iws[N - i - 1];
                        iws[N - i - 1] = -t;
                    }
                };
                FFTM.prototype.normalize13b = function normalize13b(ws, N) {
                    var carry = 0;
                    for (var i = 0; i < N / 2; i++) {
                        var w = Math.round(ws[2 * i + 1] / N) * 8192 + Math.round(ws[2 * i] / N) + carry;
                        ws[i] = w & 67108863;
                        if (w < 67108864) carry = 0; else carry = w / 67108864 | 0;
                    }
                    return ws;
                };
                FFTM.prototype.convert13b = function convert13b(ws, len, rws, N) {
                    var carry = 0;
                    for (var i = 0; i < len; i++) {
                        carry += ws[i] | 0;
                        rws[2 * i] = carry & 8191;
                        carry >>>= 13;
                        rws[2 * i + 1] = carry & 8191;
                        carry >>>= 13;
                    }
                    for (i = 2 * len; i < N; ++i) rws[i] = 0;
                    assert(carry === 0);
                    assert((carry & ~8191) === 0);
                };
                FFTM.prototype.stub = function stub(N) {
                    var ph = new Array(N);
                    for (var i = 0; i < N; i++) ph[i] = 0;
                    return ph;
                };
                FFTM.prototype.mulp = function mulp(x, y, out) {
                    var N = 2 * this.guessLen13b(x.length, y.length);
                    var rbt = this.makeRBT(N);
                    var _ = this.stub(N);
                    var rws = new Array(N);
                    var rwst = new Array(N);
                    var iwst = new Array(N);
                    var nrws = new Array(N);
                    var nrwst = new Array(N);
                    var niwst = new Array(N);
                    var rmws = out.words;
                    rmws.length = N;
                    this.convert13b(x.words, x.length, rws, N);
                    this.convert13b(y.words, y.length, nrws, N);
                    this.transform(rws, _, rwst, iwst, N, rbt);
                    this.transform(nrws, _, nrwst, niwst, N, rbt);
                    for (var i = 0; i < N; i++) {
                        var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i];
                        iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i];
                        rwst[i] = rx;
                    }
                    this.conjugate(rwst, iwst, N);
                    this.transform(rwst, iwst, rmws, _, N, rbt);
                    this.conjugate(rmws, _, N);
                    this.normalize13b(rmws, N);
                    out.negative = x.negative ^ y.negative;
                    out.length = x.length + y.length;
                    return out._strip();
                };
                BN.prototype.mul = function mul(num) {
                    var out = new BN(null);
                    out.words = new Array(this.length + num.length);
                    return this.mulTo(num, out);
                };
                BN.prototype.mulf = function mulf(num) {
                    var out = new BN(null);
                    out.words = new Array(this.length + num.length);
                    return jumboMulTo(this, num, out);
                };
                BN.prototype.imul = function imul(num) {
                    return this.clone().mulTo(num, this);
                };
                BN.prototype.imuln = function imuln(num) {
                    var isNegNum = num < 0;
                    if (isNegNum) num = -num;
                    assert(typeof num === "number");
                    assert(num < 67108864);
                    var carry = 0;
                    for (var i = 0; i < this.length; i++) {
                        var w = (this.words[i] | 0) * num;
                        var lo = (w & 67108863) + (carry & 67108863);
                        carry >>= 26;
                        carry += w / 67108864 | 0;
                        carry += lo >>> 26;
                        this.words[i] = lo & 67108863;
                    }
                    if (carry !== 0) {
                        this.words[i] = carry;
                        this.length++;
                    }
                    return isNegNum ? this.ineg() : this;
                };
                BN.prototype.muln = function muln(num) {
                    return this.clone().imuln(num);
                };
                BN.prototype.sqr = function sqr() {
                    return this.mul(this);
                };
                BN.prototype.isqr = function isqr() {
                    return this.imul(this.clone());
                };
                BN.prototype.pow = function pow(num) {
                    var w = toBitArray(num);
                    if (w.length === 0) return new BN(1);
                    var res = this;
                    for (var i = 0; i < w.length; i++, res = res.sqr()) if (w[i] !== 0) break;
                    if (++i < w.length) for (var q = res.sqr(); i < w.length; i++, q = q.sqr()) {
                        if (w[i] === 0) continue;
                        res = res.mul(q);
                    }
                    return res;
                };
                BN.prototype.iushln = function iushln(bits) {
                    assert(typeof bits === "number" && bits >= 0);
                    var r = bits % 26;
                    var s = (bits - r) / 26;
                    var carryMask = 67108863 >>> 26 - r << 26 - r;
                    var i;
                    if (r !== 0) {
                        var carry = 0;
                        for (i = 0; i < this.length; i++) {
                            var newCarry = this.words[i] & carryMask;
                            var c = (this.words[i] | 0) - newCarry << r;
                            this.words[i] = c | carry;
                            carry = newCarry >>> 26 - r;
                        }
                        if (carry) {
                            this.words[i] = carry;
                            this.length++;
                        }
                    }
                    if (s !== 0) {
                        for (i = this.length - 1; i >= 0; i--) this.words[i + s] = this.words[i];
                        for (i = 0; i < s; i++) this.words[i] = 0;
                        this.length += s;
                    }
                    return this._strip();
                };
                BN.prototype.ishln = function ishln(bits) {
                    assert(this.negative === 0);
                    return this.iushln(bits);
                };
                BN.prototype.iushrn = function iushrn(bits, hint, extended) {
                    assert(typeof bits === "number" && bits >= 0);
                    var h;
                    if (hint) h = (hint - hint % 26) / 26; else h = 0;
                    var r = bits % 26;
                    var s = Math.min((bits - r) / 26, this.length);
                    var mask = 67108863 ^ 67108863 >>> r << r;
                    var maskedWords = extended;
                    h -= s;
                    h = Math.max(0, h);
                    if (maskedWords) {
                        for (var i = 0; i < s; i++) maskedWords.words[i] = this.words[i];
                        maskedWords.length = s;
                    }
                    if (s === 0) ; else if (this.length > s) {
                        this.length -= s;
                        for (i = 0; i < this.length; i++) this.words[i] = this.words[i + s];
                    } else {
                        this.words[0] = 0;
                        this.length = 1;
                    }
                    var carry = 0;
                    for (i = this.length - 1; i >= 0 && (carry !== 0 || i >= h); i--) {
                        var word = this.words[i] | 0;
                        this.words[i] = carry << 26 - r | word >>> r;
                        carry = word & mask;
                    }
                    if (maskedWords && carry !== 0) maskedWords.words[maskedWords.length++] = carry;
                    if (this.length === 0) {
                        this.words[0] = 0;
                        this.length = 1;
                    }
                    return this._strip();
                };
                BN.prototype.ishrn = function ishrn(bits, hint, extended) {
                    assert(this.negative === 0);
                    return this.iushrn(bits, hint, extended);
                };
                BN.prototype.shln = function shln(bits) {
                    return this.clone().ishln(bits);
                };
                BN.prototype.ushln = function ushln(bits) {
                    return this.clone().iushln(bits);
                };
                BN.prototype.shrn = function shrn(bits) {
                    return this.clone().ishrn(bits);
                };
                BN.prototype.ushrn = function ushrn(bits) {
                    return this.clone().iushrn(bits);
                };
                BN.prototype.testn = function testn(bit) {
                    assert(typeof bit === "number" && bit >= 0);
                    var r = bit % 26;
                    var s = (bit - r) / 26;
                    var q = 1 << r;
                    if (this.length <= s) return false;
                    var w = this.words[s];
                    return !!(w & q);
                };
                BN.prototype.imaskn = function imaskn(bits) {
                    assert(typeof bits === "number" && bits >= 0);
                    var r = bits % 26;
                    var s = (bits - r) / 26;
                    assert(this.negative === 0, "imaskn works only with positive numbers");
                    if (this.length <= s) return this;
                    if (r !== 0) s++;
                    this.length = Math.min(s, this.length);
                    if (r !== 0) {
                        var mask = 67108863 ^ 67108863 >>> r << r;
                        this.words[this.length - 1] &= mask;
                    }
                    return this._strip();
                };
                BN.prototype.maskn = function maskn(bits) {
                    return this.clone().imaskn(bits);
                };
                BN.prototype.iaddn = function iaddn(num) {
                    assert(typeof num === "number");
                    assert(num < 67108864);
                    if (num < 0) return this.isubn(-num);
                    if (this.negative !== 0) {
                        if (this.length === 1 && (this.words[0] | 0) <= num) {
                            this.words[0] = num - (this.words[0] | 0);
                            this.negative = 0;
                            return this;
                        }
                        this.negative = 0;
                        this.isubn(num);
                        this.negative = 1;
                        return this;
                    }
                    return this._iaddn(num);
                };
                BN.prototype._iaddn = function _iaddn(num) {
                    this.words[0] += num;
                    for (var i = 0; i < this.length && this.words[i] >= 67108864; i++) {
                        this.words[i] -= 67108864;
                        if (i === this.length - 1) this.words[i + 1] = 1; else this.words[i + 1]++;
                    }
                    this.length = Math.max(this.length, i + 1);
                    return this;
                };
                BN.prototype.isubn = function isubn(num) {
                    assert(typeof num === "number");
                    assert(num < 67108864);
                    if (num < 0) return this.iaddn(-num);
                    if (this.negative !== 0) {
                        this.negative = 0;
                        this.iaddn(num);
                        this.negative = 1;
                        return this;
                    }
                    this.words[0] -= num;
                    if (this.length === 1 && this.words[0] < 0) {
                        this.words[0] = -this.words[0];
                        this.negative = 1;
                    } else for (var i = 0; i < this.length && this.words[i] < 0; i++) {
                        this.words[i] += 67108864;
                        this.words[i + 1] -= 1;
                    }
                    return this._strip();
                };
                BN.prototype.addn = function addn(num) {
                    return this.clone().iaddn(num);
                };
                BN.prototype.subn = function subn(num) {
                    return this.clone().isubn(num);
                };
                BN.prototype.iabs = function iabs() {
                    this.negative = 0;
                    return this;
                };
                BN.prototype.abs = function abs() {
                    return this.clone().iabs();
                };
                BN.prototype._ishlnsubmul = function _ishlnsubmul(num, mul, shift) {
                    var len = num.length + shift;
                    var i;
                    this._expand(len);
                    var w;
                    var carry = 0;
                    for (i = 0; i < num.length; i++) {
                        w = (this.words[i + shift] | 0) + carry;
                        var right = (num.words[i] | 0) * mul;
                        w -= right & 67108863;
                        carry = (w >> 26) - (right / 67108864 | 0);
                        this.words[i + shift] = w & 67108863;
                    }
                    for (;i < this.length - shift; i++) {
                        w = (this.words[i + shift] | 0) + carry;
                        carry = w >> 26;
                        this.words[i + shift] = w & 67108863;
                    }
                    if (carry === 0) return this._strip();
                    assert(carry === -1);
                    carry = 0;
                    for (i = 0; i < this.length; i++) {
                        w = -(this.words[i] | 0) + carry;
                        carry = w >> 26;
                        this.words[i] = w & 67108863;
                    }
                    this.negative = 1;
                    return this._strip();
                };
                BN.prototype._wordDiv = function _wordDiv(num, mode) {
                    var shift = this.length - num.length;
                    var a = this.clone();
                    var b = num;
                    var bhi = b.words[b.length - 1] | 0;
                    var bhiBits = this._countBits(bhi);
                    shift = 26 - bhiBits;
                    if (shift !== 0) {
                        b = b.ushln(shift);
                        a.iushln(shift);
                        bhi = b.words[b.length - 1] | 0;
                    }
                    var m = a.length - b.length;
                    var q;
                    if (mode !== "mod") {
                        q = new BN(null);
                        q.length = m + 1;
                        q.words = new Array(q.length);
                        for (var i = 0; i < q.length; i++) q.words[i] = 0;
                    }
                    var diff = a.clone()._ishlnsubmul(b, 1, m);
                    if (diff.negative === 0) {
                        a = diff;
                        if (q) q.words[m] = 1;
                    }
                    for (var j = m - 1; j >= 0; j--) {
                        var qj = (a.words[b.length + j] | 0) * 67108864 + (a.words[b.length + j - 1] | 0);
                        qj = Math.min(qj / bhi | 0, 67108863);
                        a._ishlnsubmul(b, qj, j);
                        while (a.negative !== 0) {
                            qj--;
                            a.negative = 0;
                            a._ishlnsubmul(b, 1, j);
                            if (!a.isZero()) a.negative ^= 1;
                        }
                        if (q) q.words[j] = qj;
                    }
                    if (q) q._strip();
                    a._strip();
                    if (mode !== "div" && shift !== 0) a.iushrn(shift);
                    return {
                        div: q || null,
                        mod: a
                    };
                };
                BN.prototype.divmod = function divmod(num, mode, positive) {
                    assert(!num.isZero());
                    if (this.isZero()) return {
                        div: new BN(0),
                        mod: new BN(0)
                    };
                    var div, mod, res;
                    if (this.negative !== 0 && num.negative === 0) {
                        res = this.neg().divmod(num, mode);
                        if (mode !== "mod") div = res.div.neg();
                        if (mode !== "div") {
                            mod = res.mod.neg();
                            if (positive && mod.negative !== 0) mod.iadd(num);
                        }
                        return {
                            div,
                            mod
                        };
                    }
                    if (this.negative === 0 && num.negative !== 0) {
                        res = this.divmod(num.neg(), mode);
                        if (mode !== "mod") div = res.div.neg();
                        return {
                            div,
                            mod: res.mod
                        };
                    }
                    if ((this.negative & num.negative) !== 0) {
                        res = this.neg().divmod(num.neg(), mode);
                        if (mode !== "div") {
                            mod = res.mod.neg();
                            if (positive && mod.negative !== 0) mod.isub(num);
                        }
                        return {
                            div: res.div,
                            mod
                        };
                    }
                    if (num.length > this.length || this.cmp(num) < 0) return {
                        div: new BN(0),
                        mod: this
                    };
                    if (num.length === 1) {
                        if (mode === "div") return {
                            div: this.divn(num.words[0]),
                            mod: null
                        };
                        if (mode === "mod") return {
                            div: null,
                            mod: new BN(this.modrn(num.words[0]))
                        };
                        return {
                            div: this.divn(num.words[0]),
                            mod: new BN(this.modrn(num.words[0]))
                        };
                    }
                    return this._wordDiv(num, mode);
                };
                BN.prototype.div = function div(num) {
                    return this.divmod(num, "div", false).div;
                };
                BN.prototype.mod = function mod(num) {
                    return this.divmod(num, "mod", false).mod;
                };
                BN.prototype.umod = function umod(num) {
                    return this.divmod(num, "mod", true).mod;
                };
                BN.prototype.divRound = function divRound(num) {
                    var dm = this.divmod(num);
                    if (dm.mod.isZero()) return dm.div;
                    var mod = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;
                    var half = num.ushrn(1);
                    var r2 = num.andln(1);
                    var cmp = mod.cmp(half);
                    if (cmp < 0 || r2 === 1 && cmp === 0) return dm.div;
                    return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
                };
                BN.prototype.modrn = function modrn(num) {
                    var isNegNum = num < 0;
                    if (isNegNum) num = -num;
                    assert(num <= 67108863);
                    var p = (1 << 26) % num;
                    var acc = 0;
                    for (var i = this.length - 1; i >= 0; i--) acc = (p * acc + (this.words[i] | 0)) % num;
                    return isNegNum ? -acc : acc;
                };
                BN.prototype.modn = function modn(num) {
                    return this.modrn(num);
                };
                BN.prototype.idivn = function idivn(num) {
                    var isNegNum = num < 0;
                    if (isNegNum) num = -num;
                    assert(num <= 67108863);
                    var carry = 0;
                    for (var i = this.length - 1; i >= 0; i--) {
                        var w = (this.words[i] | 0) + carry * 67108864;
                        this.words[i] = w / num | 0;
                        carry = w % num;
                    }
                    this._strip();
                    return isNegNum ? this.ineg() : this;
                };
                BN.prototype.divn = function divn(num) {
                    return this.clone().idivn(num);
                };
                BN.prototype.egcd = function egcd(p) {
                    assert(p.negative === 0);
                    assert(!p.isZero());
                    var x = this;
                    var y = p.clone();
                    if (x.negative !== 0) x = x.umod(p); else x = x.clone();
                    var A = new BN(1);
                    var B = new BN(0);
                    var C = new BN(0);
                    var D = new BN(1);
                    var g = 0;
                    while (x.isEven() && y.isEven()) {
                        x.iushrn(1);
                        y.iushrn(1);
                        ++g;
                    }
                    var yp = y.clone();
                    var xp = x.clone();
                    while (!x.isZero()) {
                        for (var i = 0, im = 1; (x.words[0] & im) === 0 && i < 26; ++i, im <<= 1) ;
                        if (i > 0) {
                            x.iushrn(i);
                            while (i-- > 0) {
                                if (A.isOdd() || B.isOdd()) {
                                    A.iadd(yp);
                                    B.isub(xp);
                                }
                                A.iushrn(1);
                                B.iushrn(1);
                            }
                        }
                        for (var j = 0, jm = 1; (y.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1) ;
                        if (j > 0) {
                            y.iushrn(j);
                            while (j-- > 0) {
                                if (C.isOdd() || D.isOdd()) {
                                    C.iadd(yp);
                                    D.isub(xp);
                                }
                                C.iushrn(1);
                                D.iushrn(1);
                            }
                        }
                        if (x.cmp(y) >= 0) {
                            x.isub(y);
                            A.isub(C);
                            B.isub(D);
                        } else {
                            y.isub(x);
                            C.isub(A);
                            D.isub(B);
                        }
                    }
                    return {
                        a: C,
                        b: D,
                        gcd: y.iushln(g)
                    };
                };
                BN.prototype._invmp = function _invmp(p) {
                    assert(p.negative === 0);
                    assert(!p.isZero());
                    var a = this;
                    var b = p.clone();
                    if (a.negative !== 0) a = a.umod(p); else a = a.clone();
                    var x1 = new BN(1);
                    var x2 = new BN(0);
                    var delta = b.clone();
                    while (a.cmpn(1) > 0 && b.cmpn(1) > 0) {
                        for (var i = 0, im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1) ;
                        if (i > 0) {
                            a.iushrn(i);
                            while (i-- > 0) {
                                if (x1.isOdd()) x1.iadd(delta);
                                x1.iushrn(1);
                            }
                        }
                        for (var j = 0, jm = 1; (b.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1) ;
                        if (j > 0) {
                            b.iushrn(j);
                            while (j-- > 0) {
                                if (x2.isOdd()) x2.iadd(delta);
                                x2.iushrn(1);
                            }
                        }
                        if (a.cmp(b) >= 0) {
                            a.isub(b);
                            x1.isub(x2);
                        } else {
                            b.isub(a);
                            x2.isub(x1);
                        }
                    }
                    var res;
                    if (a.cmpn(1) === 0) res = x1; else res = x2;
                    if (res.cmpn(0) < 0) res.iadd(p);
                    return res;
                };
                BN.prototype.gcd = function gcd(num) {
                    if (this.isZero()) return num.abs();
                    if (num.isZero()) return this.abs();
                    var a = this.clone();
                    var b = num.clone();
                    a.negative = 0;
                    b.negative = 0;
                    for (var shift = 0; a.isEven() && b.isEven(); shift++) {
                        a.iushrn(1);
                        b.iushrn(1);
                    }
                    do {
                        while (a.isEven()) a.iushrn(1);
                        while (b.isEven()) b.iushrn(1);
                        var r = a.cmp(b);
                        if (r < 0) {
                            var t = a;
                            a = b;
                            b = t;
                        } else if (r === 0 || b.cmpn(1) === 0) break;
                        a.isub(b);
                    } while (true);
                    return b.iushln(shift);
                };
                BN.prototype.invm = function invm(num) {
                    return this.egcd(num).a.umod(num);
                };
                BN.prototype.isEven = function isEven() {
                    return (this.words[0] & 1) === 0;
                };
                BN.prototype.isOdd = function isOdd() {
                    return (this.words[0] & 1) === 1;
                };
                BN.prototype.andln = function andln(num) {
                    return this.words[0] & num;
                };
                BN.prototype.bincn = function bincn(bit) {
                    assert(typeof bit === "number");
                    var r = bit % 26;
                    var s = (bit - r) / 26;
                    var q = 1 << r;
                    if (this.length <= s) {
                        this._expand(s + 1);
                        this.words[s] |= q;
                        return this;
                    }
                    var carry = q;
                    for (var i = s; carry !== 0 && i < this.length; i++) {
                        var w = this.words[i] | 0;
                        w += carry;
                        carry = w >>> 26;
                        w &= 67108863;
                        this.words[i] = w;
                    }
                    if (carry !== 0) {
                        this.words[i] = carry;
                        this.length++;
                    }
                    return this;
                };
                BN.prototype.isZero = function isZero() {
                    return this.length === 1 && this.words[0] === 0;
                };
                BN.prototype.cmpn = function cmpn(num) {
                    var negative = num < 0;
                    if (this.negative !== 0 && !negative) return -1;
                    if (this.negative === 0 && negative) return 1;
                    this._strip();
                    var res;
                    if (this.length > 1) res = 1; else {
                        if (negative) num = -num;
                        assert(num <= 67108863, "Number is too big");
                        var w = this.words[0] | 0;
                        res = w === num ? 0 : w < num ? -1 : 1;
                    }
                    if (this.negative !== 0) return -res | 0;
                    return res;
                };
                BN.prototype.cmp = function cmp(num) {
                    if (this.negative !== 0 && num.negative === 0) return -1;
                    if (this.negative === 0 && num.negative !== 0) return 1;
                    var res = this.ucmp(num);
                    if (this.negative !== 0) return -res | 0;
                    return res;
                };
                BN.prototype.ucmp = function ucmp(num) {
                    if (this.length > num.length) return 1;
                    if (this.length < num.length) return -1;
                    var res = 0;
                    for (var i = this.length - 1; i >= 0; i--) {
                        var a = this.words[i] | 0;
                        var b = num.words[i] | 0;
                        if (a === b) continue;
                        if (a < b) res = -1; else if (a > b) res = 1;
                        break;
                    }
                    return res;
                };
                BN.prototype.gtn = function gtn(num) {
                    return this.cmpn(num) === 1;
                };
                BN.prototype.gt = function gt(num) {
                    return this.cmp(num) === 1;
                };
                BN.prototype.gten = function gten(num) {
                    return this.cmpn(num) >= 0;
                };
                BN.prototype.gte = function gte(num) {
                    return this.cmp(num) >= 0;
                };
                BN.prototype.ltn = function ltn(num) {
                    return this.cmpn(num) === -1;
                };
                BN.prototype.lt = function lt(num) {
                    return this.cmp(num) === -1;
                };
                BN.prototype.lten = function lten(num) {
                    return this.cmpn(num) <= 0;
                };
                BN.prototype.lte = function lte(num) {
                    return this.cmp(num) <= 0;
                };
                BN.prototype.eqn = function eqn(num) {
                    return this.cmpn(num) === 0;
                };
                BN.prototype.eq = function eq(num) {
                    return this.cmp(num) === 0;
                };
                BN.red = function red(num) {
                    return new Red(num);
                };
                BN.prototype.toRed = function toRed(ctx) {
                    assert(!this.red, "Already a number in reduction context");
                    assert(this.negative === 0, "red works only with positives");
                    return ctx.convertTo(this)._forceRed(ctx);
                };
                BN.prototype.fromRed = function fromRed() {
                    assert(this.red, "fromRed works only with numbers in reduction context");
                    return this.red.convertFrom(this);
                };
                BN.prototype._forceRed = function _forceRed(ctx) {
                    this.red = ctx;
                    return this;
                };
                BN.prototype.forceRed = function forceRed(ctx) {
                    assert(!this.red, "Already a number in reduction context");
                    return this._forceRed(ctx);
                };
                BN.prototype.redAdd = function redAdd(num) {
                    assert(this.red, "redAdd works only with red numbers");
                    return this.red.add(this, num);
                };
                BN.prototype.redIAdd = function redIAdd(num) {
                    assert(this.red, "redIAdd works only with red numbers");
                    return this.red.iadd(this, num);
                };
                BN.prototype.redSub = function redSub(num) {
                    assert(this.red, "redSub works only with red numbers");
                    return this.red.sub(this, num);
                };
                BN.prototype.redISub = function redISub(num) {
                    assert(this.red, "redISub works only with red numbers");
                    return this.red.isub(this, num);
                };
                BN.prototype.redShl = function redShl(num) {
                    assert(this.red, "redShl works only with red numbers");
                    return this.red.shl(this, num);
                };
                BN.prototype.redMul = function redMul(num) {
                    assert(this.red, "redMul works only with red numbers");
                    this.red._verify2(this, num);
                    return this.red.mul(this, num);
                };
                BN.prototype.redIMul = function redIMul(num) {
                    assert(this.red, "redMul works only with red numbers");
                    this.red._verify2(this, num);
                    return this.red.imul(this, num);
                };
                BN.prototype.redSqr = function redSqr() {
                    assert(this.red, "redSqr works only with red numbers");
                    this.red._verify1(this);
                    return this.red.sqr(this);
                };
                BN.prototype.redISqr = function redISqr() {
                    assert(this.red, "redISqr works only with red numbers");
                    this.red._verify1(this);
                    return this.red.isqr(this);
                };
                BN.prototype.redSqrt = function redSqrt() {
                    assert(this.red, "redSqrt works only with red numbers");
                    this.red._verify1(this);
                    return this.red.sqrt(this);
                };
                BN.prototype.redInvm = function redInvm() {
                    assert(this.red, "redInvm works only with red numbers");
                    this.red._verify1(this);
                    return this.red.invm(this);
                };
                BN.prototype.redNeg = function redNeg() {
                    assert(this.red, "redNeg works only with red numbers");
                    this.red._verify1(this);
                    return this.red.neg(this);
                };
                BN.prototype.redPow = function redPow(num) {
                    assert(this.red && !num.red, "redPow(normalNum)");
                    this.red._verify1(this);
                    return this.red.pow(this, num);
                };
                var primes = {
                    k256: null,
                    p224: null,
                    p192: null,
                    p25519: null
                };
                function MPrime(name, p) {
                    this.name = name;
                    this.p = new BN(p, 16);
                    this.n = this.p.bitLength();
                    this.k = new BN(1).iushln(this.n).isub(this.p);
                    this.tmp = this._tmp();
                }
                MPrime.prototype._tmp = function _tmp() {
                    var tmp = new BN(null);
                    tmp.words = new Array(Math.ceil(this.n / 13));
                    return tmp;
                };
                MPrime.prototype.ireduce = function ireduce(num) {
                    var r = num;
                    var rlen;
                    do {
                        this.split(r, this.tmp);
                        r = this.imulK(r);
                        r = r.iadd(this.tmp);
                        rlen = r.bitLength();
                    } while (rlen > this.n);
                    var cmp = rlen < this.n ? -1 : r.ucmp(this.p);
                    if (cmp === 0) {
                        r.words[0] = 0;
                        r.length = 1;
                    } else if (cmp > 0) r.isub(this.p); else if (r.strip !== void 0) r.strip(); else r._strip();
                    return r;
                };
                MPrime.prototype.split = function split(input, out) {
                    input.iushrn(this.n, 0, out);
                };
                MPrime.prototype.imulK = function imulK(num) {
                    return num.imul(this.k);
                };
                function K256() {
                    MPrime.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
                }
                inherits(K256, MPrime);
                K256.prototype.split = function split(input, output) {
                    var mask = 4194303;
                    var outLen = Math.min(input.length, 9);
                    for (var i = 0; i < outLen; i++) output.words[i] = input.words[i];
                    output.length = outLen;
                    if (input.length <= 9) {
                        input.words[0] = 0;
                        input.length = 1;
                        return;
                    }
                    var prev = input.words[9];
                    output.words[output.length++] = prev & mask;
                    for (i = 10; i < input.length; i++) {
                        var next = input.words[i] | 0;
                        input.words[i - 10] = (next & mask) << 4 | prev >>> 22;
                        prev = next;
                    }
                    prev >>>= 22;
                    input.words[i - 10] = prev;
                    if (prev === 0 && input.length > 10) input.length -= 10; else input.length -= 9;
                };
                K256.prototype.imulK = function imulK(num) {
                    num.words[num.length] = 0;
                    num.words[num.length + 1] = 0;
                    num.length += 2;
                    var lo = 0;
                    for (var i = 0; i < num.length; i++) {
                        var w = num.words[i] | 0;
                        lo += w * 977;
                        num.words[i] = lo & 67108863;
                        lo = w * 64 + (lo / 67108864 | 0);
                    }
                    if (num.words[num.length - 1] === 0) {
                        num.length--;
                        if (num.words[num.length - 1] === 0) num.length--;
                    }
                    return num;
                };
                function P224() {
                    MPrime.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
                }
                inherits(P224, MPrime);
                function P192() {
                    MPrime.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
                }
                inherits(P192, MPrime);
                function P25519() {
                    MPrime.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
                }
                inherits(P25519, MPrime);
                P25519.prototype.imulK = function imulK(num) {
                    var carry = 0;
                    for (var i = 0; i < num.length; i++) {
                        var hi = (num.words[i] | 0) * 19 + carry;
                        var lo = hi & 67108863;
                        hi >>>= 26;
                        num.words[i] = lo;
                        carry = hi;
                    }
                    if (carry !== 0) num.words[num.length++] = carry;
                    return num;
                };
                BN._prime = function prime(name) {
                    if (primes[name]) return primes[name];
                    var prime;
                    if (name === "k256") prime = new K256; else if (name === "p224") prime = new P224; else if (name === "p192") prime = new P192; else if (name === "p25519") prime = new P25519; else throw new Error("Unknown prime " + name);
                    primes[name] = prime;
                    return prime;
                };
                function Red(m) {
                    if (typeof m === "string") {
                        var prime = BN._prime(m);
                        this.m = prime.p;
                        this.prime = prime;
                    } else {
                        assert(m.gtn(1), "modulus must be greater than 1");
                        this.m = m;
                        this.prime = null;
                    }
                }
                Red.prototype._verify1 = function _verify1(a) {
                    assert(a.negative === 0, "red works only with positives");
                    assert(a.red, "red works only with red numbers");
                };
                Red.prototype._verify2 = function _verify2(a, b) {
                    assert((a.negative | b.negative) === 0, "red works only with positives");
                    assert(a.red && a.red === b.red, "red works only with red numbers");
                };
                Red.prototype.imod = function imod(a) {
                    if (this.prime) return this.prime.ireduce(a)._forceRed(this);
                    move(a, a.umod(this.m)._forceRed(this));
                    return a;
                };
                Red.prototype.neg = function neg(a) {
                    if (a.isZero()) return a.clone();
                    return this.m.sub(a)._forceRed(this);
                };
                Red.prototype.add = function add(a, b) {
                    this._verify2(a, b);
                    var res = a.add(b);
                    if (res.cmp(this.m) >= 0) res.isub(this.m);
                    return res._forceRed(this);
                };
                Red.prototype.iadd = function iadd(a, b) {
                    this._verify2(a, b);
                    var res = a.iadd(b);
                    if (res.cmp(this.m) >= 0) res.isub(this.m);
                    return res;
                };
                Red.prototype.sub = function sub(a, b) {
                    this._verify2(a, b);
                    var res = a.sub(b);
                    if (res.cmpn(0) < 0) res.iadd(this.m);
                    return res._forceRed(this);
                };
                Red.prototype.isub = function isub(a, b) {
                    this._verify2(a, b);
                    var res = a.isub(b);
                    if (res.cmpn(0) < 0) res.iadd(this.m);
                    return res;
                };
                Red.prototype.shl = function shl(a, num) {
                    this._verify1(a);
                    return this.imod(a.ushln(num));
                };
                Red.prototype.imul = function imul(a, b) {
                    this._verify2(a, b);
                    return this.imod(a.imul(b));
                };
                Red.prototype.mul = function mul(a, b) {
                    this._verify2(a, b);
                    return this.imod(a.mul(b));
                };
                Red.prototype.isqr = function isqr(a) {
                    return this.imul(a, a.clone());
                };
                Red.prototype.sqr = function sqr(a) {
                    return this.mul(a, a);
                };
                Red.prototype.sqrt = function sqrt(a) {
                    if (a.isZero()) return a.clone();
                    var mod3 = this.m.andln(3);
                    assert(mod3 % 2 === 1);
                    if (mod3 === 3) {
                        var pow = this.m.add(new BN(1)).iushrn(2);
                        return this.pow(a, pow);
                    }
                    var q = this.m.subn(1);
                    var s = 0;
                    while (!q.isZero() && q.andln(1) === 0) {
                        s++;
                        q.iushrn(1);
                    }
                    assert(!q.isZero());
                    var one = new BN(1).toRed(this);
                    var nOne = one.redNeg();
                    var lpow = this.m.subn(1).iushrn(1);
                    var z = this.m.bitLength();
                    z = new BN(2 * z * z).toRed(this);
                    while (this.pow(z, lpow).cmp(nOne) !== 0) z.redIAdd(nOne);
                    var c = this.pow(z, q);
                    var r = this.pow(a, q.addn(1).iushrn(1));
                    var t = this.pow(a, q);
                    var m = s;
                    while (t.cmp(one) !== 0) {
                        var tmp = t;
                        for (var i = 0; tmp.cmp(one) !== 0; i++) tmp = tmp.redSqr();
                        assert(i < m);
                        var b = this.pow(c, new BN(1).iushln(m - i - 1));
                        r = r.redMul(b);
                        c = b.redSqr();
                        t = t.redMul(c);
                        m = i;
                    }
                    return r;
                };
                Red.prototype.invm = function invm(a) {
                    var inv = a._invmp(this.m);
                    if (inv.negative !== 0) {
                        inv.negative = 0;
                        return this.imod(inv).redNeg();
                    } else return this.imod(inv);
                };
                Red.prototype.pow = function pow(a, num) {
                    if (num.isZero()) return new BN(1).toRed(this);
                    if (num.cmpn(1) === 0) return a.clone();
                    var windowSize = 4;
                    var wnd = new Array(1 << windowSize);
                    wnd[0] = new BN(1).toRed(this);
                    wnd[1] = a;
                    for (var i = 2; i < wnd.length; i++) wnd[i] = this.mul(wnd[i - 1], a);
                    var res = wnd[0];
                    var current = 0;
                    var currentLen = 0;
                    var start = num.bitLength() % 26;
                    if (start === 0) start = 26;
                    for (i = num.length - 1; i >= 0; i--) {
                        var word = num.words[i];
                        for (var j = start - 1; j >= 0; j--) {
                            var bit = word >> j & 1;
                            if (res !== wnd[0]) res = this.sqr(res);
                            if (bit === 0 && current === 0) {
                                currentLen = 0;
                                continue;
                            }
                            current <<= 1;
                            current |= bit;
                            currentLen++;
                            if (currentLen !== windowSize && (i !== 0 || j !== 0)) continue;
                            res = this.mul(res, wnd[current]);
                            currentLen = 0;
                            current = 0;
                        }
                        start = 26;
                    }
                    return res;
                };
                Red.prototype.convertTo = function convertTo(num) {
                    var r = num.umod(this.m);
                    return r === num ? r.clone() : r;
                };
                Red.prototype.convertFrom = function convertFrom(num) {
                    var res = num.clone();
                    res.red = null;
                    return res;
                };
                BN.mont = function mont(num) {
                    return new Mont(num);
                };
                function Mont(m) {
                    Red.call(this, m);
                    this.shift = this.m.bitLength();
                    if (this.shift % 26 !== 0) this.shift += 26 - this.shift % 26;
                    this.r = new BN(1).iushln(this.shift);
                    this.r2 = this.imod(this.r.sqr());
                    this.rinv = this.r._invmp(this.m);
                    this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
                    this.minv = this.minv.umod(this.r);
                    this.minv = this.r.sub(this.minv);
                }
                inherits(Mont, Red);
                Mont.prototype.convertTo = function convertTo(num) {
                    return this.imod(num.ushln(this.shift));
                };
                Mont.prototype.convertFrom = function convertFrom(num) {
                    var r = this.imod(num.mul(this.rinv));
                    r.red = null;
                    return r;
                };
                Mont.prototype.imul = function imul(a, b) {
                    if (a.isZero() || b.isZero()) {
                        a.words[0] = 0;
                        a.length = 1;
                        return a;
                    }
                    var t = a.imul(b);
                    var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
                    var u = t.isub(c).iushrn(this.shift);
                    var res = u;
                    if (u.cmp(this.m) >= 0) res = u.isub(this.m); else if (u.cmpn(0) < 0) res = u.iadd(this.m);
                    return res._forceRed(this);
                };
                Mont.prototype.mul = function mul(a, b) {
                    if (a.isZero() || b.isZero()) return new BN(0)._forceRed(this);
                    var t = a.mul(b);
                    var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
                    var u = t.isub(c).iushrn(this.shift);
                    var res = u;
                    if (u.cmp(this.m) >= 0) res = u.isub(this.m); else if (u.cmpn(0) < 0) res = u.iadd(this.m);
                    return res._forceRed(this);
                };
                Mont.prototype.invm = function invm(a) {
                    var res = this.imod(a._invmp(this.m).mul(this.r2));
                    return res._forceRed(this);
                };
            })(false || module, this);
        },
        755: function(__unused_webpack_module, exports, __webpack_require__) {
            "use strict";
            var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
                if (k2 === void 0) k2 = k;
                Object.defineProperty(o, k2, {
                    enumerable: true,
                    get: function() {
                        return m[k];
                    }
                });
            } : function(o, m, k, k2) {
                if (k2 === void 0) k2 = k;
                o[k2] = m[k];
            });
            var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
                Object.defineProperty(o, "default", {
                    enumerable: true,
                    value: v
                });
            } : function(o, v) {
                o["default"] = v;
            });
            var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
                var d, c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __importStar = this && this.__importStar || function(mod) {
                if (mod && mod.__esModule) return mod;
                var result = {};
                if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
                __setModuleDefault(result, mod);
                return result;
            };
            var __importDefault = this && this.__importDefault || function(mod) {
                return mod && mod.__esModule ? mod : {
                    default: mod
                };
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.deserializeUnchecked = exports.deserialize = exports.serialize = exports.BinaryReader = exports.BinaryWriter = exports.BorshError = exports.baseDecode = exports.baseEncode = void 0;
            const bn_js_1 = __importDefault(__webpack_require__(404));
            const bs58_1 = __importDefault(__webpack_require__(989));
            const encoding = __importStar(__webpack_require__(281));
            const ResolvedTextDecoder = typeof TextDecoder !== "function" ? encoding.TextDecoder : TextDecoder;
            const textDecoder = new ResolvedTextDecoder("utf-8", {
                fatal: true
            });
            function baseEncode(value) {
                if (typeof value === "string") value = Buffer.from(value, "utf8");
                return bs58_1.default.encode(Buffer.from(value));
            }
            exports.baseEncode = baseEncode;
            function baseDecode(value) {
                return Buffer.from(bs58_1.default.decode(value));
            }
            exports.baseDecode = baseDecode;
            const INITIAL_LENGTH = 1024;
            class BorshError extends Error {
                constructor(message) {
                    super(message);
                    this.fieldPath = [];
                    this.originalMessage = message;
                }
                addToFieldPath(fieldName) {
                    this.fieldPath.splice(0, 0, fieldName);
                    this.message = this.originalMessage + ": " + this.fieldPath.join(".");
                }
            }
            exports.BorshError = BorshError;
            class BinaryWriter {
                constructor() {
                    this.buf = Buffer.alloc(INITIAL_LENGTH);
                    this.length = 0;
                }
                maybeResize() {
                    if (this.buf.length < 16 + this.length) this.buf = Buffer.concat([ this.buf, Buffer.alloc(INITIAL_LENGTH) ]);
                }
                writeU8(value) {
                    this.maybeResize();
                    this.buf.writeUInt8(value, this.length);
                    this.length += 1;
                }
                writeU16(value) {
                    this.maybeResize();
                    this.buf.writeUInt16LE(value, this.length);
                    this.length += 2;
                }
                writeU32(value) {
                    this.maybeResize();
                    this.buf.writeUInt32LE(value, this.length);
                    this.length += 4;
                }
                writeU64(value) {
                    this.maybeResize();
                    this.writeBuffer(Buffer.from(new bn_js_1.default(value).toArray("le", 8)));
                }
                writeU128(value) {
                    this.maybeResize();
                    this.writeBuffer(Buffer.from(new bn_js_1.default(value).toArray("le", 16)));
                }
                writeU256(value) {
                    this.maybeResize();
                    this.writeBuffer(Buffer.from(new bn_js_1.default(value).toArray("le", 32)));
                }
                writeU512(value) {
                    this.maybeResize();
                    this.writeBuffer(Buffer.from(new bn_js_1.default(value).toArray("le", 64)));
                }
                writeBuffer(buffer) {
                    this.buf = Buffer.concat([ Buffer.from(this.buf.subarray(0, this.length)), buffer, Buffer.alloc(INITIAL_LENGTH) ]);
                    this.length += buffer.length;
                }
                writeString(str) {
                    this.maybeResize();
                    const b = Buffer.from(str, "utf8");
                    this.writeU32(b.length);
                    this.writeBuffer(b);
                }
                writeFixedArray(array) {
                    this.writeBuffer(Buffer.from(array));
                }
                writeArray(array, fn) {
                    this.maybeResize();
                    this.writeU32(array.length);
                    for (const elem of array) {
                        this.maybeResize();
                        fn(elem);
                    }
                }
                toArray() {
                    return this.buf.subarray(0, this.length);
                }
            }
            exports.BinaryWriter = BinaryWriter;
            function handlingRangeError(target, propertyKey, propertyDescriptor) {
                const originalMethod = propertyDescriptor.value;
                propertyDescriptor.value = function(...args) {
                    try {
                        return originalMethod.apply(this, args);
                    } catch (e) {
                        if (e instanceof RangeError) {
                            const code = e.code;
                            if ([ "ERR_BUFFER_OUT_OF_BOUNDS", "ERR_OUT_OF_RANGE" ].indexOf(code) >= 0) throw new BorshError("Reached the end of buffer when deserializing");
                        }
                        throw e;
                    }
                };
            }
            class BinaryReader {
                constructor(buf) {
                    this.buf = buf;
                    this.offset = 0;
                }
                readU8() {
                    const value = this.buf.readUInt8(this.offset);
                    this.offset += 1;
                    return value;
                }
                readU16() {
                    const value = this.buf.readUInt16LE(this.offset);
                    this.offset += 2;
                    return value;
                }
                readU32() {
                    const value = this.buf.readUInt32LE(this.offset);
                    this.offset += 4;
                    return value;
                }
                readU64() {
                    const buf = this.readBuffer(8);
                    return new bn_js_1.default(buf, "le");
                }
                readU128() {
                    const buf = this.readBuffer(16);
                    return new bn_js_1.default(buf, "le");
                }
                readU256() {
                    const buf = this.readBuffer(32);
                    return new bn_js_1.default(buf, "le");
                }
                readU512() {
                    const buf = this.readBuffer(64);
                    return new bn_js_1.default(buf, "le");
                }
                readBuffer(len) {
                    if (this.offset + len > this.buf.length) throw new BorshError(`Expected buffer length ${len} isn't within bounds`);
                    const result = this.buf.slice(this.offset, this.offset + len);
                    this.offset += len;
                    return result;
                }
                readString() {
                    const len = this.readU32();
                    const buf = this.readBuffer(len);
                    try {
                        return textDecoder.decode(buf);
                    } catch (e) {
                        throw new BorshError(`Error decoding UTF-8 string: ${e}`);
                    }
                }
                readFixedArray(len) {
                    return new Uint8Array(this.readBuffer(len));
                }
                readArray(fn) {
                    const len = this.readU32();
                    const result = Array();
                    for (let i = 0; i < len; ++i) result.push(fn());
                    return result;
                }
            }
            __decorate([ handlingRangeError ], BinaryReader.prototype, "readU8", null);
            __decorate([ handlingRangeError ], BinaryReader.prototype, "readU16", null);
            __decorate([ handlingRangeError ], BinaryReader.prototype, "readU32", null);
            __decorate([ handlingRangeError ], BinaryReader.prototype, "readU64", null);
            __decorate([ handlingRangeError ], BinaryReader.prototype, "readU128", null);
            __decorate([ handlingRangeError ], BinaryReader.prototype, "readU256", null);
            __decorate([ handlingRangeError ], BinaryReader.prototype, "readU512", null);
            __decorate([ handlingRangeError ], BinaryReader.prototype, "readString", null);
            __decorate([ handlingRangeError ], BinaryReader.prototype, "readFixedArray", null);
            __decorate([ handlingRangeError ], BinaryReader.prototype, "readArray", null);
            exports.BinaryReader = BinaryReader;
            function capitalizeFirstLetter(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }
            function serializeField(schema, fieldName, value, fieldType, writer) {
                try {
                    if (typeof fieldType === "string") writer[`write${capitalizeFirstLetter(fieldType)}`](value); else if (fieldType instanceof Array) if (typeof fieldType[0] === "number") {
                        if (value.length !== fieldType[0]) throw new BorshError(`Expecting byte array of length ${fieldType[0]}, but got ${value.length} bytes`);
                        writer.writeFixedArray(value);
                    } else if (fieldType.length === 2 && typeof fieldType[1] === "number") {
                        if (value.length !== fieldType[1]) throw new BorshError(`Expecting byte array of length ${fieldType[1]}, but got ${value.length} bytes`);
                        for (let i = 0; i < fieldType[1]; i++) serializeField(schema, null, value[i], fieldType[0], writer);
                    } else writer.writeArray(value, (item => {
                        serializeField(schema, fieldName, item, fieldType[0], writer);
                    })); else if (fieldType.kind !== void 0) switch (fieldType.kind) {
                      case "option":
                        if (value === null || value === void 0) writer.writeU8(0); else {
                            writer.writeU8(1);
                            serializeField(schema, fieldName, value, fieldType.type, writer);
                        }
                        break;

                      case "map":
                        writer.writeU32(value.size);
                        value.forEach(((val, key) => {
                            serializeField(schema, fieldName, key, fieldType.key, writer);
                            serializeField(schema, fieldName, val, fieldType.value, writer);
                        }));
                        break;

                      default:
                        throw new BorshError(`FieldType ${fieldType} unrecognized`);
                    } else serializeStruct(schema, value, writer);
                } catch (error) {
                    if (error instanceof BorshError) error.addToFieldPath(fieldName);
                    throw error;
                }
            }
            function serializeStruct(schema, obj, writer) {
                if (typeof obj.borshSerialize === "function") {
                    obj.borshSerialize(writer);
                    return;
                }
                const structSchema = schema.get(obj.constructor);
                if (!structSchema) throw new BorshError(`Class ${obj.constructor.name} is missing in schema`);
                if (structSchema.kind === "struct") structSchema.fields.map((([fieldName, fieldType]) => {
                    serializeField(schema, fieldName, obj[fieldName], fieldType, writer);
                })); else if (structSchema.kind === "enum") {
                    const name = obj[structSchema.field];
                    for (let idx = 0; idx < structSchema.values.length; ++idx) {
                        const [fieldName, fieldType] = structSchema.values[idx];
                        if (fieldName === name) {
                            writer.writeU8(idx);
                            serializeField(schema, fieldName, obj[fieldName], fieldType, writer);
                            break;
                        }
                    }
                } else throw new BorshError(`Unexpected schema kind: ${structSchema.kind} for ${obj.constructor.name}`);
            }
            function serialize(schema, obj, Writer = BinaryWriter) {
                const writer = new Writer;
                serializeStruct(schema, obj, writer);
                return writer.toArray();
            }
            exports.serialize = serialize;
            function deserializeField(schema, fieldName, fieldType, reader) {
                try {
                    if (typeof fieldType === "string") return reader[`read${capitalizeFirstLetter(fieldType)}`]();
                    if (fieldType instanceof Array) if (typeof fieldType[0] === "number") return reader.readFixedArray(fieldType[0]); else if (typeof fieldType[1] === "number") {
                        const arr = [];
                        for (let i = 0; i < fieldType[1]; i++) arr.push(deserializeField(schema, null, fieldType[0], reader));
                        return arr;
                    } else return reader.readArray((() => deserializeField(schema, fieldName, fieldType[0], reader)));
                    if (fieldType.kind === "option") {
                        const option = reader.readU8();
                        if (option) return deserializeField(schema, fieldName, fieldType.type, reader);
                        return;
                    }
                    if (fieldType.kind === "map") {
                        let map = new Map;
                        const length = reader.readU32();
                        for (let i = 0; i < length; i++) {
                            const key = deserializeField(schema, fieldName, fieldType.key, reader);
                            const val = deserializeField(schema, fieldName, fieldType.value, reader);
                            map.set(key, val);
                        }
                        return map;
                    }
                    return deserializeStruct(schema, fieldType, reader);
                } catch (error) {
                    if (error instanceof BorshError) error.addToFieldPath(fieldName);
                    throw error;
                }
            }
            function deserializeStruct(schema, classType, reader) {
                if (typeof classType.borshDeserialize === "function") return classType.borshDeserialize(reader);
                const structSchema = schema.get(classType);
                if (!structSchema) throw new BorshError(`Class ${classType.name} is missing in schema`);
                if (structSchema.kind === "struct") {
                    const result = {};
                    for (const [fieldName, fieldType] of schema.get(classType).fields) result[fieldName] = deserializeField(schema, fieldName, fieldType, reader);
                    return new classType(result);
                }
                if (structSchema.kind === "enum") {
                    const idx = reader.readU8();
                    if (idx >= structSchema.values.length) throw new BorshError(`Enum index: ${idx} is out of range`);
                    const [fieldName, fieldType] = structSchema.values[idx];
                    const fieldValue = deserializeField(schema, fieldName, fieldType, reader);
                    return new classType({
                        [fieldName]: fieldValue
                    });
                }
                throw new BorshError(`Unexpected schema kind: ${structSchema.kind} for ${classType.constructor.name}`);
            }
            function deserialize(schema, classType, buffer, Reader = BinaryReader) {
                const reader = new Reader(buffer);
                const result = deserializeStruct(schema, classType, reader);
                if (reader.offset < buffer.length) throw new BorshError(`Unexpected ${buffer.length - reader.offset} bytes after deserialized data`);
                return result;
            }
            exports.deserialize = deserialize;
            function deserializeUnchecked(schema, classType, buffer, Reader = BinaryReader) {
                const reader = new Reader(buffer);
                return deserializeStruct(schema, classType, reader);
            }
            exports.deserializeUnchecked = deserializeUnchecked;
        },
        462: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var _Buffer = __webpack_require__(861).Buffer;
            function base(ALPHABET) {
                if (ALPHABET.length >= 255) throw new TypeError("Alphabet too long");
                var BASE_MAP = new Uint8Array(256);
                for (var j = 0; j < BASE_MAP.length; j++) BASE_MAP[j] = 255;
                for (var i = 0; i < ALPHABET.length; i++) {
                    var x = ALPHABET.charAt(i);
                    var xc = x.charCodeAt(0);
                    if (BASE_MAP[xc] !== 255) throw new TypeError(x + " is ambiguous");
                    BASE_MAP[xc] = i;
                }
                var BASE = ALPHABET.length;
                var LEADER = ALPHABET.charAt(0);
                var FACTOR = Math.log(BASE) / Math.log(256);
                var iFACTOR = Math.log(256) / Math.log(BASE);
                function encode(source) {
                    if (Array.isArray(source) || source instanceof Uint8Array) source = _Buffer.from(source);
                    if (!_Buffer.isBuffer(source)) throw new TypeError("Expected Buffer");
                    if (source.length === 0) return "";
                    var zeroes = 0;
                    var length = 0;
                    var pbegin = 0;
                    var pend = source.length;
                    while (pbegin !== pend && source[pbegin] === 0) {
                        pbegin++;
                        zeroes++;
                    }
                    var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
                    var b58 = new Uint8Array(size);
                    while (pbegin !== pend) {
                        var carry = source[pbegin];
                        var i = 0;
                        for (var it1 = size - 1; (carry !== 0 || i < length) && it1 !== -1; it1--, i++) {
                            carry += 256 * b58[it1] >>> 0;
                            b58[it1] = carry % BASE >>> 0;
                            carry = carry / BASE >>> 0;
                        }
                        if (carry !== 0) throw new Error("Non-zero carry");
                        length = i;
                        pbegin++;
                    }
                    var it2 = size - length;
                    while (it2 !== size && b58[it2] === 0) it2++;
                    var str = LEADER.repeat(zeroes);
                    for (;it2 < size; ++it2) str += ALPHABET.charAt(b58[it2]);
                    return str;
                }
                function decodeUnsafe(source) {
                    if (typeof source !== "string") throw new TypeError("Expected String");
                    if (source.length === 0) return _Buffer.alloc(0);
                    var psz = 0;
                    var zeroes = 0;
                    var length = 0;
                    while (source[psz] === LEADER) {
                        zeroes++;
                        psz++;
                    }
                    var size = (source.length - psz) * FACTOR + 1 >>> 0;
                    var b256 = new Uint8Array(size);
                    while (source[psz]) {
                        var carry = BASE_MAP[source.charCodeAt(psz)];
                        if (carry === 255) return;
                        var i = 0;
                        for (var it3 = size - 1; (carry !== 0 || i < length) && it3 !== -1; it3--, i++) {
                            carry += BASE * b256[it3] >>> 0;
                            b256[it3] = carry % 256 >>> 0;
                            carry = carry / 256 >>> 0;
                        }
                        if (carry !== 0) throw new Error("Non-zero carry");
                        length = i;
                        psz++;
                    }
                    var it4 = size - length;
                    while (it4 !== size && b256[it4] === 0) it4++;
                    var vch = _Buffer.allocUnsafe(zeroes + (size - it4));
                    vch.fill(0, 0, zeroes);
                    var j = zeroes;
                    while (it4 !== size) vch[j++] = b256[it4++];
                    return vch;
                }
                function decode(string) {
                    var buffer = decodeUnsafe(string);
                    if (buffer) return buffer;
                    throw new Error("Non-base" + BASE + " character");
                }
                return {
                    encode,
                    decodeUnsafe,
                    decode
                };
            }
            module.exports = base;
        },
        989: (module, __unused_webpack_exports, __webpack_require__) => {
            var basex = __webpack_require__(462);
            var ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
            module.exports = basex(ALPHABET);
        },
        287: (__unused_webpack_module, exports, __webpack_require__) => {
            "use strict";
            /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */            var base64 = __webpack_require__(526);
            var ieee754 = __webpack_require__(251);
            var customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
            exports.Buffer = Buffer;
            exports.SlowBuffer = SlowBuffer;
            exports.INSPECT_MAX_BYTES = 50;
            var K_MAX_LENGTH = 2147483647;
            exports.kMaxLength = K_MAX_LENGTH;
            Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
            if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") console.error("This browser lacks typed array (Uint8Array) support which is required by " + "`buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
            function typedArraySupport() {
                try {
                    var arr = new Uint8Array(1);
                    var proto = {
                        foo: function() {
                            return 42;
                        }
                    };
                    Object.setPrototypeOf(proto, Uint8Array.prototype);
                    Object.setPrototypeOf(arr, proto);
                    return arr.foo() === 42;
                } catch (e) {
                    return false;
                }
            }
            Object.defineProperty(Buffer.prototype, "parent", {
                enumerable: true,
                get: function() {
                    if (!Buffer.isBuffer(this)) return;
                    return this.buffer;
                }
            });
            Object.defineProperty(Buffer.prototype, "offset", {
                enumerable: true,
                get: function() {
                    if (!Buffer.isBuffer(this)) return;
                    return this.byteOffset;
                }
            });
            function createBuffer(length) {
                if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
                var buf = new Uint8Array(length);
                Object.setPrototypeOf(buf, Buffer.prototype);
                return buf;
            }
            function Buffer(arg, encodingOrOffset, length) {
                if (typeof arg === "number") {
                    if (typeof encodingOrOffset === "string") throw new TypeError('The "string" argument must be of type string. Received type number');
                    return allocUnsafe(arg);
                }
                return from(arg, encodingOrOffset, length);
            }
            Buffer.poolSize = 8192;
            function from(value, encodingOrOffset, length) {
                if (typeof value === "string") return fromString(value, encodingOrOffset);
                if (ArrayBuffer.isView(value)) return fromArrayView(value);
                if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof value);
                if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
                if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
                if (typeof value === "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
                var valueOf = value.valueOf && value.valueOf();
                if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
                var b = fromObject(value);
                if (b) return b;
                if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") return Buffer.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof value);
            }
            Buffer.from = function(value, encodingOrOffset, length) {
                return from(value, encodingOrOffset, length);
            };
            Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
            Object.setPrototypeOf(Buffer, Uint8Array);
            function assertSize(size) {
                if (typeof size !== "number") throw new TypeError('"size" argument must be of type number'); else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
            }
            function alloc(size, fill, encoding) {
                assertSize(size);
                if (size <= 0) return createBuffer(size);
                if (fill !== void 0) return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
                return createBuffer(size);
            }
            Buffer.alloc = function(size, fill, encoding) {
                return alloc(size, fill, encoding);
            };
            function allocUnsafe(size) {
                assertSize(size);
                return createBuffer(size < 0 ? 0 : checked(size) | 0);
            }
            Buffer.allocUnsafe = function(size) {
                return allocUnsafe(size);
            };
            Buffer.allocUnsafeSlow = function(size) {
                return allocUnsafe(size);
            };
            function fromString(string, encoding) {
                if (typeof encoding !== "string" || encoding === "") encoding = "utf8";
                if (!Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
                var length = byteLength(string, encoding) | 0;
                var buf = createBuffer(length);
                var actual = buf.write(string, encoding);
                if (actual !== length) buf = buf.slice(0, actual);
                return buf;
            }
            function fromArrayLike(array) {
                var length = array.length < 0 ? 0 : checked(array.length) | 0;
                var buf = createBuffer(length);
                for (var i = 0; i < length; i += 1) buf[i] = array[i] & 255;
                return buf;
            }
            function fromArrayView(arrayView) {
                if (isInstance(arrayView, Uint8Array)) {
                    var copy = new Uint8Array(arrayView);
                    return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
                }
                return fromArrayLike(arrayView);
            }
            function fromArrayBuffer(array, byteOffset, length) {
                if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
                if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
                var buf;
                if (byteOffset === void 0 && length === void 0) buf = new Uint8Array(array); else if (length === void 0) buf = new Uint8Array(array, byteOffset); else buf = new Uint8Array(array, byteOffset, length);
                Object.setPrototypeOf(buf, Buffer.prototype);
                return buf;
            }
            function fromObject(obj) {
                if (Buffer.isBuffer(obj)) {
                    var len = checked(obj.length) | 0;
                    var buf = createBuffer(len);
                    if (buf.length === 0) return buf;
                    obj.copy(buf, 0, 0, len);
                    return buf;
                }
                if (obj.length !== void 0) {
                    if (typeof obj.length !== "number" || numberIsNaN(obj.length)) return createBuffer(0);
                    return fromArrayLike(obj);
                }
                if (obj.type === "Buffer" && Array.isArray(obj.data)) return fromArrayLike(obj.data);
            }
            function checked(length) {
                if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum " + "size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
                return length | 0;
            }
            function SlowBuffer(length) {
                if (+length != length) length = 0;
                return Buffer.alloc(+length);
            }
            Buffer.isBuffer = function isBuffer(b) {
                return b != null && b._isBuffer === true && b !== Buffer.prototype;
            };
            Buffer.compare = function compare(a, b) {
                if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
                if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
                if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (a === b) return 0;
                var x = a.length;
                var y = b.length;
                for (var i = 0, len = Math.min(x, y); i < len; ++i) if (a[i] !== b[i]) {
                    x = a[i];
                    y = b[i];
                    break;
                }
                if (x < y) return -1;
                if (y < x) return 1;
                return 0;
            };
            Buffer.isEncoding = function isEncoding(encoding) {
                switch (String(encoding).toLowerCase()) {
                  case "hex":
                  case "utf8":
                  case "utf-8":
                  case "ascii":
                  case "latin1":
                  case "binary":
                  case "base64":
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return true;

                  default:
                    return false;
                }
            };
            Buffer.concat = function concat(list, length) {
                if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (list.length === 0) return Buffer.alloc(0);
                var i;
                if (length === void 0) {
                    length = 0;
                    for (i = 0; i < list.length; ++i) length += list[i].length;
                }
                var buffer = Buffer.allocUnsafe(length);
                var pos = 0;
                for (i = 0; i < list.length; ++i) {
                    var buf = list[i];
                    if (isInstance(buf, Uint8Array)) if (pos + buf.length > buffer.length) Buffer.from(buf).copy(buffer, pos); else Uint8Array.prototype.set.call(buffer, buf, pos); else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers'); else buf.copy(buffer, pos);
                    pos += buf.length;
                }
                return buffer;
            };
            function byteLength(string, encoding) {
                if (Buffer.isBuffer(string)) return string.length;
                if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
                if (typeof string !== "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' + "Received type " + typeof string);
                var len = string.length;
                var mustMatch = arguments.length > 2 && arguments[2] === true;
                if (!mustMatch && len === 0) return 0;
                var loweredCase = false;
                for (;;) switch (encoding) {
                  case "ascii":
                  case "latin1":
                  case "binary":
                    return len;

                  case "utf8":
                  case "utf-8":
                    return utf8ToBytes(string).length;

                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return len * 2;

                  case "hex":
                    return len >>> 1;

                  case "base64":
                    return base64ToBytes(string).length;

                  default:
                    if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length;
                    encoding = ("" + encoding).toLowerCase();
                    loweredCase = true;
                }
            }
            Buffer.byteLength = byteLength;
            function slowToString(encoding, start, end) {
                var loweredCase = false;
                if (start === void 0 || start < 0) start = 0;
                if (start > this.length) return "";
                if (end === void 0 || end > this.length) end = this.length;
                if (end <= 0) return "";
                end >>>= 0;
                start >>>= 0;
                if (end <= start) return "";
                if (!encoding) encoding = "utf8";
                while (true) switch (encoding) {
                  case "hex":
                    return hexSlice(this, start, end);

                  case "utf8":
                  case "utf-8":
                    return utf8Slice(this, start, end);

                  case "ascii":
                    return asciiSlice(this, start, end);

                  case "latin1":
                  case "binary":
                    return latin1Slice(this, start, end);

                  case "base64":
                    return base64Slice(this, start, end);

                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return utf16leSlice(this, start, end);

                  default:
                    if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
                    encoding = (encoding + "").toLowerCase();
                    loweredCase = true;
                }
            }
            Buffer.prototype._isBuffer = true;
            function swap(b, n, m) {
                var i = b[n];
                b[n] = b[m];
                b[m] = i;
            }
            Buffer.prototype.swap16 = function swap16() {
                var len = this.length;
                if (len % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var i = 0; i < len; i += 2) swap(this, i, i + 1);
                return this;
            };
            Buffer.prototype.swap32 = function swap32() {
                var len = this.length;
                if (len % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var i = 0; i < len; i += 4) {
                    swap(this, i, i + 3);
                    swap(this, i + 1, i + 2);
                }
                return this;
            };
            Buffer.prototype.swap64 = function swap64() {
                var len = this.length;
                if (len % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var i = 0; i < len; i += 8) {
                    swap(this, i, i + 7);
                    swap(this, i + 1, i + 6);
                    swap(this, i + 2, i + 5);
                    swap(this, i + 3, i + 4);
                }
                return this;
            };
            Buffer.prototype.toString = function toString() {
                var length = this.length;
                if (length === 0) return "";
                if (arguments.length === 0) return utf8Slice(this, 0, length);
                return slowToString.apply(this, arguments);
            };
            Buffer.prototype.toLocaleString = Buffer.prototype.toString;
            Buffer.prototype.equals = function equals(b) {
                if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
                if (this === b) return true;
                return Buffer.compare(this, b) === 0;
            };
            Buffer.prototype.inspect = function inspect() {
                var str = "";
                var max = exports.INSPECT_MAX_BYTES;
                str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
                if (this.length > max) str += " ... ";
                return "<Buffer " + str + ">";
            };
            if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
            Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
                if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
                if (!Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. ' + "Received type " + typeof target);
                if (start === void 0) start = 0;
                if (end === void 0) end = target ? target.length : 0;
                if (thisStart === void 0) thisStart = 0;
                if (thisEnd === void 0) thisEnd = this.length;
                if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
                if (thisStart >= thisEnd && start >= end) return 0;
                if (thisStart >= thisEnd) return -1;
                if (start >= end) return 1;
                start >>>= 0;
                end >>>= 0;
                thisStart >>>= 0;
                thisEnd >>>= 0;
                if (this === target) return 0;
                var x = thisEnd - thisStart;
                var y = end - start;
                var len = Math.min(x, y);
                var thisCopy = this.slice(thisStart, thisEnd);
                var targetCopy = target.slice(start, end);
                for (var i = 0; i < len; ++i) if (thisCopy[i] !== targetCopy[i]) {
                    x = thisCopy[i];
                    y = targetCopy[i];
                    break;
                }
                if (x < y) return -1;
                if (y < x) return 1;
                return 0;
            };
            function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
                if (buffer.length === 0) return -1;
                if (typeof byteOffset === "string") {
                    encoding = byteOffset;
                    byteOffset = 0;
                } else if (byteOffset > 2147483647) byteOffset = 2147483647; else if (byteOffset < -2147483648) byteOffset = -2147483648;
                byteOffset = +byteOffset;
                if (numberIsNaN(byteOffset)) byteOffset = dir ? 0 : buffer.length - 1;
                if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
                if (byteOffset >= buffer.length) if (dir) return -1; else byteOffset = buffer.length - 1; else if (byteOffset < 0) if (dir) byteOffset = 0; else return -1;
                if (typeof val === "string") val = Buffer.from(val, encoding);
                if (Buffer.isBuffer(val)) {
                    if (val.length === 0) return -1;
                    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
                } else if (typeof val === "number") {
                    val &= 255;
                    if (typeof Uint8Array.prototype.indexOf === "function") if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset); else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
                    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir);
                }
                throw new TypeError("val must be string, number or Buffer");
            }
            function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
                var indexSize = 1;
                var arrLength = arr.length;
                var valLength = val.length;
                if (encoding !== void 0) {
                    encoding = String(encoding).toLowerCase();
                    if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
                        if (arr.length < 2 || val.length < 2) return -1;
                        indexSize = 2;
                        arrLength /= 2;
                        valLength /= 2;
                        byteOffset /= 2;
                    }
                }
                function read(buf, i) {
                    if (indexSize === 1) return buf[i]; else return buf.readUInt16BE(i * indexSize);
                }
                var i;
                if (dir) {
                    var foundIndex = -1;
                    for (i = byteOffset; i < arrLength; i++) if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
                        if (foundIndex === -1) foundIndex = i;
                        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
                    } else {
                        if (foundIndex !== -1) i -= i - foundIndex;
                        foundIndex = -1;
                    }
                } else {
                    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
                    for (i = byteOffset; i >= 0; i--) {
                        var found = true;
                        for (var j = 0; j < valLength; j++) if (read(arr, i + j) !== read(val, j)) {
                            found = false;
                            break;
                        }
                        if (found) return i;
                    }
                }
                return -1;
            }
            Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
                return this.indexOf(val, byteOffset, encoding) !== -1;
            };
            Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
                return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
            };
            Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
                return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
            };
            function hexWrite(buf, string, offset, length) {
                offset = Number(offset) || 0;
                var remaining = buf.length - offset;
                if (!length) length = remaining; else {
                    length = Number(length);
                    if (length > remaining) length = remaining;
                }
                var strLen = string.length;
                if (length > strLen / 2) length = strLen / 2;
                for (var i = 0; i < length; ++i) {
                    var parsed = parseInt(string.substr(i * 2, 2), 16);
                    if (numberIsNaN(parsed)) return i;
                    buf[offset + i] = parsed;
                }
                return i;
            }
            function utf8Write(buf, string, offset, length) {
                return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
            }
            function asciiWrite(buf, string, offset, length) {
                return blitBuffer(asciiToBytes(string), buf, offset, length);
            }
            function base64Write(buf, string, offset, length) {
                return blitBuffer(base64ToBytes(string), buf, offset, length);
            }
            function ucs2Write(buf, string, offset, length) {
                return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
            }
            Buffer.prototype.write = function write(string, offset, length, encoding) {
                if (offset === void 0) {
                    encoding = "utf8";
                    length = this.length;
                    offset = 0;
                } else if (length === void 0 && typeof offset === "string") {
                    encoding = offset;
                    length = this.length;
                    offset = 0;
                } else if (isFinite(offset)) {
                    offset >>>= 0;
                    if (isFinite(length)) {
                        length >>>= 0;
                        if (encoding === void 0) encoding = "utf8";
                    } else {
                        encoding = length;
                        length = void 0;
                    }
                } else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                var remaining = this.length - offset;
                if (length === void 0 || length > remaining) length = remaining;
                if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                if (!encoding) encoding = "utf8";
                var loweredCase = false;
                for (;;) switch (encoding) {
                  case "hex":
                    return hexWrite(this, string, offset, length);

                  case "utf8":
                  case "utf-8":
                    return utf8Write(this, string, offset, length);

                  case "ascii":
                  case "latin1":
                  case "binary":
                    return asciiWrite(this, string, offset, length);

                  case "base64":
                    return base64Write(this, string, offset, length);

                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return ucs2Write(this, string, offset, length);

                  default:
                    if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
                    encoding = ("" + encoding).toLowerCase();
                    loweredCase = true;
                }
            };
            Buffer.prototype.toJSON = function toJSON() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                };
            };
            function base64Slice(buf, start, end) {
                if (start === 0 && end === buf.length) return base64.fromByteArray(buf); else return base64.fromByteArray(buf.slice(start, end));
            }
            function utf8Slice(buf, start, end) {
                end = Math.min(buf.length, end);
                var res = [];
                var i = start;
                while (i < end) {
                    var firstByte = buf[i];
                    var codePoint = null;
                    var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
                    if (i + bytesPerSequence <= end) {
                        var secondByte, thirdByte, fourthByte, tempCodePoint;
                        switch (bytesPerSequence) {
                          case 1:
                            if (firstByte < 128) codePoint = firstByte;
                            break;

                          case 2:
                            secondByte = buf[i + 1];
                            if ((secondByte & 192) === 128) {
                                tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                                if (tempCodePoint > 127) codePoint = tempCodePoint;
                            }
                            break;

                          case 3:
                            secondByte = buf[i + 1];
                            thirdByte = buf[i + 2];
                            if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                                tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                                if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) codePoint = tempCodePoint;
                            }
                            break;

                          case 4:
                            secondByte = buf[i + 1];
                            thirdByte = buf[i + 2];
                            fourthByte = buf[i + 3];
                            if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                                tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                                if (tempCodePoint > 65535 && tempCodePoint < 1114112) codePoint = tempCodePoint;
                            }
                        }
                    }
                    if (codePoint === null) {
                        codePoint = 65533;
                        bytesPerSequence = 1;
                    } else if (codePoint > 65535) {
                        codePoint -= 65536;
                        res.push(codePoint >>> 10 & 1023 | 55296);
                        codePoint = 56320 | codePoint & 1023;
                    }
                    res.push(codePoint);
                    i += bytesPerSequence;
                }
                return decodeCodePointsArray(res);
            }
            var MAX_ARGUMENTS_LENGTH = 4096;
            function decodeCodePointsArray(codePoints) {
                var len = codePoints.length;
                if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints);
                var res = "";
                var i = 0;
                while (i < len) res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
                return res;
            }
            function asciiSlice(buf, start, end) {
                var ret = "";
                end = Math.min(buf.length, end);
                for (var i = start; i < end; ++i) ret += String.fromCharCode(buf[i] & 127);
                return ret;
            }
            function latin1Slice(buf, start, end) {
                var ret = "";
                end = Math.min(buf.length, end);
                for (var i = start; i < end; ++i) ret += String.fromCharCode(buf[i]);
                return ret;
            }
            function hexSlice(buf, start, end) {
                var len = buf.length;
                if (!start || start < 0) start = 0;
                if (!end || end < 0 || end > len) end = len;
                var out = "";
                for (var i = start; i < end; ++i) out += hexSliceLookupTable[buf[i]];
                return out;
            }
            function utf16leSlice(buf, start, end) {
                var bytes = buf.slice(start, end);
                var res = "";
                for (var i = 0; i < bytes.length - 1; i += 2) res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
                return res;
            }
            Buffer.prototype.slice = function slice(start, end) {
                var len = this.length;
                start = ~~start;
                end = end === void 0 ? len : ~~end;
                if (start < 0) {
                    start += len;
                    if (start < 0) start = 0;
                } else if (start > len) start = len;
                if (end < 0) {
                    end += len;
                    if (end < 0) end = 0;
                } else if (end > len) end = len;
                if (end < start) end = start;
                var newBuf = this.subarray(start, end);
                Object.setPrototypeOf(newBuf, Buffer.prototype);
                return newBuf;
            };
            function checkOffset(offset, ext, length) {
                if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
                if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
            }
            Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
                offset >>>= 0;
                byteLength >>>= 0;
                if (!noAssert) checkOffset(offset, byteLength, this.length);
                var val = this[offset];
                var mul = 1;
                var i = 0;
                while (++i < byteLength && (mul *= 256)) val += this[offset + i] * mul;
                return val;
            };
            Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
                offset >>>= 0;
                byteLength >>>= 0;
                if (!noAssert) checkOffset(offset, byteLength, this.length);
                var val = this[offset + --byteLength];
                var mul = 1;
                while (byteLength > 0 && (mul *= 256)) val += this[offset + --byteLength] * mul;
                return val;
            };
            Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
                offset >>>= 0;
                if (!noAssert) checkOffset(offset, 1, this.length);
                return this[offset];
            };
            Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
                offset >>>= 0;
                if (!noAssert) checkOffset(offset, 2, this.length);
                return this[offset] | this[offset + 1] << 8;
            };
            Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
                offset >>>= 0;
                if (!noAssert) checkOffset(offset, 2, this.length);
                return this[offset] << 8 | this[offset + 1];
            };
            Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
                offset >>>= 0;
                if (!noAssert) checkOffset(offset, 4, this.length);
                return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
            };
            Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
                offset >>>= 0;
                if (!noAssert) checkOffset(offset, 4, this.length);
                return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
            };
            Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
                offset >>>= 0;
                byteLength >>>= 0;
                if (!noAssert) checkOffset(offset, byteLength, this.length);
                var val = this[offset];
                var mul = 1;
                var i = 0;
                while (++i < byteLength && (mul *= 256)) val += this[offset + i] * mul;
                mul *= 128;
                if (val >= mul) val -= Math.pow(2, 8 * byteLength);
                return val;
            };
            Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
                offset >>>= 0;
                byteLength >>>= 0;
                if (!noAssert) checkOffset(offset, byteLength, this.length);
                var i = byteLength;
                var mul = 1;
                var val = this[offset + --i];
                while (i > 0 && (mul *= 256)) val += this[offset + --i] * mul;
                mul *= 128;
                if (val >= mul) val -= Math.pow(2, 8 * byteLength);
                return val;
            };
            Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
                offset >>>= 0;
                if (!noAssert) checkOffset(offset, 1, this.length);
                if (!(this[offset] & 128)) return this[offset];
                return (255 - this[offset] + 1) * -1;
            };
            Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
                offset >>>= 0;
                if (!noAssert) checkOffset(offset, 2, this.length);
                var val = this[offset] | this[offset + 1] << 8;
                return val & 32768 ? val | 4294901760 : val;
            };
            Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
                offset >>>= 0;
                if (!noAssert) checkOffset(offset, 2, this.length);
                var val = this[offset + 1] | this[offset] << 8;
                return val & 32768 ? val | 4294901760 : val;
            };
            Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
                offset >>>= 0;
                if (!noAssert) checkOffset(offset, 4, this.length);
                return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
            };
            Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
                offset >>>= 0;
                if (!noAssert) checkOffset(offset, 4, this.length);
                return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
            };
            Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
                offset >>>= 0;
                if (!noAssert) checkOffset(offset, 4, this.length);
                return ieee754.read(this, offset, true, 23, 4);
            };
            Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
                offset >>>= 0;
                if (!noAssert) checkOffset(offset, 4, this.length);
                return ieee754.read(this, offset, false, 23, 4);
            };
            Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
                offset >>>= 0;
                if (!noAssert) checkOffset(offset, 8, this.length);
                return ieee754.read(this, offset, true, 52, 8);
            };
            Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
                offset >>>= 0;
                if (!noAssert) checkOffset(offset, 8, this.length);
                return ieee754.read(this, offset, false, 52, 8);
            };
            function checkInt(buf, value, offset, ext, max, min) {
                if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
                if (offset + ext > buf.length) throw new RangeError("Index out of range");
            }
            Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
                value = +value;
                offset >>>= 0;
                byteLength >>>= 0;
                if (!noAssert) {
                    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
                    checkInt(this, value, offset, byteLength, maxBytes, 0);
                }
                var mul = 1;
                var i = 0;
                this[offset] = value & 255;
                while (++i < byteLength && (mul *= 256)) this[offset + i] = value / mul & 255;
                return offset + byteLength;
            };
            Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
                value = +value;
                offset >>>= 0;
                byteLength >>>= 0;
                if (!noAssert) {
                    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
                    checkInt(this, value, offset, byteLength, maxBytes, 0);
                }
                var i = byteLength - 1;
                var mul = 1;
                this[offset + i] = value & 255;
                while (--i >= 0 && (mul *= 256)) this[offset + i] = value / mul & 255;
                return offset + byteLength;
            };
            Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
                value = +value;
                offset >>>= 0;
                if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
                this[offset] = value & 255;
                return offset + 1;
            };
            Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
                value = +value;
                offset >>>= 0;
                if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
                this[offset] = value & 255;
                this[offset + 1] = value >>> 8;
                return offset + 2;
            };
            Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
                value = +value;
                offset >>>= 0;
                if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
                this[offset] = value >>> 8;
                this[offset + 1] = value & 255;
                return offset + 2;
            };
            Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
                value = +value;
                offset >>>= 0;
                if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
                this[offset + 3] = value >>> 24;
                this[offset + 2] = value >>> 16;
                this[offset + 1] = value >>> 8;
                this[offset] = value & 255;
                return offset + 4;
            };
            Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
                value = +value;
                offset >>>= 0;
                if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
                this[offset] = value >>> 24;
                this[offset + 1] = value >>> 16;
                this[offset + 2] = value >>> 8;
                this[offset + 3] = value & 255;
                return offset + 4;
            };
            Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
                value = +value;
                offset >>>= 0;
                if (!noAssert) {
                    var limit = Math.pow(2, 8 * byteLength - 1);
                    checkInt(this, value, offset, byteLength, limit - 1, -limit);
                }
                var i = 0;
                var mul = 1;
                var sub = 0;
                this[offset] = value & 255;
                while (++i < byteLength && (mul *= 256)) {
                    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
                    this[offset + i] = (value / mul >> 0) - sub & 255;
                }
                return offset + byteLength;
            };
            Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
                value = +value;
                offset >>>= 0;
                if (!noAssert) {
                    var limit = Math.pow(2, 8 * byteLength - 1);
                    checkInt(this, value, offset, byteLength, limit - 1, -limit);
                }
                var i = byteLength - 1;
                var mul = 1;
                var sub = 0;
                this[offset + i] = value & 255;
                while (--i >= 0 && (mul *= 256)) {
                    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
                    this[offset + i] = (value / mul >> 0) - sub & 255;
                }
                return offset + byteLength;
            };
            Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
                value = +value;
                offset >>>= 0;
                if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
                if (value < 0) value = 255 + value + 1;
                this[offset] = value & 255;
                return offset + 1;
            };
            Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
                value = +value;
                offset >>>= 0;
                if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
                this[offset] = value & 255;
                this[offset + 1] = value >>> 8;
                return offset + 2;
            };
            Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
                value = +value;
                offset >>>= 0;
                if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
                this[offset] = value >>> 8;
                this[offset + 1] = value & 255;
                return offset + 2;
            };
            Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
                value = +value;
                offset >>>= 0;
                if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
                this[offset] = value & 255;
                this[offset + 1] = value >>> 8;
                this[offset + 2] = value >>> 16;
                this[offset + 3] = value >>> 24;
                return offset + 4;
            };
            Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
                value = +value;
                offset >>>= 0;
                if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
                if (value < 0) value = 4294967295 + value + 1;
                this[offset] = value >>> 24;
                this[offset + 1] = value >>> 16;
                this[offset + 2] = value >>> 8;
                this[offset + 3] = value & 255;
                return offset + 4;
            };
            function checkIEEE754(buf, value, offset, ext, max, min) {
                if (offset + ext > buf.length) throw new RangeError("Index out of range");
                if (offset < 0) throw new RangeError("Index out of range");
            }
            function writeFloat(buf, value, offset, littleEndian, noAssert) {
                value = +value;
                offset >>>= 0;
                if (!noAssert) checkIEEE754(buf, value, offset, 4, 34028234663852886e22, -34028234663852886e22);
                ieee754.write(buf, value, offset, littleEndian, 23, 4);
                return offset + 4;
            }
            Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
                return writeFloat(this, value, offset, true, noAssert);
            };
            Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
                return writeFloat(this, value, offset, false, noAssert);
            };
            function writeDouble(buf, value, offset, littleEndian, noAssert) {
                value = +value;
                offset >>>= 0;
                if (!noAssert) checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292);
                ieee754.write(buf, value, offset, littleEndian, 52, 8);
                return offset + 8;
            }
            Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
                return writeDouble(this, value, offset, true, noAssert);
            };
            Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
                return writeDouble(this, value, offset, false, noAssert);
            };
            Buffer.prototype.copy = function copy(target, targetStart, start, end) {
                if (!Buffer.isBuffer(target)) throw new TypeError("argument should be a Buffer");
                if (!start) start = 0;
                if (!end && end !== 0) end = this.length;
                if (targetStart >= target.length) targetStart = target.length;
                if (!targetStart) targetStart = 0;
                if (end > 0 && end < start) end = start;
                if (end === start) return 0;
                if (target.length === 0 || this.length === 0) return 0;
                if (targetStart < 0) throw new RangeError("targetStart out of bounds");
                if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
                if (end < 0) throw new RangeError("sourceEnd out of bounds");
                if (end > this.length) end = this.length;
                if (target.length - targetStart < end - start) end = target.length - targetStart + start;
                var len = end - start;
                if (this === target && typeof Uint8Array.prototype.copyWithin === "function") this.copyWithin(targetStart, start, end); else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
                return len;
            };
            Buffer.prototype.fill = function fill(val, start, end, encoding) {
                if (typeof val === "string") {
                    if (typeof start === "string") {
                        encoding = start;
                        start = 0;
                        end = this.length;
                    } else if (typeof end === "string") {
                        encoding = end;
                        end = this.length;
                    }
                    if (encoding !== void 0 && typeof encoding !== "string") throw new TypeError("encoding must be a string");
                    if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
                    if (val.length === 1) {
                        var code = val.charCodeAt(0);
                        if (encoding === "utf8" && code < 128 || encoding === "latin1") val = code;
                    }
                } else if (typeof val === "number") val &= 255; else if (typeof val === "boolean") val = Number(val);
                if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
                if (end <= start) return this;
                start >>>= 0;
                end = end === void 0 ? this.length : end >>> 0;
                if (!val) val = 0;
                var i;
                if (typeof val === "number") for (i = start; i < end; ++i) this[i] = val; else {
                    var bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
                    var len = bytes.length;
                    if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
                    for (i = 0; i < end - start; ++i) this[i + start] = bytes[i % len];
                }
                return this;
            };
            var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
            function base64clean(str) {
                str = str.split("=")[0];
                str = str.trim().replace(INVALID_BASE64_RE, "");
                if (str.length < 2) return "";
                while (str.length % 4 !== 0) str += "=";
                return str;
            }
            function utf8ToBytes(string, units) {
                units = units || 1 / 0;
                var codePoint;
                var length = string.length;
                var leadSurrogate = null;
                var bytes = [];
                for (var i = 0; i < length; ++i) {
                    codePoint = string.charCodeAt(i);
                    if (codePoint > 55295 && codePoint < 57344) {
                        if (!leadSurrogate) {
                            if (codePoint > 56319) {
                                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                                continue;
                            } else if (i + 1 === length) {
                                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                                continue;
                            }
                            leadSurrogate = codePoint;
                            continue;
                        }
                        if (codePoint < 56320) {
                            if ((units -= 3) > -1) bytes.push(239, 191, 189);
                            leadSurrogate = codePoint;
                            continue;
                        }
                        codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
                    } else if (leadSurrogate) if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    leadSurrogate = null;
                    if (codePoint < 128) {
                        if ((units -= 1) < 0) break;
                        bytes.push(codePoint);
                    } else if (codePoint < 2048) {
                        if ((units -= 2) < 0) break;
                        bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
                    } else if (codePoint < 65536) {
                        if ((units -= 3) < 0) break;
                        bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
                    } else if (codePoint < 1114112) {
                        if ((units -= 4) < 0) break;
                        bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
                    } else throw new Error("Invalid code point");
                }
                return bytes;
            }
            function asciiToBytes(str) {
                var byteArray = [];
                for (var i = 0; i < str.length; ++i) byteArray.push(str.charCodeAt(i) & 255);
                return byteArray;
            }
            function utf16leToBytes(str, units) {
                var c, hi, lo;
                var byteArray = [];
                for (var i = 0; i < str.length; ++i) {
                    if ((units -= 2) < 0) break;
                    c = str.charCodeAt(i);
                    hi = c >> 8;
                    lo = c % 256;
                    byteArray.push(lo);
                    byteArray.push(hi);
                }
                return byteArray;
            }
            function base64ToBytes(str) {
                return base64.toByteArray(base64clean(str));
            }
            function blitBuffer(src, dst, offset, length) {
                for (var i = 0; i < length; ++i) {
                    if (i + offset >= dst.length || i >= src.length) break;
                    dst[i + offset] = src[i];
                }
                return i;
            }
            function isInstance(obj, type) {
                return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
            }
            function numberIsNaN(obj) {
                return obj !== obj;
            }
            var hexSliceLookupTable = function() {
                var alphabet = "0123456789abcdef";
                var table = new Array(256);
                for (var i = 0; i < 16; ++i) {
                    var i16 = i * 16;
                    for (var j = 0; j < 16; ++j) table[i16 + j] = alphabet[i] + alphabet[j];
                }
                return table;
            }();
        },
        228: module => {
            "use strict";
            var has = Object.prototype.hasOwnProperty, prefix = "~";
            function Events() {}
            if (Object.create) {
                Events.prototype = Object.create(null);
                if (!(new Events).__proto__) prefix = false;
            }
            function EE(fn, context, once) {
                this.fn = fn;
                this.context = context;
                this.once = once || false;
            }
            function addListener(emitter, event, fn, context, once) {
                if (typeof fn !== "function") throw new TypeError("The listener must be a function");
                var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
                if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++; else if (!emitter._events[evt].fn) emitter._events[evt].push(listener); else emitter._events[evt] = [ emitter._events[evt], listener ];
                return emitter;
            }
            function clearEvent(emitter, evt) {
                if (--emitter._eventsCount === 0) emitter._events = new Events; else delete emitter._events[evt];
            }
            function EventEmitter() {
                this._events = new Events;
                this._eventsCount = 0;
            }
            EventEmitter.prototype.eventNames = function eventNames() {
                var events, name, names = [];
                if (this._eventsCount === 0) return names;
                for (name in events = this._events) if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
                if (Object.getOwnPropertySymbols) return names.concat(Object.getOwnPropertySymbols(events));
                return names;
            };
            EventEmitter.prototype.listeners = function listeners(event) {
                var evt = prefix ? prefix + event : event, handlers = this._events[evt];
                if (!handlers) return [];
                if (handlers.fn) return [ handlers.fn ];
                for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) ee[i] = handlers[i].fn;
                return ee;
            };
            EventEmitter.prototype.listenerCount = function listenerCount(event) {
                var evt = prefix ? prefix + event : event, listeners = this._events[evt];
                if (!listeners) return 0;
                if (listeners.fn) return 1;
                return listeners.length;
            };
            EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
                var evt = prefix ? prefix + event : event;
                if (!this._events[evt]) return false;
                var args, i, listeners = this._events[evt], len = arguments.length;
                if (listeners.fn) {
                    if (listeners.once) this.removeListener(event, listeners.fn, void 0, true);
                    switch (len) {
                      case 1:
                        return listeners.fn.call(listeners.context), true;

                      case 2:
                        return listeners.fn.call(listeners.context, a1), true;

                      case 3:
                        return listeners.fn.call(listeners.context, a1, a2), true;

                      case 4:
                        return listeners.fn.call(listeners.context, a1, a2, a3), true;

                      case 5:
                        return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;

                      case 6:
                        return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
                    }
                    for (i = 1, args = new Array(len - 1); i < len; i++) args[i - 1] = arguments[i];
                    listeners.fn.apply(listeners.context, args);
                } else {
                    var j, length = listeners.length;
                    for (i = 0; i < length; i++) {
                        if (listeners[i].once) this.removeListener(event, listeners[i].fn, void 0, true);
                        switch (len) {
                          case 1:
                            listeners[i].fn.call(listeners[i].context);
                            break;

                          case 2:
                            listeners[i].fn.call(listeners[i].context, a1);
                            break;

                          case 3:
                            listeners[i].fn.call(listeners[i].context, a1, a2);
                            break;

                          case 4:
                            listeners[i].fn.call(listeners[i].context, a1, a2, a3);
                            break;

                          default:
                            if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) args[j - 1] = arguments[j];
                            listeners[i].fn.apply(listeners[i].context, args);
                        }
                    }
                }
                return true;
            };
            EventEmitter.prototype.on = function on(event, fn, context) {
                return addListener(this, event, fn, context, false);
            };
            EventEmitter.prototype.once = function once(event, fn, context) {
                return addListener(this, event, fn, context, true);
            };
            EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
                var evt = prefix ? prefix + event : event;
                if (!this._events[evt]) return this;
                if (!fn) {
                    clearEvent(this, evt);
                    return this;
                }
                var listeners = this._events[evt];
                if (listeners.fn) {
                    if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) clearEvent(this, evt);
                } else {
                    for (var i = 0, events = [], length = listeners.length; i < length; i++) if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) events.push(listeners[i]);
                    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events; else clearEvent(this, evt);
                }
                return this;
            };
            EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
                var evt;
                if (event) {
                    evt = prefix ? prefix + event : event;
                    if (this._events[evt]) clearEvent(this, evt);
                } else {
                    this._events = new Events;
                    this._eventsCount = 0;
                }
                return this;
            };
            EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
            EventEmitter.prototype.addListener = EventEmitter.prototype.on;
            EventEmitter.prefixed = prefix;
            EventEmitter.EventEmitter = EventEmitter;
            if (true) module.exports = EventEmitter;
        },
        251: (__unused_webpack_module, exports) => {
            /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
            exports.read = function(buffer, offset, isLE, mLen, nBytes) {
                var e, m;
                var eLen = nBytes * 8 - mLen - 1;
                var eMax = (1 << eLen) - 1;
                var eBias = eMax >> 1;
                var nBits = -7;
                var i = isLE ? nBytes - 1 : 0;
                var d = isLE ? -1 : 1;
                var s = buffer[offset + i];
                i += d;
                e = s & (1 << -nBits) - 1;
                s >>= -nBits;
                nBits += eLen;
                for (;nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) ;
                m = e & (1 << -nBits) - 1;
                e >>= -nBits;
                nBits += mLen;
                for (;nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) ;
                if (e === 0) e = 1 - eBias; else if (e === eMax) return m ? NaN : (s ? -1 : 1) * (1 / 0); else {
                    m += Math.pow(2, mLen);
                    e -= eBias;
                }
                return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
            };
            exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
                var e, m, c;
                var eLen = nBytes * 8 - mLen - 1;
                var eMax = (1 << eLen) - 1;
                var eBias = eMax >> 1;
                var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
                var i = isLE ? 0 : nBytes - 1;
                var d = isLE ? 1 : -1;
                var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
                value = Math.abs(value);
                if (isNaN(value) || value === 1 / 0) {
                    m = isNaN(value) ? 1 : 0;
                    e = eMax;
                } else {
                    e = Math.floor(Math.log(value) / Math.LN2);
                    if (value * (c = Math.pow(2, -e)) < 1) {
                        e--;
                        c *= 2;
                    }
                    if (e + eBias >= 1) value += rt / c; else value += rt * Math.pow(2, 1 - eBias);
                    if (value * c >= 2) {
                        e++;
                        c /= 2;
                    }
                    if (e + eBias >= eMax) {
                        m = 0;
                        e = eMax;
                    } else if (e + eBias >= 1) {
                        m = (value * c - 1) * Math.pow(2, mLen);
                        e += eBias;
                    } else {
                        m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
                        e = 0;
                    }
                }
                for (;mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) ;
                e = e << mLen | m;
                eLen += mLen;
                for (;eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) ;
                buffer[offset + i - d] |= s * 128;
            };
        },
        22: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            const uuid = __webpack_require__(341).v4;
            const generateRequest = __webpack_require__(289);
            const ClientBrowser = function(callServer, options) {
                if (!(this instanceof ClientBrowser)) return new ClientBrowser(callServer, options);
                if (!options) options = {};
                this.options = {
                    reviver: typeof options.reviver !== "undefined" ? options.reviver : null,
                    replacer: typeof options.replacer !== "undefined" ? options.replacer : null,
                    generator: typeof options.generator !== "undefined" ? options.generator : function() {
                        return uuid();
                    },
                    version: typeof options.version !== "undefined" ? options.version : 2,
                    notificationIdNull: typeof options.notificationIdNull === "boolean" ? options.notificationIdNull : false
                };
                this.callServer = callServer;
            };
            module.exports = ClientBrowser;
            ClientBrowser.prototype.request = function(method, params, id, callback) {
                const self = this;
                let request = null;
                const isBatch = Array.isArray(method) && typeof params === "function";
                if (this.options.version === 1 && isBatch) throw new TypeError("JSON-RPC 1.0 does not support batching");
                const isRaw = !isBatch && method && typeof method === "object" && typeof params === "function";
                if (isBatch || isRaw) {
                    callback = params;
                    request = method;
                } else {
                    if (typeof id === "function") {
                        callback = id;
                        id = void 0;
                    }
                    const hasCallback = typeof callback === "function";
                    try {
                        request = generateRequest(method, params, id, {
                            generator: this.options.generator,
                            version: this.options.version,
                            notificationIdNull: this.options.notificationIdNull
                        });
                    } catch (err) {
                        if (hasCallback) return callback(err);
                        throw err;
                    }
                    if (!hasCallback) return request;
                }
                let message;
                try {
                    message = JSON.stringify(request, this.options.replacer);
                } catch (err) {
                    return callback(err);
                }
                this.callServer(message, (function(err, response) {
                    self._parseResponse(err, response, callback);
                }));
                return request;
            };
            ClientBrowser.prototype._parseResponse = function(err, responseText, callback) {
                if (err) {
                    callback(err);
                    return;
                }
                if (!responseText) return callback();
                let response;
                try {
                    response = JSON.parse(responseText, this.options.reviver);
                } catch (err) {
                    return callback(err);
                }
                if (callback.length === 3) if (Array.isArray(response)) {
                    const isError = function(res) {
                        return typeof res.error !== "undefined";
                    };
                    const isNotError = function(res) {
                        return !isError(res);
                    };
                    return callback(null, response.filter(isError), response.filter(isNotError));
                } else return callback(null, response.error, response.result);
                callback(null, response);
            };
        },
        289: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            const uuid = __webpack_require__(341).v4;
            const generateRequest = function(method, params, id, options) {
                if (typeof method !== "string") throw new TypeError(method + " must be a string");
                options = options || {};
                const version = typeof options.version === "number" ? options.version : 2;
                if (version !== 1 && version !== 2) throw new TypeError(version + " must be 1 or 2");
                const request = {
                    method
                };
                if (version === 2) request.jsonrpc = "2.0";
                if (params) {
                    if (typeof params !== "object" && !Array.isArray(params)) throw new TypeError(params + " must be an object, array or omitted");
                    request.params = params;
                }
                if (typeof id === "undefined") {
                    const generator = typeof options.generator === "function" ? options.generator : function() {
                        return uuid();
                    };
                    request.id = generator(request, options);
                } else if (version === 2 && id === null) {
                    if (options.notificationIdNull) request.id = null;
                } else request.id = id;
                return request;
            };
            module.exports = generateRequest;
        },
        809: (__unused_webpack_module, exports, __webpack_require__) => {
            "use strict";
            var _interopRequireDefault = __webpack_require__(994);
            ({
                value: true
            });
            exports.A = void 0;
            var _regenerator = _interopRequireDefault(__webpack_require__(756));
            var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(293));
            var _typeof2 = _interopRequireDefault(__webpack_require__(738));
            var _classCallCheck2 = _interopRequireDefault(__webpack_require__(383));
            var _createClass2 = _interopRequireDefault(__webpack_require__(579));
            var _inherits2 = _interopRequireDefault(__webpack_require__(511));
            var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(452));
            var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(72));
            var _eventemitter = __webpack_require__(228);
            var _utils = __webpack_require__(57);
            function _createSuper(Derived) {
                var hasNativeReflectConstruct = _isNativeReflectConstruct();
                return function _createSuperInternal() {
                    var result, Super = (0, _getPrototypeOf2["default"])(Derived);
                    if (hasNativeReflectConstruct) {
                        var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor;
                        result = Reflect.construct(Super, arguments, NewTarget);
                    } else result = Super.apply(this, arguments);
                    return (0, _possibleConstructorReturn2["default"])(this, result);
                };
            }
            function _isNativeReflectConstruct() {
                if (typeof Reflect === "undefined" || !Reflect.construct) return false;
                if (Reflect.construct.sham) return false;
                if (typeof Proxy === "function") return true;
                try {
                    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                    return true;
                } catch (e) {
                    return false;
                }
            }
            var __rest = void 0 && (void 0).__rest || function(s, e) {
                var t = {};
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function") {
                    var i = 0;
                    for (p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
                }
                return t;
            };
            var CommonClient = function(_EventEmitter) {
                (0, _inherits2["default"])(CommonClient, _EventEmitter);
                var _super = _createSuper(CommonClient);
                function CommonClient(webSocketFactory) {
                    var _this;
                    var address = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "ws://localhost:8080";
                    var _a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                    var generate_request_id = arguments.length > 3 ? arguments[3] : void 0;
                    var dataPack = arguments.length > 4 ? arguments[4] : void 0;
                    (0, _classCallCheck2["default"])(this, CommonClient);
                    var _a$autoconnect = _a.autoconnect, autoconnect = _a$autoconnect === void 0 ? true : _a$autoconnect, _a$reconnect = _a.reconnect, reconnect = _a$reconnect === void 0 ? true : _a$reconnect, _a$reconnect_interval = _a.reconnect_interval, reconnect_interval = _a$reconnect_interval === void 0 ? 1e3 : _a$reconnect_interval, _a$max_reconnects = _a.max_reconnects, max_reconnects = _a$max_reconnects === void 0 ? 5 : _a$max_reconnects, rest_options = __rest(_a, [ "autoconnect", "reconnect", "reconnect_interval", "max_reconnects" ]);
                    _this = _super.call(this);
                    _this.webSocketFactory = webSocketFactory;
                    _this.queue = {};
                    _this.rpc_id = 0;
                    _this.address = address;
                    _this.autoconnect = autoconnect;
                    _this.ready = false;
                    _this.reconnect = reconnect;
                    _this.reconnect_timer_id = void 0;
                    _this.reconnect_interval = reconnect_interval;
                    _this.max_reconnects = max_reconnects;
                    _this.rest_options = rest_options;
                    _this.current_reconnects = 0;
                    _this.generate_request_id = generate_request_id || function() {
                        return ++_this.rpc_id;
                    };
                    if (!dataPack) _this.dataPack = new _utils.DefaultDataPack; else _this.dataPack = dataPack;
                    if (_this.autoconnect) _this._connect(_this.address, Object.assign({
                        autoconnect: _this.autoconnect,
                        reconnect: _this.reconnect,
                        reconnect_interval: _this.reconnect_interval,
                        max_reconnects: _this.max_reconnects
                    }, _this.rest_options));
                    return _this;
                }
                (0, _createClass2["default"])(CommonClient, [ {
                    key: "connect",
                    value: function connect() {
                        if (this.socket) return;
                        this._connect(this.address, Object.assign({
                            autoconnect: this.autoconnect,
                            reconnect: this.reconnect,
                            reconnect_interval: this.reconnect_interval,
                            max_reconnects: this.max_reconnects
                        }, this.rest_options));
                    }
                }, {
                    key: "call",
                    value: function call(method, params, timeout, ws_opts) {
                        var _this2 = this;
                        if (!ws_opts && "object" === (0, _typeof2["default"])(timeout)) {
                            ws_opts = timeout;
                            timeout = null;
                        }
                        return new Promise((function(resolve, reject) {
                            if (!_this2.ready) return reject(new Error("socket not ready"));
                            var rpc_id = _this2.generate_request_id(method, params);
                            var message = {
                                jsonrpc: "2.0",
                                method,
                                params: params || void 0,
                                id: rpc_id
                            };
                            _this2.socket.send(_this2.dataPack.encode(message), ws_opts, (function(error) {
                                if (error) return reject(error);
                                _this2.queue[rpc_id] = {
                                    promise: [ resolve, reject ]
                                };
                                if (timeout) _this2.queue[rpc_id].timeout = setTimeout((function() {
                                    delete _this2.queue[rpc_id];
                                    reject(new Error("reply timeout"));
                                }), timeout);
                            }));
                        }));
                    }
                }, {
                    key: "login",
                    value: function() {
                        var _login = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark((function _callee(params) {
                            var resp;
                            return _regenerator["default"].wrap((function _callee$(_context) {
                                while (1) switch (_context.prev = _context.next) {
                                  case 0:
                                    _context.next = 2;
                                    return this.call("rpc.login", params);

                                  case 2:
                                    resp = _context.sent;
                                    if (resp) {
                                        _context.next = 5;
                                        break;
                                    }
                                    throw new Error("authentication failed");

                                  case 5:
                                    return _context.abrupt("return", resp);

                                  case 6:
                                  case "end":
                                    return _context.stop();
                                }
                            }), _callee, this);
                        })));
                        function login(_x) {
                            return _login.apply(this, arguments);
                        }
                        return login;
                    }()
                }, {
                    key: "listMethods",
                    value: function() {
                        var _listMethods = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark((function _callee2() {
                            return _regenerator["default"].wrap((function _callee2$(_context2) {
                                while (1) switch (_context2.prev = _context2.next) {
                                  case 0:
                                    _context2.next = 2;
                                    return this.call("__listMethods");

                                  case 2:
                                    return _context2.abrupt("return", _context2.sent);

                                  case 3:
                                  case "end":
                                    return _context2.stop();
                                }
                            }), _callee2, this);
                        })));
                        function listMethods() {
                            return _listMethods.apply(this, arguments);
                        }
                        return listMethods;
                    }()
                }, {
                    key: "notify",
                    value: function notify(method, params) {
                        var _this3 = this;
                        return new Promise((function(resolve, reject) {
                            if (!_this3.ready) return reject(new Error("socket not ready"));
                            var message = {
                                jsonrpc: "2.0",
                                method,
                                params
                            };
                            _this3.socket.send(_this3.dataPack.encode(message), (function(error) {
                                if (error) return reject(error);
                                resolve();
                            }));
                        }));
                    }
                }, {
                    key: "subscribe",
                    value: function() {
                        var _subscribe = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark((function _callee3(event) {
                            var result;
                            return _regenerator["default"].wrap((function _callee3$(_context3) {
                                while (1) switch (_context3.prev = _context3.next) {
                                  case 0:
                                    if (typeof event === "string") event = [ event ];
                                    _context3.next = 3;
                                    return this.call("rpc.on", event);

                                  case 3:
                                    result = _context3.sent;
                                    if (!(typeof event === "string" && result[event] !== "ok")) {
                                        _context3.next = 6;
                                        break;
                                    }
                                    throw new Error("Failed subscribing to an event '" + event + "' with: " + result[event]);

                                  case 6:
                                    return _context3.abrupt("return", result);

                                  case 7:
                                  case "end":
                                    return _context3.stop();
                                }
                            }), _callee3, this);
                        })));
                        function subscribe(_x2) {
                            return _subscribe.apply(this, arguments);
                        }
                        return subscribe;
                    }()
                }, {
                    key: "unsubscribe",
                    value: function() {
                        var _unsubscribe = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark((function _callee4(event) {
                            var result;
                            return _regenerator["default"].wrap((function _callee4$(_context4) {
                                while (1) switch (_context4.prev = _context4.next) {
                                  case 0:
                                    if (typeof event === "string") event = [ event ];
                                    _context4.next = 3;
                                    return this.call("rpc.off", event);

                                  case 3:
                                    result = _context4.sent;
                                    if (!(typeof event === "string" && result[event] !== "ok")) {
                                        _context4.next = 6;
                                        break;
                                    }
                                    throw new Error("Failed unsubscribing from an event with: " + result);

                                  case 6:
                                    return _context4.abrupt("return", result);

                                  case 7:
                                  case "end":
                                    return _context4.stop();
                                }
                            }), _callee4, this);
                        })));
                        function unsubscribe(_x3) {
                            return _unsubscribe.apply(this, arguments);
                        }
                        return unsubscribe;
                    }()
                }, {
                    key: "close",
                    value: function close(code, data) {
                        this.socket.close(code || 1e3, data);
                    }
                }, {
                    key: "_connect",
                    value: function _connect(address, options) {
                        var _this4 = this;
                        clearTimeout(this.reconnect_timer_id);
                        this.socket = this.webSocketFactory(address, options);
                        this.socket.addEventListener("open", (function() {
                            _this4.ready = true;
                            _this4.emit("open");
                            _this4.current_reconnects = 0;
                        }));
                        this.socket.addEventListener("message", (function(_ref) {
                            var message = _ref.data;
                            if (message instanceof ArrayBuffer) message = Buffer.from(message).toString();
                            try {
                                message = _this4.dataPack.decode(message);
                            } catch (error) {
                                return;
                            }
                            if (message.notification && _this4.listeners(message.notification).length) {
                                if (!Object.keys(message.params).length) return _this4.emit(message.notification);
                                var args = [ message.notification ];
                                if (message.params.constructor === Object) args.push(message.params); else for (var i = 0; i < message.params.length; i++) args.push(message.params[i]);
                                return Promise.resolve().then((function() {
                                    _this4.emit.apply(_this4, args);
                                }));
                            }
                            if (!_this4.queue[message.id]) {
                                if (message.method) return Promise.resolve().then((function() {
                                    _this4.emit(message.method, message === null || message === void 0 ? void 0 : message.params);
                                }));
                                return;
                            }
                            if ("error" in message === "result" in message) _this4.queue[message.id].promise[1](new Error('Server response malformed. Response must include either "result"' + ' or "error", but not both.'));
                            if (_this4.queue[message.id].timeout) clearTimeout(_this4.queue[message.id].timeout);
                            if (message.error) _this4.queue[message.id].promise[1](message.error); else _this4.queue[message.id].promise[0](message.result);
                            delete _this4.queue[message.id];
                        }));
                        this.socket.addEventListener("error", (function(error) {
                            return _this4.emit("error", error);
                        }));
                        this.socket.addEventListener("close", (function(_ref2) {
                            var code = _ref2.code, reason = _ref2.reason;
                            if (_this4.ready) setTimeout((function() {
                                return _this4.emit("close", code, reason);
                            }), 0);
                            _this4.ready = false;
                            _this4.socket = void 0;
                            if (code === 1e3) return;
                            _this4.current_reconnects++;
                            if (_this4.reconnect && (_this4.max_reconnects > _this4.current_reconnects || _this4.max_reconnects === 0)) _this4.reconnect_timer_id = setTimeout((function() {
                                return _this4._connect(address, options);
                            }), _this4.reconnect_interval);
                        }));
                    }
                } ]);
                return CommonClient;
            }(_eventemitter.EventEmitter);
            exports.A = CommonClient;
        },
        856: (__unused_webpack_module, exports, __webpack_require__) => {
            "use strict";
            var _interopRequireDefault = __webpack_require__(994);
            ({
                value: true
            });
            exports.A = _default;
            var _classCallCheck2 = _interopRequireDefault(__webpack_require__(383));
            var _createClass2 = _interopRequireDefault(__webpack_require__(579));
            var _inherits2 = _interopRequireDefault(__webpack_require__(511));
            var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(452));
            var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(72));
            var _eventemitter = __webpack_require__(228);
            function _createSuper(Derived) {
                var hasNativeReflectConstruct = _isNativeReflectConstruct();
                return function _createSuperInternal() {
                    var result, Super = (0, _getPrototypeOf2["default"])(Derived);
                    if (hasNativeReflectConstruct) {
                        var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor;
                        result = Reflect.construct(Super, arguments, NewTarget);
                    } else result = Super.apply(this, arguments);
                    return (0, _possibleConstructorReturn2["default"])(this, result);
                };
            }
            function _isNativeReflectConstruct() {
                if (typeof Reflect === "undefined" || !Reflect.construct) return false;
                if (Reflect.construct.sham) return false;
                if (typeof Proxy === "function") return true;
                try {
                    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                    return true;
                } catch (e) {
                    return false;
                }
            }
            var WebSocketBrowserImpl = function(_EventEmitter) {
                (0, _inherits2["default"])(WebSocketBrowserImpl, _EventEmitter);
                var _super = _createSuper(WebSocketBrowserImpl);
                function WebSocketBrowserImpl(address, options, protocols) {
                    var _this;
                    (0, _classCallCheck2["default"])(this, WebSocketBrowserImpl);
                    _this = _super.call(this);
                    _this.socket = new window.WebSocket(address, protocols);
                    _this.socket.onopen = function() {
                        return _this.emit("open");
                    };
                    _this.socket.onmessage = function(event) {
                        return _this.emit("message", event.data);
                    };
                    _this.socket.onerror = function(error) {
                        return _this.emit("error", error);
                    };
                    _this.socket.onclose = function(event) {
                        _this.emit("close", event.code, event.reason);
                    };
                    return _this;
                }
                (0, _createClass2["default"])(WebSocketBrowserImpl, [ {
                    key: "send",
                    value: function send(data, optionsOrCallback, callback) {
                        var cb = callback || optionsOrCallback;
                        try {
                            this.socket.send(data);
                            cb();
                        } catch (error) {
                            cb(error);
                        }
                    }
                }, {
                    key: "close",
                    value: function close(code, reason) {
                        this.socket.close(code, reason);
                    }
                }, {
                    key: "addEventListener",
                    value: function addEventListener(type, listener, options) {
                        this.socket.addEventListener(type, listener, options);
                    }
                } ]);
                return WebSocketBrowserImpl;
            }(_eventemitter.EventEmitter);
            function _default(address, options) {
                return new WebSocketBrowserImpl(address, options);
            }
        },
        57: (__unused_webpack_module, exports, __webpack_require__) => {
            "use strict";
            var _interopRequireDefault = __webpack_require__(994);
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.DefaultDataPack = void 0;
            exports.createError = createError;
            var _classCallCheck2 = _interopRequireDefault(__webpack_require__(383));
            var _createClass2 = _interopRequireDefault(__webpack_require__(579));
            var errors = new Map([ [ -32e3, "Event not provided" ], [ -32600, "Invalid Request" ], [ -32601, "Method not found" ], [ -32602, "Invalid params" ], [ -32603, "Internal error" ], [ -32604, "Params not found" ], [ -32605, "Method forbidden" ], [ -32606, "Event forbidden" ], [ -32700, "Parse error" ] ]);
            var DefaultDataPack = function() {
                function DefaultDataPack() {
                    (0, _classCallCheck2["default"])(this, DefaultDataPack);
                }
                (0, _createClass2["default"])(DefaultDataPack, [ {
                    key: "encode",
                    value: function encode(value) {
                        return JSON.stringify(value);
                    }
                }, {
                    key: "decode",
                    value: function decode(value) {
                        return JSON.parse(value);
                    }
                } ]);
                return DefaultDataPack;
            }();
            exports.DefaultDataPack = DefaultDataPack;
            function createError(code, details) {
                var error = {
                    code,
                    message: errors.get(code) || "Internal Server Error"
                };
                if (details) error["data"] = details;
                return error;
            }
        },
        861: (module, exports, __webpack_require__) => {
            /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
            var buffer = __webpack_require__(287);
            var Buffer = buffer.Buffer;
            function copyProps(src, dst) {
                for (var key in src) dst[key] = src[key];
            }
            if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) module.exports = buffer; else {
                copyProps(buffer, exports);
                exports.Buffer = SafeBuffer;
            }
            function SafeBuffer(arg, encodingOrOffset, length) {
                return Buffer(arg, encodingOrOffset, length);
            }
            SafeBuffer.prototype = Object.create(Buffer.prototype);
            copyProps(Buffer, SafeBuffer);
            SafeBuffer.from = function(arg, encodingOrOffset, length) {
                if (typeof arg === "number") throw new TypeError("Argument must not be a number");
                return Buffer(arg, encodingOrOffset, length);
            };
            SafeBuffer.alloc = function(size, fill, encoding) {
                if (typeof size !== "number") throw new TypeError("Argument must be a number");
                var buf = Buffer(size);
                if (fill !== void 0) if (typeof encoding === "string") buf.fill(fill, encoding); else buf.fill(fill); else buf.fill(0);
                return buf;
            };
            SafeBuffer.allocUnsafe = function(size) {
                if (typeof size !== "number") throw new TypeError("Argument must be a number");
                return Buffer(size);
            };
            SafeBuffer.allocUnsafeSlow = function(size) {
                if (typeof size !== "number") throw new TypeError("Argument must be a number");
                return buffer.SlowBuffer(size);
            };
        },
        281: (__unused_webpack_module, exports) => {
            "use strict";
            function inRange(a, min, max) {
                return min <= a && a <= max;
            }
            function ToDictionary(o) {
                if (o === void 0) return {};
                if (o === Object(o)) return o;
                throw TypeError("Could not convert argument to dictionary");
            }
            function stringToCodePoints(string) {
                var s = String(string);
                var n = s.length;
                var i = 0;
                var u = [];
                while (i < n) {
                    var c = s.charCodeAt(i);
                    if (c < 55296 || c > 57343) u.push(c); else if (56320 <= c && c <= 57343) u.push(65533); else if (55296 <= c && c <= 56319) if (i === n - 1) u.push(65533); else {
                        var d = string.charCodeAt(i + 1);
                        if (56320 <= d && d <= 57343) {
                            var a = c & 1023;
                            var b = d & 1023;
                            u.push(65536 + (a << 10) + b);
                            i += 1;
                        } else u.push(65533);
                    }
                    i += 1;
                }
                return u;
            }
            function codePointsToString(code_points) {
                var s = "";
                for (var i = 0; i < code_points.length; ++i) {
                    var cp = code_points[i];
                    if (cp <= 65535) s += String.fromCharCode(cp); else {
                        cp -= 65536;
                        s += String.fromCharCode((cp >> 10) + 55296, (cp & 1023) + 56320);
                    }
                }
                return s;
            }
            var end_of_stream = -1;
            function Stream(tokens) {
                this.tokens = [].slice.call(tokens);
            }
            Stream.prototype = {
                endOfStream: function() {
                    return !this.tokens.length;
                },
                read: function() {
                    if (!this.tokens.length) return end_of_stream;
                    return this.tokens.shift();
                },
                prepend: function(token) {
                    if (Array.isArray(token)) {
                        var tokens = token;
                        while (tokens.length) this.tokens.unshift(tokens.pop());
                    } else this.tokens.unshift(token);
                },
                push: function(token) {
                    if (Array.isArray(token)) {
                        var tokens = token;
                        while (tokens.length) this.tokens.push(tokens.shift());
                    } else this.tokens.push(token);
                }
            };
            var finished = -1;
            function decoderError(fatal, opt_code_point) {
                if (fatal) throw TypeError("Decoder error");
                return opt_code_point || 65533;
            }
            var DEFAULT_ENCODING = "utf-8";
            function TextDecoder(encoding, options) {
                if (!(this instanceof TextDecoder)) return new TextDecoder(encoding, options);
                encoding = encoding !== void 0 ? String(encoding).toLowerCase() : DEFAULT_ENCODING;
                if (encoding !== DEFAULT_ENCODING) throw new Error("Encoding not supported. Only utf-8 is supported");
                options = ToDictionary(options);
                this._streaming = false;
                this._BOMseen = false;
                this._decoder = null;
                this._fatal = Boolean(options["fatal"]);
                this._ignoreBOM = Boolean(options["ignoreBOM"]);
                Object.defineProperty(this, "encoding", {
                    value: "utf-8"
                });
                Object.defineProperty(this, "fatal", {
                    value: this._fatal
                });
                Object.defineProperty(this, "ignoreBOM", {
                    value: this._ignoreBOM
                });
            }
            TextDecoder.prototype = {
                decode: function decode(input, options) {
                    var bytes;
                    if (typeof input === "object" && input instanceof ArrayBuffer) bytes = new Uint8Array(input); else if (typeof input === "object" && "buffer" in input && input.buffer instanceof ArrayBuffer) bytes = new Uint8Array(input.buffer, input.byteOffset, input.byteLength); else bytes = new Uint8Array(0);
                    options = ToDictionary(options);
                    if (!this._streaming) {
                        this._decoder = new UTF8Decoder({
                            fatal: this._fatal
                        });
                        this._BOMseen = false;
                    }
                    this._streaming = Boolean(options["stream"]);
                    var input_stream = new Stream(bytes);
                    var code_points = [];
                    var result;
                    while (!input_stream.endOfStream()) {
                        result = this._decoder.handler(input_stream, input_stream.read());
                        if (result === finished) break;
                        if (result === null) continue;
                        if (Array.isArray(result)) code_points.push.apply(code_points, result); else code_points.push(result);
                    }
                    if (!this._streaming) {
                        do {
                            result = this._decoder.handler(input_stream, input_stream.read());
                            if (result === finished) break;
                            if (result === null) continue;
                            if (Array.isArray(result)) code_points.push.apply(code_points, result); else code_points.push(result);
                        } while (!input_stream.endOfStream());
                        this._decoder = null;
                    }
                    if (code_points.length) if ([ "utf-8" ].indexOf(this.encoding) !== -1 && !this._ignoreBOM && !this._BOMseen) if (code_points[0] === 65279) {
                        this._BOMseen = true;
                        code_points.shift();
                    } else this._BOMseen = true;
                    return codePointsToString(code_points);
                }
            };
            function TextEncoder(encoding, options) {
                if (!(this instanceof TextEncoder)) return new TextEncoder(encoding, options);
                encoding = encoding !== void 0 ? String(encoding).toLowerCase() : DEFAULT_ENCODING;
                if (encoding !== DEFAULT_ENCODING) throw new Error("Encoding not supported. Only utf-8 is supported");
                options = ToDictionary(options);
                this._streaming = false;
                this._encoder = null;
                this._options = {
                    fatal: Boolean(options["fatal"])
                };
                Object.defineProperty(this, "encoding", {
                    value: "utf-8"
                });
            }
            TextEncoder.prototype = {
                encode: function encode(opt_string, options) {
                    opt_string = opt_string ? String(opt_string) : "";
                    options = ToDictionary(options);
                    if (!this._streaming) this._encoder = new UTF8Encoder(this._options);
                    this._streaming = Boolean(options["stream"]);
                    var bytes = [];
                    var input_stream = new Stream(stringToCodePoints(opt_string));
                    var result;
                    while (!input_stream.endOfStream()) {
                        result = this._encoder.handler(input_stream, input_stream.read());
                        if (result === finished) break;
                        if (Array.isArray(result)) bytes.push.apply(bytes, result); else bytes.push(result);
                    }
                    if (!this._streaming) {
                        while (true) {
                            result = this._encoder.handler(input_stream, input_stream.read());
                            if (result === finished) break;
                            if (Array.isArray(result)) bytes.push.apply(bytes, result); else bytes.push(result);
                        }
                        this._encoder = null;
                    }
                    return new Uint8Array(bytes);
                }
            };
            function UTF8Decoder(options) {
                var fatal = options.fatal;
                var utf8_code_point = 0, utf8_bytes_seen = 0, utf8_bytes_needed = 0, utf8_lower_boundary = 128, utf8_upper_boundary = 191;
                this.handler = function(stream, bite) {
                    if (bite === end_of_stream && utf8_bytes_needed !== 0) {
                        utf8_bytes_needed = 0;
                        return decoderError(fatal);
                    }
                    if (bite === end_of_stream) return finished;
                    if (utf8_bytes_needed === 0) {
                        if (inRange(bite, 0, 127)) return bite;
                        if (inRange(bite, 194, 223)) {
                            utf8_bytes_needed = 1;
                            utf8_code_point = bite - 192;
                        } else if (inRange(bite, 224, 239)) {
                            if (bite === 224) utf8_lower_boundary = 160;
                            if (bite === 237) utf8_upper_boundary = 159;
                            utf8_bytes_needed = 2;
                            utf8_code_point = bite - 224;
                        } else if (inRange(bite, 240, 244)) {
                            if (bite === 240) utf8_lower_boundary = 144;
                            if (bite === 244) utf8_upper_boundary = 143;
                            utf8_bytes_needed = 3;
                            utf8_code_point = bite - 240;
                        } else return decoderError(fatal);
                        utf8_code_point <<= 6 * utf8_bytes_needed;
                        return null;
                    }
                    if (!inRange(bite, utf8_lower_boundary, utf8_upper_boundary)) {
                        utf8_code_point = utf8_bytes_needed = utf8_bytes_seen = 0;
                        utf8_lower_boundary = 128;
                        utf8_upper_boundary = 191;
                        stream.prepend(bite);
                        return decoderError(fatal);
                    }
                    utf8_lower_boundary = 128;
                    utf8_upper_boundary = 191;
                    utf8_bytes_seen += 1;
                    utf8_code_point += bite - 128 << 6 * (utf8_bytes_needed - utf8_bytes_seen);
                    if (utf8_bytes_seen !== utf8_bytes_needed) return null;
                    var code_point = utf8_code_point;
                    utf8_code_point = utf8_bytes_needed = utf8_bytes_seen = 0;
                    return code_point;
                };
            }
            function UTF8Encoder(options) {
                options.fatal;
                this.handler = function(stream, code_point) {
                    if (code_point === end_of_stream) return finished;
                    if (inRange(code_point, 0, 127)) return code_point;
                    var count, offset;
                    if (inRange(code_point, 128, 2047)) {
                        count = 1;
                        offset = 192;
                    } else if (inRange(code_point, 2048, 65535)) {
                        count = 2;
                        offset = 224;
                    } else if (inRange(code_point, 65536, 1114111)) {
                        count = 3;
                        offset = 240;
                    }
                    var bytes = [ (code_point >> 6 * count) + offset ];
                    while (count > 0) {
                        var temp = code_point >> 6 * (count - 1);
                        bytes.push(128 | temp & 63);
                        count -= 1;
                    }
                    return bytes;
                };
            }
            exports.TextEncoder = TextEncoder;
            exports.TextDecoder = TextDecoder;
        },
        341: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, {
                v4: () => esm_browser_v4
            });
            var getRandomValues;
            var rnds8 = new Uint8Array(16);
            function rng() {
                if (!getRandomValues) {
                    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
                    if (!getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                }
                return getRandomValues(rnds8);
            }
            const regex = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
            function validate(uuid) {
                return typeof uuid === "string" && regex.test(uuid);
            }
            const esm_browser_validate = validate;
            var byteToHex = [];
            for (var i = 0; i < 256; ++i) byteToHex.push((i + 256).toString(16).substr(1));
            function stringify(arr) {
                var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
                if (!esm_browser_validate(uuid)) throw TypeError("Stringified UUID is invalid");
                return uuid;
            }
            const esm_browser_stringify = stringify;
            function v4(options, buf, offset) {
                options = options || {};
                var rnds = options.random || (options.rng || rng)();
                rnds[6] = rnds[6] & 15 | 64;
                rnds[8] = rnds[8] & 63 | 128;
                if (buf) {
                    offset = offset || 0;
                    for (var i = 0; i < 16; ++i) buf[offset + i] = rnds[i];
                    return buf;
                }
                return esm_browser_stringify(rnds);
            }
            const esm_browser_v4 = v4;
        },
        790: () => {},
        475: module => {
            function _assertThisInitialized(self) {
                if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return self;
            }
            module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
        },
        293: module => {
            function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
                try {
                    var info = gen[key](arg);
                    var value = info.value;
                } catch (error) {
                    reject(error);
                    return;
                }
                if (info.done) resolve(value); else Promise.resolve(value).then(_next, _throw);
            }
            function _asyncToGenerator(fn) {
                return function() {
                    var self = this, args = arguments;
                    return new Promise((function(resolve, reject) {
                        var gen = fn.apply(self, args);
                        function _next(value) {
                            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
                        }
                        function _throw(err) {
                            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
                        }
                        _next(void 0);
                    }));
                };
            }
            module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;
        },
        383: module => {
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }
            module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
        },
        579: (module, __unused_webpack_exports, __webpack_require__) => {
            var toPropertyKey = __webpack_require__(736);
            function _defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
                }
            }
            function _createClass(Constructor, protoProps, staticProps) {
                if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                if (staticProps) _defineProperties(Constructor, staticProps);
                Object.defineProperty(Constructor, "prototype", {
                    writable: false
                });
                return Constructor;
            }
            module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
        },
        72: module => {
            function _getPrototypeOf(o) {
                module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
                    return o.__proto__ || Object.getPrototypeOf(o);
                }, module.exports.__esModule = true, module.exports["default"] = module.exports;
                return _getPrototypeOf(o);
            }
            module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
        },
        511: (module, __unused_webpack_exports, __webpack_require__) => {
            var setPrototypeOf = __webpack_require__(636);
            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        writable: true,
                        configurable: true
                    }
                });
                Object.defineProperty(subClass, "prototype", {
                    writable: false
                });
                if (superClass) setPrototypeOf(subClass, superClass);
            }
            module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
        },
        994: module => {
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
        },
        452: (module, __unused_webpack_exports, __webpack_require__) => {
            var _typeof = __webpack_require__(738)["default"];
            var assertThisInitialized = __webpack_require__(475);
            function _possibleConstructorReturn(self, call) {
                if (call && (_typeof(call) === "object" || typeof call === "function")) return call; else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
                return assertThisInitialized(self);
            }
            module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
        },
        633: (module, __unused_webpack_exports, __webpack_require__) => {
            var _typeof = __webpack_require__(738)["default"];
            function _regeneratorRuntime() {
                "use strict";
 /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */                module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
                    return e;
                }, module.exports.__esModule = true, module.exports["default"] = module.exports;
                var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t, e, r) {
                    t[e] = r.value;
                }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
                function define(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e];
                }
                try {
                    define({}, "");
                } catch (t) {
                    define = function define(t, e, r) {
                        return t[e] = r;
                    };
                }
                function wrap(t, e, r, n) {
                    var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []);
                    return o(a, "_invoke", {
                        value: makeInvokeMethod(t, r, c)
                    }), a;
                }
                function tryCatch(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        };
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        };
                    }
                }
                e.wrap = wrap;
                var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {};
                function Generator() {}
                function GeneratorFunction() {}
                function GeneratorFunctionPrototype() {}
                var p = {};
                define(p, a, (function() {
                    return this;
                }));
                var d = Object.getPrototypeOf, v = d && d(d(values([])));
                v && v !== r && n.call(v, a) && (p = v);
                var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
                function defineIteratorMethods(t) {
                    [ "next", "throw", "return" ].forEach((function(e) {
                        define(t, e, (function(t) {
                            return this._invoke(e, t);
                        }));
                    }));
                }
                function AsyncIterator(t, e) {
                    function invoke(r, o, i, a) {
                        var c = tryCatch(t[r], t, o);
                        if ("throw" !== c.type) {
                            var u = c.arg, h = u.value;
                            return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then((function(t) {
                                invoke("next", t, i, a);
                            }), (function(t) {
                                invoke("throw", t, i, a);
                            })) : e.resolve(h).then((function(t) {
                                u.value = t, i(u);
                            }), (function(t) {
                                return invoke("throw", t, i, a);
                            }));
                        }
                        a(c.arg);
                    }
                    var r;
                    o(this, "_invoke", {
                        value: function value(t, n) {
                            function callInvokeWithMethodAndArg() {
                                return new e((function(e, r) {
                                    invoke(t, n, e, r);
                                }));
                            }
                            return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
                        }
                    });
                }
                function makeInvokeMethod(e, r, n) {
                    var o = h;
                    return function(i, a) {
                        if (o === f) throw new Error("Generator is already running");
                        if (o === s) {
                            if ("throw" === i) throw a;
                            return {
                                value: t,
                                done: !0
                            };
                        }
                        for (n.method = i, n.arg = a; ;) {
                            var c = n.delegate;
                            if (c) {
                                var u = maybeInvokeDelegate(c, n);
                                if (u) {
                                    if (u === y) continue;
                                    return u;
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                                if (o === h) throw o = s, n.arg;
                                n.dispatchException(n.arg);
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            o = f;
                            var p = tryCatch(e, r, n);
                            if ("normal" === p.type) {
                                if (o = n.done ? s : l, p.arg === y) continue;
                                return {
                                    value: p.arg,
                                    done: n.done
                                };
                            }
                            "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
                        }
                    };
                }
                function maybeInvokeDelegate(e, r) {
                    var n = r.method, o = e.iterator[n];
                    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", 
                    r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", 
                    r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
                    var i = tryCatch(o, e.iterator, r.arg);
                    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, 
                    y;
                    var a = i.arg;
                    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", 
                    r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), 
                    r.delegate = null, y);
                }
                function pushTryEntry(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), 
                    this.tryEntries.push(e);
                }
                function resetTryEntry(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e;
                }
                function Context(t) {
                    this.tryEntries = [ {
                        tryLoc: "root"
                    } ], t.forEach(pushTryEntry, this), this.reset(!0);
                }
                function values(e) {
                    if (e || "" === e) {
                        var r = e[a];
                        if (r) return r.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var o = -1, i = function next() {
                                for (;++o < e.length; ) if (n.call(e, o)) return next.value = e[o], next.done = !1, 
                                next;
                                return next.value = t, next.done = !0, next;
                            };
                            return i.next = i;
                        }
                    }
                    throw new TypeError(_typeof(e) + " is not iterable");
                }
                return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
                    value: GeneratorFunctionPrototype,
                    configurable: !0
                }), o(GeneratorFunctionPrototype, "constructor", {
                    value: GeneratorFunction,
                    configurable: !0
                }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), 
                e.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
                }, e.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, 
                    define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
                }, e.awrap = function(t) {
                    return {
                        __await: t
                    };
                }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, (function() {
                    return this;
                })), e.AsyncIterator = AsyncIterator, e.async = function(t, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new AsyncIterator(wrap(t, r, n, o), i);
                    return e.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next();
                    }));
                }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, (function() {
                    return this;
                })), define(g, "toString", (function() {
                    return "[object Generator]";
                })), e.keys = function(t) {
                    var e = Object(t), r = [];
                    for (var n in e) r.push(n);
                    return r.reverse(), function next() {
                        for (;r.length; ) {
                            var t = r.pop();
                            if (t in e) return next.value = t, next.done = !1, next;
                        }
                        return next.done = !0, next;
                    };
                }, e.values = values, Context.prototype = {
                    constructor: Context,
                    reset: function reset(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, 
                        this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
                    },
                    stop: function stop() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval;
                    },
                    dispatchException: function dispatchException(e) {
                        if (this.done) throw e;
                        var r = this;
                        function handle(n, o) {
                            return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), 
                            !!o;
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o], a = i.completion;
                            if ("root" === i.tryLoc) return handle("end");
                            if (i.tryLoc <= this.prev) {
                                var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                                } else if (c) {
                                    if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                                } else {
                                    if (!u) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function abrupt(t, e) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r];
                            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break;
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, 
                        y) : this.complete(a);
                    },
                    complete: function complete(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, 
                        this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), 
                        y;
                    },
                    finish: function finish(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), 
                            y;
                        }
                    },
                    catch: function _catch(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    resetTryEntry(r);
                                }
                                return o;
                            }
                        }
                        throw new Error("illegal catch attempt");
                    },
                    delegateYield: function delegateYield(e, r, n) {
                        return this.delegate = {
                            iterator: values(e),
                            resultName: r,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = t), y;
                    }
                }, e;
            }
            module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
        },
        636: module => {
            function _setPrototypeOf(o, p) {
                module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
                    o.__proto__ = p;
                    return o;
                }, module.exports.__esModule = true, module.exports["default"] = module.exports;
                return _setPrototypeOf(o, p);
            }
            module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
        },
        45: (module, __unused_webpack_exports, __webpack_require__) => {
            var _typeof = __webpack_require__(738)["default"];
            function toPrimitive(t, r) {
                if ("object" != _typeof(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var i = e.call(t, r || "default");
                    if ("object" != _typeof(i)) return i;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === r ? String : Number)(t);
            }
            module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;
        },
        736: (module, __unused_webpack_exports, __webpack_require__) => {
            var _typeof = __webpack_require__(738)["default"];
            var toPrimitive = __webpack_require__(45);
            function toPropertyKey(t) {
                var i = toPrimitive(t, "string");
                return "symbol" == _typeof(i) ? i : String(i);
            }
            module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
        },
        738: module => {
            function _typeof(o) {
                "@babel/helpers - typeof";
                return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
                    return typeof o;
                } : function(o) {
                    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
                }, module.exports.__esModule = true, module.exports["default"] = module.exports, 
                _typeof(o);
            }
            module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
        },
        756: (module, __unused_webpack_exports, __webpack_require__) => {
            var runtime = __webpack_require__(633)();
            module.exports = runtime;
            try {
                regeneratorRuntime = runtime;
            } catch (accidentalStrictMode) {
                if (typeof globalThis === "object") globalThis.regeneratorRuntime = runtime; else Function("r", "regeneratorRuntime = r")(runtime);
            }
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            id: moduleId,
            loaded: false,
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.loaded = true;
        return module.exports;
    }
    (() => {
        __webpack_require__.n = module => {
            var getter = module && module.__esModule ? () => module["default"] : () => module;
            __webpack_require__.d(getter, {
                a: getter
            });
            return getter;
        };
    })();
    (() => {
        __webpack_require__.d = (exports, definition) => {
            for (var key in definition) if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) Object.defineProperty(exports, key, {
                enumerable: true,
                get: definition[key]
            });
        };
    })();
    (() => {
        __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    })();
    (() => {
        __webpack_require__.r = exports => {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module"
            });
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
        };
    })();
    (() => {
        __webpack_require__.nmd = module => {
            module.paths = [];
            if (!module.children) module.children = [];
            return module;
        };
    })();
    (() => {
        "use strict";
        var abstract_utils_namespaceObject = {};
        __webpack_require__.r(abstract_utils_namespaceObject);
        __webpack_require__.d(abstract_utils_namespaceObject, {
            OG: () => bitMask,
            My: () => abstract_utils_bytesToHex,
            bytesToNumberBE: () => utils_bytesToNumberBE,
            lX: () => utils_bytesToNumberLE,
            Id: () => abstract_utils_concatBytes,
            fg: () => createHmacDrbg,
            qj: () => utils_ensureBytes,
            hexToBytes: () => utils_hexToBytes,
            aY: () => abstract_utils_isBytes,
            lq: () => utils_numberToBytesBE,
            z: () => utils_numberToBytesLE,
            Q5: () => validateObject
        });
        const flsModules = {};
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(webP.height == 2);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = support === true ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        let bodyLockStatus = true;
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function FLS(message) {
            setTimeout((() => {
                if (window.FLS) console.log(message);
            }), 0);
        }
        class Leaderboard {
            constructor(options) {
                let config = {
                    logging: true,
                    init: true,
                    attributeOpenButton: "data-leaderboard-popup",
                    attributeCloseButton: "data-leaderboard-close",
                    fixElementSelector: "[data-lp]",
                    classes: {
                        popup: "popupLeaderboard",
                        popupWrapper: "popupLeaderboard__wrapper",
                        popupContent: "popupLeaderboard__content",
                        popupActive: "popupLeaderboard_show",
                        bodyActive: "popupLeaderboard-show"
                    },
                    focusCatch: true,
                    closeEsc: true,
                    bodyLock: true,
                    hashSettings: {
                        location: true,
                        goHash: true
                    },
                    on: {
                        beforeOpen: function() {},
                        afterOpen: function() {},
                        beforeClose: function() {},
                        afterClose: function() {}
                    }
                };
                this.youTubeCode;
                this.isOpen = false;
                this.targetOpen = {
                    selector: false,
                    element: false
                };
                this.previousOpen = {
                    selector: false,
                    element: false
                };
                this.lastClosed = {
                    selector: false,
                    element: false
                };
                this._dataValue = false;
                this.hash = false;
                this._reopen = false;
                this._selectorOpen = false;
                this.lastFocusEl = false;
                this._focusEl = [ "a[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "button:not([disabled]):not([aria-hidden])", "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "area[href]", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])' ];
                this.options = {
                    ...config,
                    ...options,
                    classes: {
                        ...config.classes,
                        ...options?.classes
                    },
                    hashSettings: {
                        ...config.hashSettings,
                        ...options?.hashSettings
                    },
                    on: {
                        ...config.on,
                        ...options?.on
                    }
                };
                this.bodyLock = false;
                this.options.init ? this.initPopups() : null;
            }
            initPopups() {
                this.popupLogging(`Прокинувся`);
                this.eventsPopup();
            }
            eventsPopup() {
                document.addEventListener("click", function(e) {
                    const buttonOpen = e.target.closest(`[${this.options.attributeOpenButton}]`);
                    if (buttonOpen) {
                        e.preventDefault();
                        this._dataValue = buttonOpen.getAttribute(this.options.attributeOpenButton) ? buttonOpen.getAttribute(this.options.attributeOpenButton) : "error";
                        this.youTubeCode = buttonOpen.getAttribute(this.options.youtubeAttribute) ? buttonOpen.getAttribute(this.options.youtubeAttribute) : null;
                        if (this._dataValue !== "error") {
                            if (!this.isOpen) this.lastFocusEl = buttonOpen;
                            this.targetOpen.selector = `${this._dataValue}`;
                            this._selectorOpen = true;
                            this.open();
                            return;
                        } else this.popupLogging(`Йой, не заповнено атрибут у ${buttonOpen.classList}`);
                        return;
                    }
                    const buttonClose = e.target.closest(`[${this.options.attributeCloseButton}]`);
                    if (buttonClose || !e.target.closest(`.${this.options.classes.popupContent}`) && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                }.bind(this));
                document.addEventListener("keydown", function(e) {
                    if (this.options.closeEsc && e.which == 27 && e.code === "Escape" && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                    if (this.options.focusCatch && e.which == 9 && this.isOpen) {
                        this._focusCatch(e);
                        return;
                    }
                }.bind(this));
                if (this.options.hashSettings.goHash) {
                    window.addEventListener("hashchange", function() {
                        if (window.location.hash) this._openToHash(); else this.close(this.targetOpen.selector);
                    }.bind(this));
                    window.addEventListener("load", function() {
                        if (window.location.hash) this._openToHash();
                    }.bind(this));
                }
            }
            open(selectorValue) {
                if (bodyLockStatus) {
                    this.bodyLock = document.documentElement.classList.contains("lock") && !this.isOpen ? true : false;
                    if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") {
                        this.targetOpen.selector = selectorValue;
                        this._selectorOpen = true;
                    }
                    if (this.isOpen) {
                        this._reopen = true;
                        this.close();
                    }
                    if (!this._selectorOpen) this.targetOpen.selector = this.lastClosed.selector;
                    if (!this._reopen) this.previousActiveElement = document.activeElement;
                    this.targetOpen.element = document.querySelector(this.targetOpen.selector);
                    if (this.targetOpen.element) {
                        if (this.options.hashSettings.location) {
                            this._getHash();
                            this._setHash();
                        }
                        this.options.on.beforeOpen(this);
                        document.dispatchEvent(new CustomEvent("beforePopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.targetOpen.element.classList.add(this.options.classes.popupActive);
                        document.documentElement.classList.add(this.options.classes.bodyActive);
                        if (!this._reopen) !this.bodyLock ? bodyLock() : null; else this._reopen = false;
                        this.targetOpen.element.setAttribute("aria-hidden", "false");
                        this.previousOpen.selector = this.targetOpen.selector;
                        this.previousOpen.element = this.targetOpen.element;
                        this._selectorOpen = false;
                        this.isOpen = true;
                        setTimeout((() => {
                            this._focusTrap();
                        }), 50);
                        this.options.on.afterOpen(this);
                        document.dispatchEvent(new CustomEvent("afterPopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.popupLogging(`Відкрив попап`);
                    } else this.popupLogging(`Йой, такого попапу немає. Перевірте коректність введення. `);
                }
            }
            close(selectorValue) {
                if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") this.previousOpen.selector = selectorValue;
                if (!this.isOpen || !bodyLockStatus) return;
                this.options.on.beforeClose(this);
                document.dispatchEvent(new CustomEvent("beforePopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                this.previousOpen.element.classList.remove(this.options.classes.popupActive);
                this.previousOpen.element.setAttribute("aria-hidden", "true");
                if (!this._reopen) {
                    document.documentElement.classList.remove(this.options.classes.bodyActive);
                    !this.bodyLock ? bodyUnlock() : null;
                    this.isOpen = false;
                }
                this._removeHash();
                if (this._selectorOpen) {
                    this.lastClosed.selector = this.previousOpen.selector;
                    this.lastClosed.element = this.previousOpen.element;
                }
                this.options.on.afterClose(this);
                document.dispatchEvent(new CustomEvent("afterPopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                setTimeout((() => {
                    this._focusTrap();
                }), 50);
                this.popupLogging(`Закрив попап`);
            }
            _getHash() {
                if (this.options.hashSettings.location) this.hash = this.targetOpen.selector.includes("#") ? this.targetOpen.selector : this.targetOpen.selector.replace(".", "#");
            }
            _openToHash() {
                let classInHash = document.querySelector(`.${window.location.hash.replace("#", "")}`) ? `.${window.location.hash.replace("#", "")}` : document.querySelector(`${window.location.hash}`) ? `${window.location.hash}` : null;
                const buttons = document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) ? document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) : document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash.replace(".", "#")}"]`);
                if (buttons && classInHash) this.open(classInHash);
            }
            _setHash() {
                history.pushState("", "", this.hash);
            }
            _removeHash() {
                history.pushState("", "", window.location.href.split("#")[0]);
            }
            _focusCatch(e) {
                const focusable = this.targetOpen.element.querySelectorAll(this._focusEl);
                const focusArray = Array.prototype.slice.call(focusable);
                const focusedIndex = focusArray.indexOf(document.activeElement);
                if (e.shiftKey && focusedIndex === 0) {
                    focusArray[focusArray.length - 1].focus();
                    e.preventDefault();
                }
                if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
                    focusArray[0].focus();
                    e.preventDefault();
                }
            }
            _focusTrap() {}
            popupLogging(message) {
                this.options.logging ? FLS(`[Попапос]: ${message}`) : null;
            }
        }
        flsModules.popup = new Leaderboard({});
        var node_modules_buffer = __webpack_require__(290);
        function number(n) {
            if (!Number.isSafeInteger(n) || n < 0) throw new Error(`Wrong positive integer: ${n}`);
        }
        function isBytes(a) {
            return a instanceof Uint8Array || a != null && typeof a === "object" && a.constructor.name === "Uint8Array";
        }
        function bytes(b, ...lengths) {
            if (!isBytes(b)) throw new Error("Expected Uint8Array");
            if (lengths.length > 0 && !lengths.includes(b.length)) throw new Error(`Expected Uint8Array of length ${lengths}, not of length=${b.length}`);
        }
        function _assert_hash(hash) {
            if (typeof hash !== "function" || typeof hash.create !== "function") throw new Error("Hash should be wrapped by utils.wrapConstructor");
            number(hash.outputLen);
            number(hash.blockLen);
        }
        function exists(instance, checkFinished = true) {
            if (instance.destroyed) throw new Error("Hash instance has been destroyed");
            if (checkFinished && instance.finished) throw new Error("Hash#digest() has already been called");
        }
        function output(out, instance) {
            bytes(out);
            const min = instance.outputLen;
            if (out.length < min) throw new Error(`digestInto() expects output buffer of length at least ${min}`);
        }
        const crypto_crypto = typeof globalThis === "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
        const u32 = arr => new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
        function utils_isBytes(a) {
            return a instanceof Uint8Array || a != null && typeof a === "object" && a.constructor.name === "Uint8Array";
        }
        const createView = arr => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
        const rotr = (word, shift) => word << 32 - shift | word >>> shift;
        const isLE = new Uint8Array(new Uint32Array([ 287454020 ]).buffer)[0] === 68;
        if (!isLE) throw new Error("Non little-endian hardware is not supported");
        Array.from({
            length: 256
        }, ((_, i) => i.toString(16).padStart(2, "0")));
        function utils_utf8ToBytes(str) {
            if (typeof str !== "string") throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
            return new Uint8Array((new TextEncoder).encode(str));
        }
        function toBytes(data) {
            if (typeof data === "string") data = utils_utf8ToBytes(data);
            if (!utils_isBytes(data)) throw new Error(`expected Uint8Array, got ${typeof data}`);
            return data;
        }
        function utils_concatBytes(...arrays) {
            let sum = 0;
            for (let i = 0; i < arrays.length; i++) {
                const a = arrays[i];
                if (!utils_isBytes(a)) throw new Error("Uint8Array expected");
                sum += a.length;
            }
            const res = new Uint8Array(sum);
            for (let i = 0, pad = 0; i < arrays.length; i++) {
                const a = arrays[i];
                res.set(a, pad);
                pad += a.length;
            }
            return res;
        }
        class Hash {
            clone() {
                return this._cloneInto();
            }
        }
        ({}).toString;
        function utils_wrapConstructor(hashCons) {
            const hashC = msg => hashCons().update(toBytes(msg)).digest();
            const tmp = hashCons();
            hashC.outputLen = tmp.outputLen;
            hashC.blockLen = tmp.blockLen;
            hashC.create = () => hashCons();
            return hashC;
        }
        function utils_randomBytes(bytesLength = 32) {
            if (crypto_crypto && typeof crypto_crypto.getRandomValues === "function") return crypto_crypto.getRandomValues(new Uint8Array(bytesLength));
            throw new Error("crypto.getRandomValues must be defined");
        }
        function setBigUint64(view, byteOffset, value, isLE) {
            if (typeof view.setBigUint64 === "function") return view.setBigUint64(byteOffset, value, isLE);
            const _32n = BigInt(32);
            const _u32_max = BigInt(4294967295);
            const wh = Number(value >> _32n & _u32_max);
            const wl = Number(value & _u32_max);
            const h = isLE ? 4 : 0;
            const l = isLE ? 0 : 4;
            view.setUint32(byteOffset + h, wh, isLE);
            view.setUint32(byteOffset + l, wl, isLE);
        }
        class SHA2 extends Hash {
            constructor(blockLen, outputLen, padOffset, isLE) {
                super();
                this.blockLen = blockLen;
                this.outputLen = outputLen;
                this.padOffset = padOffset;
                this.isLE = isLE;
                this.finished = false;
                this.length = 0;
                this.pos = 0;
                this.destroyed = false;
                this.buffer = new Uint8Array(blockLen);
                this.view = createView(this.buffer);
            }
            update(data) {
                exists(this);
                const {view, buffer, blockLen} = this;
                data = toBytes(data);
                const len = data.length;
                for (let pos = 0; pos < len; ) {
                    const take = Math.min(blockLen - this.pos, len - pos);
                    if (take === blockLen) {
                        const dataView = createView(data);
                        for (;blockLen <= len - pos; pos += blockLen) this.process(dataView, pos);
                        continue;
                    }
                    buffer.set(data.subarray(pos, pos + take), this.pos);
                    this.pos += take;
                    pos += take;
                    if (this.pos === blockLen) {
                        this.process(view, 0);
                        this.pos = 0;
                    }
                }
                this.length += data.length;
                this.roundClean();
                return this;
            }
            digestInto(out) {
                exists(this);
                output(out, this);
                this.finished = true;
                const {buffer, view, blockLen, isLE} = this;
                let {pos} = this;
                buffer[pos++] = 128;
                this.buffer.subarray(pos).fill(0);
                if (this.padOffset > blockLen - pos) {
                    this.process(view, 0);
                    pos = 0;
                }
                for (let i = pos; i < blockLen; i++) buffer[i] = 0;
                setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE);
                this.process(view, 0);
                const oview = createView(out);
                const len = this.outputLen;
                if (len % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
                const outLen = len / 4;
                const state = this.get();
                if (outLen > state.length) throw new Error("_sha2: outputLen bigger than state");
                for (let i = 0; i < outLen; i++) oview.setUint32(4 * i, state[i], isLE);
            }
            digest() {
                const {buffer, outputLen} = this;
                this.digestInto(buffer);
                const res = buffer.slice(0, outputLen);
                this.destroy();
                return res;
            }
            _cloneInto(to) {
                to || (to = new this.constructor);
                to.set(...this.get());
                const {blockLen, buffer, length, finished, destroyed, pos} = this;
                to.length = length;
                to.pos = pos;
                to.finished = finished;
                to.destroyed = destroyed;
                if (length % blockLen) to.buffer.set(buffer);
                return to;
            }
        }
        const U32_MASK64 = BigInt(2 ** 32 - 1);
        const _32n = BigInt(32);
        function fromBig(n, le = false) {
            if (le) return {
                h: Number(n & U32_MASK64),
                l: Number(n >> _32n & U32_MASK64)
            };
            return {
                h: Number(n >> _32n & U32_MASK64) | 0,
                l: Number(n & U32_MASK64) | 0
            };
        }
        function split(lst, le = false) {
            let Ah = new Uint32Array(lst.length);
            let Al = new Uint32Array(lst.length);
            for (let i = 0; i < lst.length; i++) {
                const {h, l} = fromBig(lst[i], le);
                [Ah[i], Al[i]] = [ h, l ];
            }
            return [ Ah, Al ];
        }
        const toBig = (h, l) => BigInt(h >>> 0) << _32n | BigInt(l >>> 0);
        const shrSH = (h, _l, s) => h >>> s;
        const shrSL = (h, l, s) => h << 32 - s | l >>> s;
        const rotrSH = (h, l, s) => h >>> s | l << 32 - s;
        const rotrSL = (h, l, s) => h << 32 - s | l >>> s;
        const rotrBH = (h, l, s) => h << 64 - s | l >>> s - 32;
        const rotrBL = (h, l, s) => h >>> s - 32 | l << 64 - s;
        const rotr32H = (_h, l) => l;
        const rotr32L = (h, _l) => h;
        const rotlSH = (h, l, s) => h << s | l >>> 32 - s;
        const rotlSL = (h, l, s) => l << s | h >>> 32 - s;
        const rotlBH = (h, l, s) => l << s - 32 | h >>> 64 - s;
        const rotlBL = (h, l, s) => h << s - 32 | l >>> 64 - s;
        function add(Ah, Al, Bh, Bl) {
            const l = (Al >>> 0) + (Bl >>> 0);
            return {
                h: Ah + Bh + (l / 2 ** 32 | 0) | 0,
                l: l | 0
            };
        }
        const add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
        const add3H = (low, Ah, Bh, Ch) => Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
        const add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
        const add4H = (low, Ah, Bh, Ch, Dh) => Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
        const add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
        const add5H = (low, Ah, Bh, Ch, Dh, Eh) => Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
        const u64 = {
            fromBig,
            split,
            toBig,
            shrSH,
            shrSL,
            rotrSH,
            rotrSL,
            rotrBH,
            rotrBL,
            rotr32H,
            rotr32L,
            rotlSH,
            rotlSL,
            rotlBH,
            rotlBL,
            add,
            add3L,
            add3H,
            add4L,
            add4H,
            add5H,
            add5L
        };
        const _u64 = u64;
        const [SHA512_Kh, SHA512_Kl] = (() => _u64.split([ "0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817" ].map((n => BigInt(n)))))();
        const SHA512_W_H = new Uint32Array(80);
        const SHA512_W_L = new Uint32Array(80);
        class SHA512 extends SHA2 {
            constructor() {
                super(128, 64, 16, false);
                this.Ah = 1779033703 | 0;
                this.Al = 4089235720 | 0;
                this.Bh = 3144134277 | 0;
                this.Bl = 2227873595 | 0;
                this.Ch = 1013904242 | 0;
                this.Cl = 4271175723 | 0;
                this.Dh = 2773480762 | 0;
                this.Dl = 1595750129 | 0;
                this.Eh = 1359893119 | 0;
                this.El = 2917565137 | 0;
                this.Fh = 2600822924 | 0;
                this.Fl = 725511199 | 0;
                this.Gh = 528734635 | 0;
                this.Gl = 4215389547 | 0;
                this.Hh = 1541459225 | 0;
                this.Hl = 327033209 | 0;
            }
            get() {
                const {Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl} = this;
                return [ Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl ];
            }
            set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl) {
                this.Ah = Ah | 0;
                this.Al = Al | 0;
                this.Bh = Bh | 0;
                this.Bl = Bl | 0;
                this.Ch = Ch | 0;
                this.Cl = Cl | 0;
                this.Dh = Dh | 0;
                this.Dl = Dl | 0;
                this.Eh = Eh | 0;
                this.El = El | 0;
                this.Fh = Fh | 0;
                this.Fl = Fl | 0;
                this.Gh = Gh | 0;
                this.Gl = Gl | 0;
                this.Hh = Hh | 0;
                this.Hl = Hl | 0;
            }
            process(view, offset) {
                for (let i = 0; i < 16; i++, offset += 4) {
                    SHA512_W_H[i] = view.getUint32(offset);
                    SHA512_W_L[i] = view.getUint32(offset += 4);
                }
                for (let i = 16; i < 80; i++) {
                    const W15h = SHA512_W_H[i - 15] | 0;
                    const W15l = SHA512_W_L[i - 15] | 0;
                    const s0h = _u64.rotrSH(W15h, W15l, 1) ^ _u64.rotrSH(W15h, W15l, 8) ^ _u64.shrSH(W15h, W15l, 7);
                    const s0l = _u64.rotrSL(W15h, W15l, 1) ^ _u64.rotrSL(W15h, W15l, 8) ^ _u64.shrSL(W15h, W15l, 7);
                    const W2h = SHA512_W_H[i - 2] | 0;
                    const W2l = SHA512_W_L[i - 2] | 0;
                    const s1h = _u64.rotrSH(W2h, W2l, 19) ^ _u64.rotrBH(W2h, W2l, 61) ^ _u64.shrSH(W2h, W2l, 6);
                    const s1l = _u64.rotrSL(W2h, W2l, 19) ^ _u64.rotrBL(W2h, W2l, 61) ^ _u64.shrSL(W2h, W2l, 6);
                    const SUMl = _u64.add4L(s0l, s1l, SHA512_W_L[i - 7], SHA512_W_L[i - 16]);
                    const SUMh = _u64.add4H(SUMl, s0h, s1h, SHA512_W_H[i - 7], SHA512_W_H[i - 16]);
                    SHA512_W_H[i] = SUMh | 0;
                    SHA512_W_L[i] = SUMl | 0;
                }
                let {Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl} = this;
                for (let i = 0; i < 80; i++) {
                    const sigma1h = _u64.rotrSH(Eh, El, 14) ^ _u64.rotrSH(Eh, El, 18) ^ _u64.rotrBH(Eh, El, 41);
                    const sigma1l = _u64.rotrSL(Eh, El, 14) ^ _u64.rotrSL(Eh, El, 18) ^ _u64.rotrBL(Eh, El, 41);
                    const CHIh = Eh & Fh ^ ~Eh & Gh;
                    const CHIl = El & Fl ^ ~El & Gl;
                    const T1ll = _u64.add5L(Hl, sigma1l, CHIl, SHA512_Kl[i], SHA512_W_L[i]);
                    const T1h = _u64.add5H(T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i], SHA512_W_H[i]);
                    const T1l = T1ll | 0;
                    const sigma0h = _u64.rotrSH(Ah, Al, 28) ^ _u64.rotrBH(Ah, Al, 34) ^ _u64.rotrBH(Ah, Al, 39);
                    const sigma0l = _u64.rotrSL(Ah, Al, 28) ^ _u64.rotrBL(Ah, Al, 34) ^ _u64.rotrBL(Ah, Al, 39);
                    const MAJh = Ah & Bh ^ Ah & Ch ^ Bh & Ch;
                    const MAJl = Al & Bl ^ Al & Cl ^ Bl & Cl;
                    Hh = Gh | 0;
                    Hl = Gl | 0;
                    Gh = Fh | 0;
                    Gl = Fl | 0;
                    Fh = Eh | 0;
                    Fl = El | 0;
                    ({h: Eh, l: El} = _u64.add(Dh | 0, Dl | 0, T1h | 0, T1l | 0));
                    Dh = Ch | 0;
                    Dl = Cl | 0;
                    Ch = Bh | 0;
                    Cl = Bl | 0;
                    Bh = Ah | 0;
                    Bl = Al | 0;
                    const All = _u64.add3L(T1l, sigma0l, MAJl);
                    Ah = _u64.add3H(All, T1h, sigma0h, MAJh);
                    Al = All | 0;
                }
                ({h: Ah, l: Al} = _u64.add(this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
                ({h: Bh, l: Bl} = _u64.add(this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
                ({h: Ch, l: Cl} = _u64.add(this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
                ({h: Dh, l: Dl} = _u64.add(this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
                ({h: Eh, l: El} = _u64.add(this.Eh | 0, this.El | 0, Eh | 0, El | 0));
                ({h: Fh, l: Fl} = _u64.add(this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
                ({h: Gh, l: Gl} = _u64.add(this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
                ({h: Hh, l: Hl} = _u64.add(this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
                this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
            }
            roundClean() {
                SHA512_W_H.fill(0);
                SHA512_W_L.fill(0);
            }
            destroy() {
                this.buffer.fill(0);
                this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            }
        }
        class SHA512_224 extends SHA512 {
            constructor() {
                super();
                this.Ah = 2352822216 | 0;
                this.Al = 424955298 | 0;
                this.Bh = 1944164710 | 0;
                this.Bl = 2312950998 | 0;
                this.Ch = 502970286 | 0;
                this.Cl = 855612546 | 0;
                this.Dh = 1738396948 | 0;
                this.Dl = 1479516111 | 0;
                this.Eh = 258812777 | 0;
                this.El = 2077511080 | 0;
                this.Fh = 2011393907 | 0;
                this.Fl = 79989058 | 0;
                this.Gh = 1067287976 | 0;
                this.Gl = 1780299464 | 0;
                this.Hh = 286451373 | 0;
                this.Hl = 2446758561 | 0;
                this.outputLen = 28;
            }
        }
        class SHA512_256 extends SHA512 {
            constructor() {
                super();
                this.Ah = 573645204 | 0;
                this.Al = 4230739756 | 0;
                this.Bh = 2673172387 | 0;
                this.Bl = 3360449730 | 0;
                this.Ch = 596883563 | 0;
                this.Cl = 1867755857 | 0;
                this.Dh = 2520282905 | 0;
                this.Dl = 1497426621 | 0;
                this.Eh = 2519219938 | 0;
                this.El = 2827943907 | 0;
                this.Fh = 3193839141 | 0;
                this.Fl = 1401305490 | 0;
                this.Gh = 721525244 | 0;
                this.Gl = 746961066 | 0;
                this.Hh = 246885852 | 0;
                this.Hl = 2177182882 | 0;
                this.outputLen = 32;
            }
        }
        class SHA384 extends SHA512 {
            constructor() {
                super();
                this.Ah = 3418070365 | 0;
                this.Al = 3238371032 | 0;
                this.Bh = 1654270250 | 0;
                this.Bl = 914150663 | 0;
                this.Ch = 2438529370 | 0;
                this.Cl = 812702999 | 0;
                this.Dh = 355462360 | 0;
                this.Dl = 4144912697 | 0;
                this.Eh = 1731405415 | 0;
                this.El = 4290775857 | 0;
                this.Fh = 2394180231 | 0;
                this.Fl = 1750603025 | 0;
                this.Gh = 3675008525 | 0;
                this.Gl = 1694076839 | 0;
                this.Hh = 1203062813 | 0;
                this.Hl = 3204075428 | 0;
                this.outputLen = 48;
            }
        }
        const sha512_sha512 = utils_wrapConstructor((() => new SHA512));
        null && wrapConstructor((() => new SHA512_224));
        null && wrapConstructor((() => new SHA512_256));
        null && wrapConstructor((() => new SHA384));
        /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
        BigInt(0);
        const _1n = BigInt(1);
        const _2n = BigInt(2);
        function abstract_utils_isBytes(a) {
            return a instanceof Uint8Array || a != null && typeof a === "object" && a.constructor.name === "Uint8Array";
        }
        const utils_hexes = Array.from({
            length: 256
        }, ((_, i) => i.toString(16).padStart(2, "0")));
        function abstract_utils_bytesToHex(bytes) {
            if (!abstract_utils_isBytes(bytes)) throw new Error("Uint8Array expected");
            let hex = "";
            for (let i = 0; i < bytes.length; i++) hex += utils_hexes[bytes[i]];
            return hex;
        }
        function hexToNumber(hex) {
            if (typeof hex !== "string") throw new Error("hex string expected, got " + typeof hex);
            return BigInt(hex === "" ? "0" : `0x${hex}`);
        }
        const utils_asciis = {
            _0: 48,
            _9: 57,
            _A: 65,
            _F: 70,
            _a: 97,
            _f: 102
        };
        function utils_asciiToBase16(char) {
            if (char >= utils_asciis._0 && char <= utils_asciis._9) return char - utils_asciis._0;
            if (char >= utils_asciis._A && char <= utils_asciis._F) return char - (utils_asciis._A - 10);
            if (char >= utils_asciis._a && char <= utils_asciis._f) return char - (utils_asciis._a - 10);
            return;
        }
        function utils_hexToBytes(hex) {
            if (typeof hex !== "string") throw new Error("hex string expected, got " + typeof hex);
            const hl = hex.length;
            const al = hl / 2;
            if (hl % 2) throw new Error("padded hex string expected, got unpadded hex of length " + hl);
            const array = new Uint8Array(al);
            for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
                const n1 = utils_asciiToBase16(hex.charCodeAt(hi));
                const n2 = utils_asciiToBase16(hex.charCodeAt(hi + 1));
                if (n1 === void 0 || n2 === void 0) {
                    const char = hex[hi] + hex[hi + 1];
                    throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
                }
                array[ai] = n1 * 16 + n2;
            }
            return array;
        }
        function utils_bytesToNumberBE(bytes) {
            return hexToNumber(abstract_utils_bytesToHex(bytes));
        }
        function utils_bytesToNumberLE(bytes) {
            if (!abstract_utils_isBytes(bytes)) throw new Error("Uint8Array expected");
            return hexToNumber(abstract_utils_bytesToHex(Uint8Array.from(bytes).reverse()));
        }
        function utils_numberToBytesBE(n, len) {
            return utils_hexToBytes(n.toString(16).padStart(len * 2, "0"));
        }
        function utils_numberToBytesLE(n, len) {
            return utils_numberToBytesBE(n, len).reverse();
        }
        function utils_ensureBytes(title, hex, expectedLength) {
            let res;
            if (typeof hex === "string") try {
                res = utils_hexToBytes(hex);
            } catch (e) {
                throw new Error(`${title} must be valid hex string, got "${hex}". Cause: ${e}`);
            } else if (abstract_utils_isBytes(hex)) res = Uint8Array.from(hex); else throw new Error(`${title} must be hex string or Uint8Array`);
            const len = res.length;
            if (typeof expectedLength === "number" && len !== expectedLength) throw new Error(`${title} expected ${expectedLength} bytes, got ${len}`);
            return res;
        }
        function abstract_utils_concatBytes(...arrays) {
            let sum = 0;
            for (let i = 0; i < arrays.length; i++) {
                const a = arrays[i];
                if (!abstract_utils_isBytes(a)) throw new Error("Uint8Array expected");
                sum += a.length;
            }
            let res = new Uint8Array(sum);
            let pad = 0;
            for (let i = 0; i < arrays.length; i++) {
                const a = arrays[i];
                res.set(a, pad);
                pad += a.length;
            }
            return res;
        }
        const bitMask = n => (_2n << BigInt(n - 1)) - _1n;
        const u8n = data => new Uint8Array(data);
        const u8fr = arr => Uint8Array.from(arr);
        function createHmacDrbg(hashLen, qByteLen, hmacFn) {
            if (typeof hashLen !== "number" || hashLen < 2) throw new Error("hashLen must be a number");
            if (typeof qByteLen !== "number" || qByteLen < 2) throw new Error("qByteLen must be a number");
            if (typeof hmacFn !== "function") throw new Error("hmacFn must be a function");
            let v = u8n(hashLen);
            let k = u8n(hashLen);
            let i = 0;
            const reset = () => {
                v.fill(1);
                k.fill(0);
                i = 0;
            };
            const h = (...b) => hmacFn(k, v, ...b);
            const reseed = (seed = u8n()) => {
                k = h(u8fr([ 0 ]), seed);
                v = h();
                if (seed.length === 0) return;
                k = h(u8fr([ 1 ]), seed);
                v = h();
            };
            const gen = () => {
                if (i++ >= 1e3) throw new Error("drbg: tried 1000 values");
                let len = 0;
                const out = [];
                while (len < qByteLen) {
                    v = h();
                    const sl = v.slice();
                    out.push(sl);
                    len += v.length;
                }
                return abstract_utils_concatBytes(...out);
            };
            const genUntil = (seed, pred) => {
                reset();
                reseed(seed);
                let res;
                while (!(res = pred(gen()))) reseed();
                reset();
                return res;
            };
            return genUntil;
        }
        const validatorFns = {
            bigint: val => typeof val === "bigint",
            function: val => typeof val === "function",
            boolean: val => typeof val === "boolean",
            string: val => typeof val === "string",
            stringOrUint8Array: val => typeof val === "string" || abstract_utils_isBytes(val),
            isSafeInteger: val => Number.isSafeInteger(val),
            array: val => Array.isArray(val),
            field: (val, object) => object.Fp.isValid(val),
            hash: val => typeof val === "function" && Number.isSafeInteger(val.outputLen)
        };
        function validateObject(object, validators, optValidators = {}) {
            const checkField = (fieldName, type, isOptional) => {
                const checkVal = validatorFns[type];
                if (typeof checkVal !== "function") throw new Error(`Invalid validator "${type}", expected function`);
                const val = object[fieldName];
                if (isOptional && val === void 0) return;
                if (!checkVal(val, object)) throw new Error(`Invalid param ${String(fieldName)}=${val} (${typeof val}), expected ${type}`);
            };
            for (const [fieldName, type] of Object.entries(validators)) checkField(fieldName, type, false);
            for (const [fieldName, type] of Object.entries(optValidators)) checkField(fieldName, type, true);
            return object;
        }
        /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
        const modular_0n = BigInt(0), modular_1n = BigInt(1), modular_2n = BigInt(2), _3n = BigInt(3);
        const _4n = BigInt(4), _5n = BigInt(5), _8n = BigInt(8);
        const _9n = BigInt(9), _16n = BigInt(16);
        function modular_mod(a, b) {
            const result = a % b;
            return result >= modular_0n ? result : b + result;
        }
        function pow(num, power, modulo) {
            if (modulo <= modular_0n || power < modular_0n) throw new Error("Expected power/modulo > 0");
            if (modulo === modular_1n) return modular_0n;
            let res = modular_1n;
            while (power > modular_0n) {
                if (power & modular_1n) res = res * num % modulo;
                num = num * num % modulo;
                power >>= modular_1n;
            }
            return res;
        }
        function modular_pow2(x, power, modulo) {
            let res = x;
            while (power-- > modular_0n) {
                res *= res;
                res %= modulo;
            }
            return res;
        }
        function invert(number, modulo) {
            if (number === modular_0n || modulo <= modular_0n) throw new Error(`invert: expected positive integers, got n=${number} mod=${modulo}`);
            let a = modular_mod(number, modulo);
            let b = modulo;
            let x = modular_0n, y = modular_1n, u = modular_1n, v = modular_0n;
            while (a !== modular_0n) {
                const q = b / a;
                const r = b % a;
                const m = x - u * q;
                const n = y - v * q;
                b = a, a = r, x = u, y = v, u = m, v = n;
            }
            const gcd = b;
            if (gcd !== modular_1n) throw new Error("invert: does not exist");
            return modular_mod(x, modulo);
        }
        function tonelliShanks(P) {
            const legendreC = (P - modular_1n) / modular_2n;
            let Q, S, Z;
            for (Q = P - modular_1n, S = 0; Q % modular_2n === modular_0n; Q /= modular_2n, 
            S++) ;
            for (Z = modular_2n; Z < P && pow(Z, legendreC, P) !== P - modular_1n; Z++) ;
            if (S === 1) {
                const p1div4 = (P + modular_1n) / _4n;
                return function tonelliFast(Fp, n) {
                    const root = Fp.pow(n, p1div4);
                    if (!Fp.eql(Fp.sqr(root), n)) throw new Error("Cannot find square root");
                    return root;
                };
            }
            const Q1div2 = (Q + modular_1n) / modular_2n;
            return function tonelliSlow(Fp, n) {
                if (Fp.pow(n, legendreC) === Fp.neg(Fp.ONE)) throw new Error("Cannot find square root");
                let r = S;
                let g = Fp.pow(Fp.mul(Fp.ONE, Z), Q);
                let x = Fp.pow(n, Q1div2);
                let b = Fp.pow(n, Q);
                while (!Fp.eql(b, Fp.ONE)) {
                    if (Fp.eql(b, Fp.ZERO)) return Fp.ZERO;
                    let m = 1;
                    for (let t2 = Fp.sqr(b); m < r; m++) {
                        if (Fp.eql(t2, Fp.ONE)) break;
                        t2 = Fp.sqr(t2);
                    }
                    const ge = Fp.pow(g, modular_1n << BigInt(r - m - 1));
                    g = Fp.sqr(ge);
                    x = Fp.mul(x, ge);
                    b = Fp.mul(b, g);
                    r = m;
                }
                return x;
            };
        }
        function FpSqrt(P) {
            if (P % _4n === _3n) {
                const p1div4 = (P + modular_1n) / _4n;
                return function sqrt3mod4(Fp, n) {
                    const root = Fp.pow(n, p1div4);
                    if (!Fp.eql(Fp.sqr(root), n)) throw new Error("Cannot find square root");
                    return root;
                };
            }
            if (P % _8n === _5n) {
                const c1 = (P - _5n) / _8n;
                return function sqrt5mod8(Fp, n) {
                    const n2 = Fp.mul(n, modular_2n);
                    const v = Fp.pow(n2, c1);
                    const nv = Fp.mul(n, v);
                    const i = Fp.mul(Fp.mul(nv, modular_2n), v);
                    const root = Fp.mul(nv, Fp.sub(i, Fp.ONE));
                    if (!Fp.eql(Fp.sqr(root), n)) throw new Error("Cannot find square root");
                    return root;
                };
            }
            if (P % _16n === _9n) ;
            return tonelliShanks(P);
        }
        const modular_isNegativeLE = (num, modulo) => (modular_mod(num, modulo) & modular_1n) === modular_1n;
        const FIELD_FIELDS = [ "create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN" ];
        function validateField(field) {
            const initial = {
                ORDER: "bigint",
                MASK: "bigint",
                BYTES: "isSafeInteger",
                BITS: "isSafeInteger"
            };
            const opts = FIELD_FIELDS.reduce(((map, val) => {
                map[val] = "function";
                return map;
            }), initial);
            return validateObject(field, opts);
        }
        function FpPow(f, num, power) {
            if (power < modular_0n) throw new Error("Expected power > 0");
            if (power === modular_0n) return f.ONE;
            if (power === modular_1n) return num;
            let p = f.ONE;
            let d = num;
            while (power > modular_0n) {
                if (power & modular_1n) p = f.mul(p, d);
                d = f.sqr(d);
                power >>= modular_1n;
            }
            return p;
        }
        function FpInvertBatch(f, nums) {
            const tmp = new Array(nums.length);
            const lastMultiplied = nums.reduce(((acc, num, i) => {
                if (f.is0(num)) return acc;
                tmp[i] = acc;
                return f.mul(acc, num);
            }), f.ONE);
            const inverted = f.inv(lastMultiplied);
            nums.reduceRight(((acc, num, i) => {
                if (f.is0(num)) return acc;
                tmp[i] = f.mul(acc, tmp[i]);
                return f.mul(acc, num);
            }), inverted);
            return tmp;
        }
        function nLength(n, nBitLength) {
            const _nBitLength = nBitLength !== void 0 ? nBitLength : n.toString(2).length;
            const nByteLength = Math.ceil(_nBitLength / 8);
            return {
                nBitLength: _nBitLength,
                nByteLength
            };
        }
        function Field(ORDER, bitLen, isLE = false, redef = {}) {
            if (ORDER <= modular_0n) throw new Error(`Expected Field ORDER > 0, got ${ORDER}`);
            const {nBitLength: BITS, nByteLength: BYTES} = nLength(ORDER, bitLen);
            if (BYTES > 2048) throw new Error("Field lengths over 2048 bytes are not supported");
            const sqrtP = FpSqrt(ORDER);
            const f = Object.freeze({
                ORDER,
                BITS,
                BYTES,
                MASK: bitMask(BITS),
                ZERO: modular_0n,
                ONE: modular_1n,
                create: num => modular_mod(num, ORDER),
                isValid: num => {
                    if (typeof num !== "bigint") throw new Error(`Invalid field element: expected bigint, got ${typeof num}`);
                    return modular_0n <= num && num < ORDER;
                },
                is0: num => num === modular_0n,
                isOdd: num => (num & modular_1n) === modular_1n,
                neg: num => modular_mod(-num, ORDER),
                eql: (lhs, rhs) => lhs === rhs,
                sqr: num => modular_mod(num * num, ORDER),
                add: (lhs, rhs) => modular_mod(lhs + rhs, ORDER),
                sub: (lhs, rhs) => modular_mod(lhs - rhs, ORDER),
                mul: (lhs, rhs) => modular_mod(lhs * rhs, ORDER),
                pow: (num, power) => FpPow(f, num, power),
                div: (lhs, rhs) => modular_mod(lhs * invert(rhs, ORDER), ORDER),
                sqrN: num => num * num,
                addN: (lhs, rhs) => lhs + rhs,
                subN: (lhs, rhs) => lhs - rhs,
                mulN: (lhs, rhs) => lhs * rhs,
                inv: num => invert(num, ORDER),
                sqrt: redef.sqrt || (n => sqrtP(f, n)),
                invertBatch: lst => FpInvertBatch(f, lst),
                cmov: (a, b, c) => c ? b : a,
                toBytes: num => isLE ? utils_numberToBytesLE(num, BYTES) : utils_numberToBytesBE(num, BYTES),
                fromBytes: bytes => {
                    if (bytes.length !== BYTES) throw new Error(`Fp.fromBytes: expected ${BYTES}, got ${bytes.length}`);
                    return isLE ? utils_bytesToNumberLE(bytes) : utils_bytesToNumberBE(bytes);
                }
            });
            return Object.freeze(f);
        }
        function FpSqrtEven(Fp, elm) {
            if (!Fp.isOdd) throw new Error(`Field doesn't have isOdd`);
            const root = Fp.sqrt(elm);
            return Fp.isOdd(root) ? Fp.neg(root) : root;
        }
        function getFieldBytesLength(fieldOrder) {
            if (typeof fieldOrder !== "bigint") throw new Error("field order must be bigint");
            const bitLength = fieldOrder.toString(2).length;
            return Math.ceil(bitLength / 8);
        }
        function getMinHashLength(fieldOrder) {
            const length = getFieldBytesLength(fieldOrder);
            return length + Math.ceil(length / 2);
        }
        function mapHashToField(key, fieldOrder, isLE = false) {
            const len = key.length;
            const fieldLen = getFieldBytesLength(fieldOrder);
            const minLen = getMinHashLength(fieldOrder);
            if (len < 16 || len < minLen || len > 1024) throw new Error(`expected ${minLen}-1024 bytes of input, got ${len}`);
            const num = isLE ? utils_bytesToNumberBE(key) : utils_bytesToNumberLE(key);
            const reduced = modular_mod(num, fieldOrder - modular_1n) + modular_1n;
            return isLE ? utils_numberToBytesLE(reduced, fieldLen) : utils_numberToBytesBE(reduced, fieldLen);
        }
        /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
        const curve_0n = BigInt(0);
        const curve_1n = BigInt(1);
        function wNAF(c, bits) {
            const constTimeNegate = (condition, item) => {
                const neg = item.negate();
                return condition ? neg : item;
            };
            const opts = W => {
                const windows = Math.ceil(bits / W) + 1;
                const windowSize = 2 ** (W - 1);
                return {
                    windows,
                    windowSize
                };
            };
            return {
                constTimeNegate,
                unsafeLadder(elm, n) {
                    let p = c.ZERO;
                    let d = elm;
                    while (n > curve_0n) {
                        if (n & curve_1n) p = p.add(d);
                        d = d.double();
                        n >>= curve_1n;
                    }
                    return p;
                },
                precomputeWindow(elm, W) {
                    const {windows, windowSize} = opts(W);
                    const points = [];
                    let p = elm;
                    let base = p;
                    for (let window = 0; window < windows; window++) {
                        base = p;
                        points.push(base);
                        for (let i = 1; i < windowSize; i++) {
                            base = base.add(p);
                            points.push(base);
                        }
                        p = base.double();
                    }
                    return points;
                },
                wNAF(W, precomputes, n) {
                    const {windows, windowSize} = opts(W);
                    let p = c.ZERO;
                    let f = c.BASE;
                    const mask = BigInt(2 ** W - 1);
                    const maxNumber = 2 ** W;
                    const shiftBy = BigInt(W);
                    for (let window = 0; window < windows; window++) {
                        const offset = window * windowSize;
                        let wbits = Number(n & mask);
                        n >>= shiftBy;
                        if (wbits > windowSize) {
                            wbits -= maxNumber;
                            n += curve_1n;
                        }
                        const offset1 = offset;
                        const offset2 = offset + Math.abs(wbits) - 1;
                        const cond1 = window % 2 !== 0;
                        const cond2 = wbits < 0;
                        if (wbits === 0) f = f.add(constTimeNegate(cond1, precomputes[offset1])); else p = p.add(constTimeNegate(cond2, precomputes[offset2]));
                    }
                    return {
                        p,
                        f
                    };
                },
                wNAFCached(P, precomputesMap, n, transform) {
                    const W = P._WINDOW_SIZE || 1;
                    let comp = precomputesMap.get(P);
                    if (!comp) {
                        comp = this.precomputeWindow(P, W);
                        if (W !== 1) precomputesMap.set(P, transform(comp));
                    }
                    return this.wNAF(W, comp, n);
                }
            };
        }
        function validateBasic(curve) {
            validateField(curve.Fp);
            validateObject(curve, {
                n: "bigint",
                h: "bigint",
                Gx: "field",
                Gy: "field"
            }, {
                nBitLength: "isSafeInteger",
                nByteLength: "isSafeInteger"
            });
            return Object.freeze({
                ...nLength(curve.n, curve.nBitLength),
                ...curve,
                p: curve.Fp.ORDER
            });
        }
        /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
        const edwards_0n = BigInt(0), edwards_1n = BigInt(1), edwards_2n = BigInt(2), edwards_8n = BigInt(8);
        const VERIFY_DEFAULT = {
            zip215: true
        };
        function validateOpts(curve) {
            const opts = validateBasic(curve);
            validateObject(curve, {
                hash: "function",
                a: "bigint",
                d: "bigint",
                randomBytes: "function"
            }, {
                adjustScalarBytes: "function",
                domain: "function",
                uvRatio: "function",
                mapToCurve: "function"
            });
            return Object.freeze({
                ...opts
            });
        }
        function twistedEdwards(curveDef) {
            const CURVE = validateOpts(curveDef);
            const {Fp, n: CURVE_ORDER, prehash, hash: cHash, randomBytes, nByteLength, h: cofactor} = CURVE;
            const MASK = edwards_2n << BigInt(nByteLength * 8) - edwards_1n;
            const modP = Fp.create;
            const uvRatio = CURVE.uvRatio || ((u, v) => {
                try {
                    return {
                        isValid: true,
                        value: Fp.sqrt(u * Fp.inv(v))
                    };
                } catch (e) {
                    return {
                        isValid: false,
                        value: edwards_0n
                    };
                }
            });
            const adjustScalarBytes = CURVE.adjustScalarBytes || (bytes => bytes);
            const domain = CURVE.domain || ((data, ctx, phflag) => {
                if (ctx.length || phflag) throw new Error("Contexts/pre-hash are not supported");
                return data;
            });
            const inBig = n => typeof n === "bigint" && edwards_0n < n;
            const inRange = (n, max) => inBig(n) && inBig(max) && n < max;
            const in0MaskRange = n => n === edwards_0n || inRange(n, MASK);
            function assertInRange(n, max) {
                if (inRange(n, max)) return n;
                throw new Error(`Expected valid scalar < ${max}, got ${typeof n} ${n}`);
            }
            function assertGE0(n) {
                return n === edwards_0n ? n : assertInRange(n, CURVE_ORDER);
            }
            const pointPrecomputes = new Map;
            function isPoint(other) {
                if (!(other instanceof Point)) throw new Error("ExtendedPoint expected");
            }
            class Point {
                constructor(ex, ey, ez, et) {
                    this.ex = ex;
                    this.ey = ey;
                    this.ez = ez;
                    this.et = et;
                    if (!in0MaskRange(ex)) throw new Error("x required");
                    if (!in0MaskRange(ey)) throw new Error("y required");
                    if (!in0MaskRange(ez)) throw new Error("z required");
                    if (!in0MaskRange(et)) throw new Error("t required");
                }
                get x() {
                    return this.toAffine().x;
                }
                get y() {
                    return this.toAffine().y;
                }
                static fromAffine(p) {
                    if (p instanceof Point) throw new Error("extended point not allowed");
                    const {x, y} = p || {};
                    if (!in0MaskRange(x) || !in0MaskRange(y)) throw new Error("invalid affine point");
                    return new Point(x, y, edwards_1n, modP(x * y));
                }
                static normalizeZ(points) {
                    const toInv = Fp.invertBatch(points.map((p => p.ez)));
                    return points.map(((p, i) => p.toAffine(toInv[i]))).map(Point.fromAffine);
                }
                _setWindowSize(windowSize) {
                    this._WINDOW_SIZE = windowSize;
                    pointPrecomputes.delete(this);
                }
                assertValidity() {
                    const {a, d} = CURVE;
                    if (this.is0()) throw new Error("bad point: ZERO");
                    const {ex: X, ey: Y, ez: Z, et: T} = this;
                    const X2 = modP(X * X);
                    const Y2 = modP(Y * Y);
                    const Z2 = modP(Z * Z);
                    const Z4 = modP(Z2 * Z2);
                    const aX2 = modP(X2 * a);
                    const left = modP(Z2 * modP(aX2 + Y2));
                    const right = modP(Z4 + modP(d * modP(X2 * Y2)));
                    if (left !== right) throw new Error("bad point: equation left != right (1)");
                    const XY = modP(X * Y);
                    const ZT = modP(Z * T);
                    if (XY !== ZT) throw new Error("bad point: equation left != right (2)");
                }
                equals(other) {
                    isPoint(other);
                    const {ex: X1, ey: Y1, ez: Z1} = this;
                    const {ex: X2, ey: Y2, ez: Z2} = other;
                    const X1Z2 = modP(X1 * Z2);
                    const X2Z1 = modP(X2 * Z1);
                    const Y1Z2 = modP(Y1 * Z2);
                    const Y2Z1 = modP(Y2 * Z1);
                    return X1Z2 === X2Z1 && Y1Z2 === Y2Z1;
                }
                is0() {
                    return this.equals(Point.ZERO);
                }
                negate() {
                    return new Point(modP(-this.ex), this.ey, this.ez, modP(-this.et));
                }
                double() {
                    const {a} = CURVE;
                    const {ex: X1, ey: Y1, ez: Z1} = this;
                    const A = modP(X1 * X1);
                    const B = modP(Y1 * Y1);
                    const C = modP(edwards_2n * modP(Z1 * Z1));
                    const D = modP(a * A);
                    const x1y1 = X1 + Y1;
                    const E = modP(modP(x1y1 * x1y1) - A - B);
                    const G = D + B;
                    const F = G - C;
                    const H = D - B;
                    const X3 = modP(E * F);
                    const Y3 = modP(G * H);
                    const T3 = modP(E * H);
                    const Z3 = modP(F * G);
                    return new Point(X3, Y3, Z3, T3);
                }
                add(other) {
                    isPoint(other);
                    const {a, d} = CURVE;
                    const {ex: X1, ey: Y1, ez: Z1, et: T1} = this;
                    const {ex: X2, ey: Y2, ez: Z2, et: T2} = other;
                    if (a === BigInt(-1)) {
                        const A = modP((Y1 - X1) * (Y2 + X2));
                        const B = modP((Y1 + X1) * (Y2 - X2));
                        const F = modP(B - A);
                        if (F === edwards_0n) return this.double();
                        const C = modP(Z1 * edwards_2n * T2);
                        const D = modP(T1 * edwards_2n * Z2);
                        const E = D + C;
                        const G = B + A;
                        const H = D - C;
                        const X3 = modP(E * F);
                        const Y3 = modP(G * H);
                        const T3 = modP(E * H);
                        const Z3 = modP(F * G);
                        return new Point(X3, Y3, Z3, T3);
                    }
                    const A = modP(X1 * X2);
                    const B = modP(Y1 * Y2);
                    const C = modP(T1 * d * T2);
                    const D = modP(Z1 * Z2);
                    const E = modP((X1 + Y1) * (X2 + Y2) - A - B);
                    const F = D - C;
                    const G = D + C;
                    const H = modP(B - a * A);
                    const X3 = modP(E * F);
                    const Y3 = modP(G * H);
                    const T3 = modP(E * H);
                    const Z3 = modP(F * G);
                    return new Point(X3, Y3, Z3, T3);
                }
                subtract(other) {
                    return this.add(other.negate());
                }
                wNAF(n) {
                    return wnaf.wNAFCached(this, pointPrecomputes, n, Point.normalizeZ);
                }
                multiply(scalar) {
                    const {p, f} = this.wNAF(assertInRange(scalar, CURVE_ORDER));
                    return Point.normalizeZ([ p, f ])[0];
                }
                multiplyUnsafe(scalar) {
                    let n = assertGE0(scalar);
                    if (n === edwards_0n) return I;
                    if (this.equals(I) || n === edwards_1n) return this;
                    if (this.equals(G)) return this.wNAF(n).p;
                    return wnaf.unsafeLadder(this, n);
                }
                isSmallOrder() {
                    return this.multiplyUnsafe(cofactor).is0();
                }
                isTorsionFree() {
                    return wnaf.unsafeLadder(this, CURVE_ORDER).is0();
                }
                toAffine(iz) {
                    const {ex: x, ey: y, ez: z} = this;
                    const is0 = this.is0();
                    if (iz == null) iz = is0 ? edwards_8n : Fp.inv(z);
                    const ax = modP(x * iz);
                    const ay = modP(y * iz);
                    const zz = modP(z * iz);
                    if (is0) return {
                        x: edwards_0n,
                        y: edwards_1n
                    };
                    if (zz !== edwards_1n) throw new Error("invZ was invalid");
                    return {
                        x: ax,
                        y: ay
                    };
                }
                clearCofactor() {
                    const {h: cofactor} = CURVE;
                    if (cofactor === edwards_1n) return this;
                    return this.multiplyUnsafe(cofactor);
                }
                static fromHex(hex, zip215 = false) {
                    const {d, a} = CURVE;
                    const len = Fp.BYTES;
                    hex = utils_ensureBytes("pointHex", hex, len);
                    const normed = hex.slice();
                    const lastByte = hex[len - 1];
                    normed[len - 1] = lastByte & ~128;
                    const y = utils_bytesToNumberLE(normed);
                    if (y === edwards_0n) ; else if (zip215) assertInRange(y, MASK); else assertInRange(y, Fp.ORDER);
                    const y2 = modP(y * y);
                    const u = modP(y2 - edwards_1n);
                    const v = modP(d * y2 - a);
                    let {isValid, value: x} = uvRatio(u, v);
                    if (!isValid) throw new Error("Point.fromHex: invalid y coordinate");
                    const isXOdd = (x & edwards_1n) === edwards_1n;
                    const isLastByteOdd = (lastByte & 128) !== 0;
                    if (!zip215 && x === edwards_0n && isLastByteOdd) throw new Error("Point.fromHex: x=0 and x_0=1");
                    if (isLastByteOdd !== isXOdd) x = modP(-x);
                    return Point.fromAffine({
                        x,
                        y
                    });
                }
                static fromPrivateKey(privKey) {
                    return getExtendedPublicKey(privKey).point;
                }
                toRawBytes() {
                    const {x, y} = this.toAffine();
                    const bytes = utils_numberToBytesLE(y, Fp.BYTES);
                    bytes[bytes.length - 1] |= x & edwards_1n ? 128 : 0;
                    return bytes;
                }
                toHex() {
                    return abstract_utils_bytesToHex(this.toRawBytes());
                }
            }
            Point.BASE = new Point(CURVE.Gx, CURVE.Gy, edwards_1n, modP(CURVE.Gx * CURVE.Gy));
            Point.ZERO = new Point(edwards_0n, edwards_1n, edwards_1n, edwards_0n);
            const {BASE: G, ZERO: I} = Point;
            const wnaf = wNAF(Point, nByteLength * 8);
            function modN(a) {
                return modular_mod(a, CURVE_ORDER);
            }
            function modN_LE(hash) {
                return modN(utils_bytesToNumberLE(hash));
            }
            function getExtendedPublicKey(key) {
                const len = nByteLength;
                key = utils_ensureBytes("private key", key, len);
                const hashed = utils_ensureBytes("hashed private key", cHash(key), 2 * len);
                const head = adjustScalarBytes(hashed.slice(0, len));
                const prefix = hashed.slice(len, 2 * len);
                const scalar = modN_LE(head);
                const point = G.multiply(scalar);
                const pointBytes = point.toRawBytes();
                return {
                    head,
                    prefix,
                    scalar,
                    point,
                    pointBytes
                };
            }
            function getPublicKey(privKey) {
                return getExtendedPublicKey(privKey).pointBytes;
            }
            function hashDomainToScalar(context = new Uint8Array, ...msgs) {
                const msg = abstract_utils_concatBytes(...msgs);
                return modN_LE(cHash(domain(msg, utils_ensureBytes("context", context), !!prehash)));
            }
            function sign(msg, privKey, options = {}) {
                msg = utils_ensureBytes("message", msg);
                if (prehash) msg = prehash(msg);
                const {prefix, scalar, pointBytes} = getExtendedPublicKey(privKey);
                const r = hashDomainToScalar(options.context, prefix, msg);
                const R = G.multiply(r).toRawBytes();
                const k = hashDomainToScalar(options.context, R, pointBytes, msg);
                const s = modN(r + k * scalar);
                assertGE0(s);
                const res = abstract_utils_concatBytes(R, utils_numberToBytesLE(s, Fp.BYTES));
                return utils_ensureBytes("result", res, nByteLength * 2);
            }
            const verifyOpts = VERIFY_DEFAULT;
            function verify(sig, msg, publicKey, options = verifyOpts) {
                const {context, zip215} = options;
                const len = Fp.BYTES;
                sig = utils_ensureBytes("signature", sig, 2 * len);
                msg = utils_ensureBytes("message", msg);
                if (prehash) msg = prehash(msg);
                const s = utils_bytesToNumberLE(sig.slice(len, 2 * len));
                let A, R, SB;
                try {
                    A = Point.fromHex(publicKey, zip215);
                    R = Point.fromHex(sig.slice(0, len), zip215);
                    SB = G.multiplyUnsafe(s);
                } catch (error) {
                    return false;
                }
                if (!zip215 && A.isSmallOrder()) return false;
                const k = hashDomainToScalar(context, R.toRawBytes(), A.toRawBytes(), msg);
                const RkA = R.add(A.multiplyUnsafe(k));
                return RkA.subtract(SB).clearCofactor().equals(Point.ZERO);
            }
            G._setWindowSize(8);
            const utils = {
                getExtendedPublicKey,
                randomPrivateKey: () => randomBytes(Fp.BYTES),
                precompute(windowSize = 8, point = Point.BASE) {
                    point._setWindowSize(windowSize);
                    point.multiply(BigInt(3));
                    return point;
                }
            };
            return {
                CURVE,
                getPublicKey,
                sign,
                verify,
                ExtendedPoint: Point,
                utils
            };
        }
        /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
        const ED25519_P = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949");
        const ED25519_SQRT_M1 = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
        const ed25519_0n = BigInt(0), ed25519_1n = BigInt(1), ed25519_2n = BigInt(2), ed25519_5n = BigInt(5);
        const _10n = BigInt(10), _20n = BigInt(20), _40n = BigInt(40), _80n = BigInt(80);
        function ed25519_pow_2_252_3(x) {
            const P = ED25519_P;
            const x2 = x * x % P;
            const b2 = x2 * x % P;
            const b4 = modular_pow2(b2, ed25519_2n, P) * b2 % P;
            const b5 = modular_pow2(b4, ed25519_1n, P) * x % P;
            const b10 = modular_pow2(b5, ed25519_5n, P) * b5 % P;
            const b20 = modular_pow2(b10, _10n, P) * b10 % P;
            const b40 = modular_pow2(b20, _20n, P) * b20 % P;
            const b80 = modular_pow2(b40, _40n, P) * b40 % P;
            const b160 = modular_pow2(b80, _80n, P) * b80 % P;
            const b240 = modular_pow2(b160, _80n, P) * b80 % P;
            const b250 = modular_pow2(b240, _10n, P) * b10 % P;
            const pow_p_5_8 = modular_pow2(b250, ed25519_2n, P) * x % P;
            return {
                pow_p_5_8,
                b2
            };
        }
        function adjustScalarBytes(bytes) {
            bytes[0] &= 248;
            bytes[31] &= 127;
            bytes[31] |= 64;
            return bytes;
        }
        function uvRatio(u, v) {
            const P = ED25519_P;
            const v3 = modular_mod(v * v * v, P);
            const v7 = modular_mod(v3 * v3 * v, P);
            const pow = ed25519_pow_2_252_3(u * v7).pow_p_5_8;
            let x = modular_mod(u * v3 * pow, P);
            const vx2 = modular_mod(v * x * x, P);
            const root1 = x;
            const root2 = modular_mod(x * ED25519_SQRT_M1, P);
            const useRoot1 = vx2 === u;
            const useRoot2 = vx2 === modular_mod(-u, P);
            const noRoot = vx2 === modular_mod(-u * ED25519_SQRT_M1, P);
            if (useRoot1) x = root1;
            if (useRoot2 || noRoot) x = root2;
            if (modular_isNegativeLE(x, P)) x = modular_mod(-x, P);
            return {
                isValid: useRoot1 || useRoot2,
                value: x
            };
        }
        const Fp = Field(ED25519_P, void 0, true);
        const ed25519Defaults = {
            a: BigInt(-1),
            d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
            Fp,
            n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"),
            h: BigInt(8),
            Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
            Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"),
            hash: sha512_sha512,
            randomBytes: utils_randomBytes,
            adjustScalarBytes,
            uvRatio
        };
        const ed25519 = twistedEdwards(ed25519Defaults);
        function ed25519_domain(data, ctx, phflag) {
            if (ctx.length > 255) throw new Error("Context is too big");
            return utils_concatBytes(utils_utf8ToBytes("SigEd25519 no Ed25519 collisions"), new Uint8Array([ phflag ? 1 : 0, ctx.length ]), ctx, data);
        }
        twistedEdwards({
            ...ed25519Defaults,
            domain: ed25519_domain
        });
        twistedEdwards({
            ...ed25519Defaults,
            domain: ed25519_domain,
            prehash: sha512_sha512
        });
        null && (() => {
            montgomery({
                P: ED25519_P,
                a: BigInt(486662),
                montgomeryBits: 255,
                nByteLength: 32,
                Gu: BigInt(9),
                powPminus2: x => {
                    const P = ED25519_P;
                    const {pow_p_5_8, b2} = ed25519_pow_2_252_3(x);
                    return mod(pow2(pow_p_5_8, BigInt(3), P) * b2, P);
                },
                adjustScalarBytes,
                randomBytes
            });
        })();
        const ELL2_C1 = (Fp.ORDER + BigInt(3)) / BigInt(8);
        const ELL2_C2 = Fp.pow(ed25519_2n, ELL2_C1);
        const ELL2_C3 = Fp.sqrt(Fp.neg(Fp.ONE));
        const ELL2_C4 = (Fp.ORDER - BigInt(5)) / BigInt(8);
        const ELL2_J = BigInt(486662);
        function map_to_curve_elligator2_curve25519(u) {
            let tv1 = Fp.sqr(u);
            tv1 = Fp.mul(tv1, ed25519_2n);
            let xd = Fp.add(tv1, Fp.ONE);
            let x1n = Fp.neg(ELL2_J);
            let tv2 = Fp.sqr(xd);
            let gxd = Fp.mul(tv2, xd);
            let gx1 = Fp.mul(tv1, ELL2_J);
            gx1 = Fp.mul(gx1, x1n);
            gx1 = Fp.add(gx1, tv2);
            gx1 = Fp.mul(gx1, x1n);
            let tv3 = Fp.sqr(gxd);
            tv2 = Fp.sqr(tv3);
            tv3 = Fp.mul(tv3, gxd);
            tv3 = Fp.mul(tv3, gx1);
            tv2 = Fp.mul(tv2, tv3);
            let y11 = Fp.pow(tv2, ELL2_C4);
            y11 = Fp.mul(y11, tv3);
            let y12 = Fp.mul(y11, ELL2_C3);
            tv2 = Fp.sqr(y11);
            tv2 = Fp.mul(tv2, gxd);
            let e1 = Fp.eql(tv2, gx1);
            let y1 = Fp.cmov(y12, y11, e1);
            let x2n = Fp.mul(x1n, tv1);
            let y21 = Fp.mul(y11, u);
            y21 = Fp.mul(y21, ELL2_C2);
            let y22 = Fp.mul(y21, ELL2_C3);
            let gx2 = Fp.mul(gx1, tv1);
            tv2 = Fp.sqr(y21);
            tv2 = Fp.mul(tv2, gxd);
            let e2 = Fp.eql(tv2, gx2);
            let y2 = Fp.cmov(y22, y21, e2);
            tv2 = Fp.sqr(y1);
            tv2 = Fp.mul(tv2, gxd);
            let e3 = Fp.eql(tv2, gx1);
            let xn = Fp.cmov(x2n, x1n, e3);
            let y = Fp.cmov(y2, y1, e3);
            let e4 = Fp.isOdd(y);
            y = Fp.cmov(y, Fp.neg(y), e3 !== e4);
            return {
                xMn: xn,
                xMd: xd,
                yMn: y,
                yMd: ed25519_1n
            };
        }
        const ELL2_C1_EDWARDS = FpSqrtEven(Fp, Fp.neg(BigInt(486664)));
        function map_to_curve_elligator2_edwards25519(u) {
            const {xMn, xMd, yMn, yMd} = map_to_curve_elligator2_curve25519(u);
            let xn = Fp.mul(xMn, yMd);
            xn = Fp.mul(xn, ELL2_C1_EDWARDS);
            let xd = Fp.mul(xMd, yMn);
            let yn = Fp.sub(xMn, xMd);
            let yd = Fp.add(xMn, xMd);
            let tv1 = Fp.mul(xd, yd);
            let e = Fp.eql(tv1, Fp.ZERO);
            xn = Fp.cmov(xn, Fp.ZERO, e);
            xd = Fp.cmov(xd, Fp.ONE, e);
            yn = Fp.cmov(yn, Fp.ONE, e);
            yd = Fp.cmov(yd, Fp.ONE, e);
            const inv = Fp.invertBatch([ xd, yd ]);
            return {
                x: Fp.mul(xn, inv[0]),
                y: Fp.mul(yn, inv[1])
            };
        }
        const htf = null && (() => createHasher(ed25519.ExtendedPoint, (scalars => map_to_curve_elligator2_edwards25519(scalars[0])), {
            DST: "edwards25519_XMD:SHA-512_ELL2_RO_",
            encodeDST: "edwards25519_XMD:SHA-512_ELL2_NU_",
            p: Fp.ORDER,
            m: 1,
            k: 128,
            expand: "xmd",
            hash: sha512
        }))();
        null && (() => {
            htf.hashToCurve;
        })();
        null && (() => {
            htf.encodeToCurve;
        })();
        function assertRstPoint(other) {
            if (!(other instanceof RistPoint)) throw new Error("RistrettoPoint expected");
        }
        const SQRT_M1 = null && ED25519_SQRT_M1;
        const SQRT_AD_MINUS_ONE = BigInt("25063068953384623474111414158702152701244531502492656460079210482610430750235");
        const INVSQRT_A_MINUS_D = BigInt("54469307008909316920995813868745141605393597292927456921205312896311721017578");
        const ONE_MINUS_D_SQ = BigInt("1159843021668779879193775521855586647937357759715417654439879720876111806838");
        const D_MINUS_ONE_SQ = BigInt("40440834346308536858101042469323190826248399146238708352240133220865137265952");
        const invertSqrt = number => uvRatio(ed25519_1n, number);
        const MAX_255B = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
        const bytes255ToNumberLE = bytes => ed25519.CURVE.Fp.create(bytesToNumberLE(bytes) & MAX_255B);
        function calcElligatorRistrettoMap(r0) {
            const {d} = ed25519.CURVE;
            const P = ed25519.CURVE.Fp.ORDER;
            const mod = ed25519.CURVE.Fp.create;
            const r = mod(SQRT_M1 * r0 * r0);
            const Ns = mod((r + ed25519_1n) * ONE_MINUS_D_SQ);
            let c = BigInt(-1);
            const D = mod((c - d * r) * mod(r + d));
            let {isValid: Ns_D_is_sq, value: s} = uvRatio(Ns, D);
            let s_ = mod(s * r0);
            if (!isNegativeLE(s_, P)) s_ = mod(-s_);
            if (!Ns_D_is_sq) s = s_;
            if (!Ns_D_is_sq) c = r;
            const Nt = mod(c * (r - ed25519_1n) * D_MINUS_ONE_SQ - D);
            const s2 = s * s;
            const W0 = mod((s + s) * D);
            const W1 = mod(Nt * SQRT_AD_MINUS_ONE);
            const W2 = mod(ed25519_1n - s2);
            const W3 = mod(ed25519_1n + s2);
            return new ed25519.ExtendedPoint(mod(W0 * W3), mod(W2 * W1), mod(W1 * W3), mod(W0 * W2));
        }
        class RistPoint {
            constructor(ep) {
                this.ep = ep;
            }
            static fromAffine(ap) {
                return new RistPoint(ed25519.ExtendedPoint.fromAffine(ap));
            }
            static hashToCurve(hex) {
                hex = ensureBytes("ristrettoHash", hex, 64);
                const r1 = bytes255ToNumberLE(hex.slice(0, 32));
                const R1 = calcElligatorRistrettoMap(r1);
                const r2 = bytes255ToNumberLE(hex.slice(32, 64));
                const R2 = calcElligatorRistrettoMap(r2);
                return new RistPoint(R1.add(R2));
            }
            static fromHex(hex) {
                hex = ensureBytes("ristrettoHex", hex, 32);
                const {a, d} = ed25519.CURVE;
                const P = ed25519.CURVE.Fp.ORDER;
                const mod = ed25519.CURVE.Fp.create;
                const emsg = "RistrettoPoint.fromHex: the hex is not valid encoding of RistrettoPoint";
                const s = bytes255ToNumberLE(hex);
                if (!equalBytes(numberToBytesLE(s, 32), hex) || isNegativeLE(s, P)) throw new Error(emsg);
                const s2 = mod(s * s);
                const u1 = mod(ed25519_1n + a * s2);
                const u2 = mod(ed25519_1n - a * s2);
                const u1_2 = mod(u1 * u1);
                const u2_2 = mod(u2 * u2);
                const v = mod(a * d * u1_2 - u2_2);
                const {isValid, value: I} = invertSqrt(mod(v * u2_2));
                const Dx = mod(I * u2);
                const Dy = mod(I * Dx * v);
                let x = mod((s + s) * Dx);
                if (isNegativeLE(x, P)) x = mod(-x);
                const y = mod(u1 * Dy);
                const t = mod(x * y);
                if (!isValid || isNegativeLE(t, P) || y === ed25519_0n) throw new Error(emsg);
                return new RistPoint(new ed25519.ExtendedPoint(x, y, ed25519_1n, t));
            }
            toRawBytes() {
                let {ex: x, ey: y, ez: z, et: t} = this.ep;
                const P = ed25519.CURVE.Fp.ORDER;
                const mod = ed25519.CURVE.Fp.create;
                const u1 = mod(mod(z + y) * mod(z - y));
                const u2 = mod(x * y);
                const u2sq = mod(u2 * u2);
                const {value: invsqrt} = invertSqrt(mod(u1 * u2sq));
                const D1 = mod(invsqrt * u1);
                const D2 = mod(invsqrt * u2);
                const zInv = mod(D1 * D2 * t);
                let D;
                if (isNegativeLE(t * zInv, P)) {
                    let _x = mod(y * SQRT_M1);
                    let _y = mod(x * SQRT_M1);
                    x = _x;
                    y = _y;
                    D = mod(D1 * INVSQRT_A_MINUS_D);
                } else D = D2;
                if (isNegativeLE(x * zInv, P)) y = mod(-y);
                let s = mod((z - y) * D);
                if (isNegativeLE(s, P)) s = mod(-s);
                return numberToBytesLE(s, 32);
            }
            toHex() {
                return bytesToHex(this.toRawBytes());
            }
            toString() {
                return this.toHex();
            }
            equals(other) {
                assertRstPoint(other);
                const {ex: X1, ey: Y1} = this.ep;
                const {ex: X2, ey: Y2} = other.ep;
                const mod = ed25519.CURVE.Fp.create;
                const one = mod(X1 * Y2) === mod(Y1 * X2);
                const two = mod(Y1 * Y2) === mod(X1 * X2);
                return one || two;
            }
            add(other) {
                assertRstPoint(other);
                return new RistPoint(this.ep.add(other.ep));
            }
            subtract(other) {
                assertRstPoint(other);
                return new RistPoint(this.ep.subtract(other.ep));
            }
            multiply(scalar) {
                return new RistPoint(this.ep.multiply(scalar));
            }
            multiplyUnsafe(scalar) {
                return new RistPoint(this.ep.multiplyUnsafe(scalar));
            }
            double() {
                return new RistPoint(this.ep.double());
            }
            negate() {
                return new RistPoint(this.ep.negate());
            }
        }
        null && (() => {
            if (!RistPoint.BASE) RistPoint.BASE = new RistPoint(ed25519.ExtendedPoint.BASE);
            if (!RistPoint.ZERO) RistPoint.ZERO = new RistPoint(ed25519.ExtendedPoint.ZERO);
        })();
        var bn = __webpack_require__(404);
        var bn_default = __webpack_require__.n(bn);
        var bs58 = __webpack_require__(466);
        var bs58_default = __webpack_require__.n(bs58);
        const Chi = (a, b, c) => a & b ^ ~a & c;
        const Maj = (a, b, c) => a & b ^ a & c ^ b & c;
        const SHA256_K = new Uint32Array([ 1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298 ]);
        const IV = new Uint32Array([ 1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225 ]);
        const SHA256_W = new Uint32Array(64);
        class SHA256 extends SHA2 {
            constructor() {
                super(64, 32, 8, false);
                this.A = IV[0] | 0;
                this.B = IV[1] | 0;
                this.C = IV[2] | 0;
                this.D = IV[3] | 0;
                this.E = IV[4] | 0;
                this.F = IV[5] | 0;
                this.G = IV[6] | 0;
                this.H = IV[7] | 0;
            }
            get() {
                const {A, B, C, D, E, F, G, H} = this;
                return [ A, B, C, D, E, F, G, H ];
            }
            set(A, B, C, D, E, F, G, H) {
                this.A = A | 0;
                this.B = B | 0;
                this.C = C | 0;
                this.D = D | 0;
                this.E = E | 0;
                this.F = F | 0;
                this.G = G | 0;
                this.H = H | 0;
            }
            process(view, offset) {
                for (let i = 0; i < 16; i++, offset += 4) SHA256_W[i] = view.getUint32(offset, false);
                for (let i = 16; i < 64; i++) {
                    const W15 = SHA256_W[i - 15];
                    const W2 = SHA256_W[i - 2];
                    const s0 = rotr(W15, 7) ^ rotr(W15, 18) ^ W15 >>> 3;
                    const s1 = rotr(W2, 17) ^ rotr(W2, 19) ^ W2 >>> 10;
                    SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
                }
                let {A, B, C, D, E, F, G, H} = this;
                for (let i = 0; i < 64; i++) {
                    const sigma1 = rotr(E, 6) ^ rotr(E, 11) ^ rotr(E, 25);
                    const T1 = H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
                    const sigma0 = rotr(A, 2) ^ rotr(A, 13) ^ rotr(A, 22);
                    const T2 = sigma0 + Maj(A, B, C) | 0;
                    H = G;
                    G = F;
                    F = E;
                    E = D + T1 | 0;
                    D = C;
                    C = B;
                    B = A;
                    A = T1 + T2 | 0;
                }
                A = A + this.A | 0;
                B = B + this.B | 0;
                C = C + this.C | 0;
                D = D + this.D | 0;
                E = E + this.E | 0;
                F = F + this.F | 0;
                G = G + this.G | 0;
                H = H + this.H | 0;
                this.set(A, B, C, D, E, F, G, H);
            }
            roundClean() {
                SHA256_W.fill(0);
            }
            destroy() {
                this.set(0, 0, 0, 0, 0, 0, 0, 0);
                this.buffer.fill(0);
            }
        }
        class SHA224 extends SHA256 {
            constructor() {
                super();
                this.A = 3238371032 | 0;
                this.B = 914150663 | 0;
                this.C = 812702999 | 0;
                this.D = 4144912697 | 0;
                this.E = 4290775857 | 0;
                this.F = 1750603025 | 0;
                this.G = 1694076839 | 0;
                this.H = 3204075428 | 0;
                this.outputLen = 28;
            }
        }
        const sha256_sha256 = utils_wrapConstructor((() => new SHA256));
        null && wrapConstructor((() => new SHA224));
        var lib = __webpack_require__(755);
        var Layout = __webpack_require__(601);
        var browser = __webpack_require__(184);
        class StructError extends TypeError {
            constructor(failure, failures) {
                let cached;
                const {message, ...rest} = failure;
                const {path} = failure;
                const msg = path.length === 0 ? message : "At path: " + path.join(".") + " -- " + message;
                super(msg);
                Object.assign(this, rest);
                this.name = this.constructor.name;
                this.failures = () => {
                    var _cached;
                    return (_cached = cached) != null ? _cached : cached = [ failure, ...failures() ];
                };
            }
        }
        function isIterable(x) {
            return isObject(x) && typeof x[Symbol.iterator] === "function";
        }
        function isObject(x) {
            return typeof x === "object" && x != null;
        }
        function print(value) {
            return typeof value === "string" ? JSON.stringify(value) : "" + value;
        }
        function shiftIterator(input) {
            const {done, value} = input.next();
            return done ? void 0 : value;
        }
        function toFailure(result, context, struct, value) {
            if (result === true) return; else if (result === false) result = {}; else if (typeof result === "string") result = {
                message: result
            };
            const {path, branch} = context;
            const {type} = struct;
            const {refinement, message = "Expected a value of type `" + type + "`" + (refinement ? " with refinement `" + refinement + "`" : "") + ", but received: `" + print(value) + "`"} = result;
            return {
                value,
                type,
                refinement,
                key: path[path.length - 1],
                path,
                branch,
                ...result,
                message
            };
        }
        function* toFailures(result, context, struct, value) {
            if (!isIterable(result)) result = [ result ];
            for (const r of result) {
                const failure = toFailure(r, context, struct, value);
                if (failure) yield failure;
            }
        }
        function* run(value, struct, options = {}) {
            const {path = [], branch = [ value ], coerce = false, mask = false} = options;
            const ctx = {
                path,
                branch
            };
            if (coerce) {
                value = struct.coercer(value, ctx);
                if (mask && struct.type !== "type" && isObject(struct.schema) && isObject(value) && !Array.isArray(value)) for (const key in value) if (struct.schema[key] === void 0) delete value[key];
            }
            let valid = true;
            for (const failure of struct.validator(value, ctx)) {
                valid = false;
                yield [ failure, void 0 ];
            }
            for (let [k, v, s] of struct.entries(value, ctx)) {
                const ts = run(v, s, {
                    path: k === void 0 ? path : [ ...path, k ],
                    branch: k === void 0 ? branch : [ ...branch, v ],
                    coerce,
                    mask
                });
                for (const t of ts) if (t[0]) {
                    valid = false;
                    yield [ t[0], void 0 ];
                } else if (coerce) {
                    v = t[1];
                    if (k === void 0) value = v; else if (value instanceof Map) value.set(k, v); else if (value instanceof Set) value.add(v); else if (isObject(value)) value[k] = v;
                }
            }
            if (valid) for (const failure of struct.refiner(value, ctx)) {
                valid = false;
                yield [ failure, void 0 ];
            }
            if (valid) yield [ void 0, value ];
        }
        class Struct {
            constructor(props) {
                const {type, schema, validator, refiner, coercer = value => value, entries = function*() {}} = props;
                this.type = type;
                this.schema = schema;
                this.entries = entries;
                this.coercer = coercer;
                if (validator) this.validator = (value, context) => {
                    const result = validator(value, context);
                    return toFailures(result, context, this, value);
                }; else this.validator = () => [];
                if (refiner) this.refiner = (value, context) => {
                    const result = refiner(value, context);
                    return toFailures(result, context, this, value);
                }; else this.refiner = () => [];
            }
            assert(value) {
                return index_es_assert(value, this);
            }
            create(value) {
                return create(value, this);
            }
            is(value) {
                return is(value, this);
            }
            mask(value) {
                return mask(value, this);
            }
            validate(value, options = {}) {
                return validate(value, this, options);
            }
        }
        function index_es_assert(value, struct) {
            const result = validate(value, struct);
            if (result[0]) throw result[0];
        }
        function create(value, struct) {
            const result = validate(value, struct, {
                coerce: true
            });
            if (result[0]) throw result[0]; else return result[1];
        }
        function mask(value, struct) {
            const result = validate(value, struct, {
                coerce: true,
                mask: true
            });
            if (result[0]) throw result[0]; else return result[1];
        }
        function is(value, struct) {
            const result = validate(value, struct);
            return !result[0];
        }
        function validate(value, struct, options = {}) {
            const tuples = run(value, struct, options);
            const tuple = shiftIterator(tuples);
            if (tuple[0]) {
                const error = new StructError(tuple[0], (function*() {
                    for (const t of tuples) if (t[0]) yield t[0];
                }));
                return [ error, void 0 ];
            } else {
                const v = tuple[1];
                return [ void 0, v ];
            }
        }
        function index_es_define(name, validator) {
            return new Struct({
                type: name,
                schema: null,
                validator
            });
        }
        function any() {
            return index_es_define("any", (() => true));
        }
        function array(Element) {
            return new Struct({
                type: "array",
                schema: Element,
                * entries(value) {
                    if (Element && Array.isArray(value)) for (const [i, v] of value.entries()) yield [ i, v, Element ];
                },
                coercer(value) {
                    return Array.isArray(value) ? value.slice() : value;
                },
                validator(value) {
                    return Array.isArray(value) || "Expected an array value, but received: " + print(value);
                }
            });
        }
        function index_es_boolean() {
            return index_es_define("boolean", (value => typeof value === "boolean"));
        }
        function instance(Class) {
            return index_es_define("instance", (value => value instanceof Class || "Expected a `" + Class.name + "` instance, but received: " + print(value)));
        }
        function literal(constant) {
            const description = print(constant);
            const t = typeof constant;
            return new Struct({
                type: "literal",
                schema: t === "string" || t === "number" || t === "boolean" ? constant : null,
                validator(value) {
                    return value === constant || "Expected the literal `" + description + "`, but received: " + print(value);
                }
            });
        }
        function never() {
            return index_es_define("never", (() => false));
        }
        function nullable(struct) {
            return new Struct({
                ...struct,
                validator: (value, ctx) => value === null || struct.validator(value, ctx),
                refiner: (value, ctx) => value === null || struct.refiner(value, ctx)
            });
        }
        function index_es_number() {
            return index_es_define("number", (value => typeof value === "number" && !isNaN(value) || "Expected a number, but received: " + print(value)));
        }
        function optional(struct) {
            return new Struct({
                ...struct,
                validator: (value, ctx) => value === void 0 || struct.validator(value, ctx),
                refiner: (value, ctx) => value === void 0 || struct.refiner(value, ctx)
            });
        }
        function record(Key, Value) {
            return new Struct({
                type: "record",
                schema: null,
                * entries(value) {
                    if (isObject(value)) for (const k in value) {
                        const v = value[k];
                        yield [ k, k, Key ];
                        yield [ k, v, Value ];
                    }
                },
                validator(value) {
                    return isObject(value) || "Expected an object, but received: " + print(value);
                }
            });
        }
        function string() {
            return index_es_define("string", (value => typeof value === "string" || "Expected a string, but received: " + print(value)));
        }
        function tuple(Elements) {
            const Never = never();
            return new Struct({
                type: "tuple",
                schema: null,
                * entries(value) {
                    if (Array.isArray(value)) {
                        const length = Math.max(Elements.length, value.length);
                        for (let i = 0; i < length; i++) yield [ i, value[i], Elements[i] || Never ];
                    }
                },
                validator(value) {
                    return Array.isArray(value) || "Expected an array, but received: " + print(value);
                }
            });
        }
        function type(schema) {
            const keys = Object.keys(schema);
            return new Struct({
                type: "type",
                schema,
                * entries(value) {
                    if (isObject(value)) for (const k of keys) yield [ k, value[k], schema[k] ];
                },
                validator(value) {
                    return isObject(value) || "Expected an object, but received: " + print(value);
                }
            });
        }
        function union(Structs) {
            const description = Structs.map((s => s.type)).join(" | ");
            return new Struct({
                type: "union",
                schema: null,
                validator(value, ctx) {
                    const failures = [];
                    for (const S of Structs) {
                        const [...tuples] = run(value, S, ctx);
                        const [first] = tuples;
                        if (!first[0]) return []; else for (const [failure] of tuples) if (failure) failures.push(failure);
                    }
                    return [ "Expected the value to satisfy a union of `" + description + "`, but received: " + print(value), ...failures ];
                }
            });
        }
        function unknown() {
            return index_es_define("unknown", (() => true));
        }
        function coerce(struct, condition, coercer) {
            return new Struct({
                ...struct,
                coercer: (value, ctx) => is(value, condition) ? struct.coercer(coercer(value, ctx), ctx) : struct.coercer(value, ctx)
            });
        }
        var client_browser = __webpack_require__(22);
        var browser_default = __webpack_require__.n(client_browser);
        var client = __webpack_require__(809);
        var websocket_browser = __webpack_require__(856);
        const [SHA3_PI, SHA3_ROTL, _SHA3_IOTA] = [ [], [], [] ];
        const sha3_0n = BigInt(0);
        const sha3_1n = BigInt(1);
        const sha3_2n = BigInt(2);
        const _7n = BigInt(7);
        const _256n = BigInt(256);
        const _0x71n = BigInt(113);
        for (let round = 0, R = sha3_1n, x = 1, y = 0; round < 24; round++) {
            [x, y] = [ y, (2 * x + 3 * y) % 5 ];
            SHA3_PI.push(2 * (5 * y + x));
            SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
            let t = sha3_0n;
            for (let j = 0; j < 7; j++) {
                R = (R << sha3_1n ^ (R >> _7n) * _0x71n) % _256n;
                if (R & sha3_2n) t ^= sha3_1n << (sha3_1n << BigInt(j)) - sha3_1n;
            }
            _SHA3_IOTA.push(t);
        }
        const [SHA3_IOTA_H, SHA3_IOTA_L] = split(_SHA3_IOTA, true);
        const rotlH = (h, l, s) => s > 32 ? rotlBH(h, l, s) : rotlSH(h, l, s);
        const rotlL = (h, l, s) => s > 32 ? rotlBL(h, l, s) : rotlSL(h, l, s);
        function keccakP(s, rounds = 24) {
            const B = new Uint32Array(5 * 2);
            for (let round = 24 - rounds; round < 24; round++) {
                for (let x = 0; x < 10; x++) B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
                for (let x = 0; x < 10; x += 2) {
                    const idx1 = (x + 8) % 10;
                    const idx0 = (x + 2) % 10;
                    const B0 = B[idx0];
                    const B1 = B[idx0 + 1];
                    const Th = rotlH(B0, B1, 1) ^ B[idx1];
                    const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
                    for (let y = 0; y < 50; y += 10) {
                        s[x + y] ^= Th;
                        s[x + y + 1] ^= Tl;
                    }
                }
                let curH = s[2];
                let curL = s[3];
                for (let t = 0; t < 24; t++) {
                    const shift = SHA3_ROTL[t];
                    const Th = rotlH(curH, curL, shift);
                    const Tl = rotlL(curH, curL, shift);
                    const PI = SHA3_PI[t];
                    curH = s[PI];
                    curL = s[PI + 1];
                    s[PI] = Th;
                    s[PI + 1] = Tl;
                }
                for (let y = 0; y < 50; y += 10) {
                    for (let x = 0; x < 10; x++) B[x] = s[y + x];
                    for (let x = 0; x < 10; x++) s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
                }
                s[0] ^= SHA3_IOTA_H[round];
                s[1] ^= SHA3_IOTA_L[round];
            }
            B.fill(0);
        }
        class Keccak extends Hash {
            constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
                super();
                this.blockLen = blockLen;
                this.suffix = suffix;
                this.outputLen = outputLen;
                this.enableXOF = enableXOF;
                this.rounds = rounds;
                this.pos = 0;
                this.posOut = 0;
                this.finished = false;
                this.destroyed = false;
                number(outputLen);
                if (0 >= this.blockLen || this.blockLen >= 200) throw new Error("Sha3 supports only keccak-f1600 function");
                this.state = new Uint8Array(200);
                this.state32 = u32(this.state);
            }
            keccak() {
                keccakP(this.state32, this.rounds);
                this.posOut = 0;
                this.pos = 0;
            }
            update(data) {
                exists(this);
                const {blockLen, state} = this;
                data = toBytes(data);
                const len = data.length;
                for (let pos = 0; pos < len; ) {
                    const take = Math.min(blockLen - this.pos, len - pos);
                    for (let i = 0; i < take; i++) state[this.pos++] ^= data[pos++];
                    if (this.pos === blockLen) this.keccak();
                }
                return this;
            }
            finish() {
                if (this.finished) return;
                this.finished = true;
                const {state, suffix, pos, blockLen} = this;
                state[pos] ^= suffix;
                if ((suffix & 128) !== 0 && pos === blockLen - 1) this.keccak();
                state[blockLen - 1] ^= 128;
                this.keccak();
            }
            writeInto(out) {
                exists(this, false);
                bytes(out);
                this.finish();
                const bufferOut = this.state;
                const {blockLen} = this;
                for (let pos = 0, len = out.length; pos < len; ) {
                    if (this.posOut >= blockLen) this.keccak();
                    const take = Math.min(blockLen - this.posOut, len - pos);
                    out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
                    this.posOut += take;
                    pos += take;
                }
                return out;
            }
            xofInto(out) {
                if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
                return this.writeInto(out);
            }
            xof(bytes) {
                number(bytes);
                return this.xofInto(new Uint8Array(bytes));
            }
            digestInto(out) {
                output(out, this);
                if (this.finished) throw new Error("digest() was already called");
                this.writeInto(out);
                this.destroy();
                return out;
            }
            digest() {
                return this.digestInto(new Uint8Array(this.outputLen));
            }
            destroy() {
                this.destroyed = true;
                this.state.fill(0);
            }
            _cloneInto(to) {
                const {blockLen, suffix, outputLen, rounds, enableXOF} = this;
                to || (to = new Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
                to.state32.set(this.state32);
                to.pos = this.pos;
                to.posOut = this.posOut;
                to.finished = this.finished;
                to.rounds = rounds;
                to.suffix = suffix;
                to.outputLen = outputLen;
                to.enableXOF = enableXOF;
                to.destroyed = this.destroyed;
                return to;
            }
        }
        const gen = (suffix, blockLen, outputLen) => utils_wrapConstructor((() => new Keccak(blockLen, suffix, outputLen)));
        null && gen(6, 144, 224 / 8);
        null && gen(6, 136, 256 / 8);
        null && gen(6, 104, 384 / 8);
        null && gen(6, 72, 512 / 8);
        null && gen(1, 144, 224 / 8);
        const keccak_256 = gen(1, 136, 256 / 8);
        null && gen(1, 104, 384 / 8);
        null && gen(1, 72, 512 / 8);
        const genShake = (suffix, blockLen, outputLen) => wrapXOFConstructorWithOpts(((opts = {}) => new Keccak(blockLen, suffix, opts.dkLen === void 0 ? outputLen : opts.dkLen, true)));
        null && genShake(31, 168, 128 / 8);
        null && genShake(31, 136, 256 / 8);
        class HMAC extends Hash {
            constructor(hash, _key) {
                super();
                this.finished = false;
                this.destroyed = false;
                _assert_hash(hash);
                const key = toBytes(_key);
                this.iHash = hash.create();
                if (typeof this.iHash.update !== "function") throw new Error("Expected instance of class which extends utils.Hash");
                this.blockLen = this.iHash.blockLen;
                this.outputLen = this.iHash.outputLen;
                const blockLen = this.blockLen;
                const pad = new Uint8Array(blockLen);
                pad.set(key.length > blockLen ? hash.create().update(key).digest() : key);
                for (let i = 0; i < pad.length; i++) pad[i] ^= 54;
                this.iHash.update(pad);
                this.oHash = hash.create();
                for (let i = 0; i < pad.length; i++) pad[i] ^= 54 ^ 92;
                this.oHash.update(pad);
                pad.fill(0);
            }
            update(buf) {
                exists(this);
                this.iHash.update(buf);
                return this;
            }
            digestInto(out) {
                exists(this);
                bytes(out, this.outputLen);
                this.finished = true;
                this.iHash.digestInto(out);
                this.oHash.update(out);
                this.oHash.digestInto(out);
                this.destroy();
            }
            digest() {
                const out = new Uint8Array(this.oHash.outputLen);
                this.digestInto(out);
                return out;
            }
            _cloneInto(to) {
                to || (to = Object.create(Object.getPrototypeOf(this), {}));
                const {oHash, iHash, finished, destroyed, blockLen, outputLen} = this;
                to;
                to.finished = finished;
                to.destroyed = destroyed;
                to.blockLen = blockLen;
                to.outputLen = outputLen;
                to.oHash = oHash._cloneInto(to.oHash);
                to.iHash = iHash._cloneInto(to.iHash);
                return to;
            }
            destroy() {
                this.destroyed = true;
                this.oHash.destroy();
                this.iHash.destroy();
            }
        }
        const hmac = (hash, key, message) => new HMAC(hash, key).update(message).digest();
        hmac.create = (hash, key) => new HMAC(hash, key);
        /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
        function validatePointOpts(curve) {
            const opts = validateBasic(curve);
            validateObject(opts, {
                a: "field",
                b: "field"
            }, {
                allowedPrivateKeyLengths: "array",
                wrapPrivateKey: "boolean",
                isTorsionFree: "function",
                clearCofactor: "function",
                allowInfinityPoint: "boolean",
                fromBytes: "function",
                toBytes: "function"
            });
            const {endo, Fp, a} = opts;
            if (endo) {
                if (!Fp.eql(a, Fp.ZERO)) throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
                if (typeof endo !== "object" || typeof endo.beta !== "bigint" || typeof endo.splitScalar !== "function") throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");
            }
            return Object.freeze({
                ...opts
            });
        }
        const {bytesToNumberBE: b2n, hexToBytes: h2b} = abstract_utils_namespaceObject;
        const DER = {
            Err: class DERErr extends Error {
                constructor(m = "") {
                    super(m);
                }
            },
            _parseInt(data) {
                const {Err: E} = DER;
                if (data.length < 2 || data[0] !== 2) throw new E("Invalid signature integer tag");
                const len = data[1];
                const res = data.subarray(2, len + 2);
                if (!len || res.length !== len) throw new E("Invalid signature integer: wrong length");
                if (res[0] & 128) throw new E("Invalid signature integer: negative");
                if (res[0] === 0 && !(res[1] & 128)) throw new E("Invalid signature integer: unnecessary leading zero");
                return {
                    d: b2n(res),
                    l: data.subarray(len + 2)
                };
            },
            toSig(hex) {
                const {Err: E} = DER;
                const data = typeof hex === "string" ? h2b(hex) : hex;
                if (!abstract_utils_isBytes(data)) throw new Error("ui8a expected");
                let l = data.length;
                if (l < 2 || data[0] != 48) throw new E("Invalid signature tag");
                if (data[1] !== l - 2) throw new E("Invalid signature: incorrect length");
                const {d: r, l: sBytes} = DER._parseInt(data.subarray(2));
                const {d: s, l: rBytesLeft} = DER._parseInt(sBytes);
                if (rBytesLeft.length) throw new E("Invalid signature: left bytes after parsing");
                return {
                    r,
                    s
                };
            },
            hexFromSig(sig) {
                const slice = s => Number.parseInt(s[0], 16) & 8 ? "00" + s : s;
                const h = num => {
                    const hex = num.toString(16);
                    return hex.length & 1 ? `0${hex}` : hex;
                };
                const s = slice(h(sig.s));
                const r = slice(h(sig.r));
                const shl = s.length / 2;
                const rhl = r.length / 2;
                const sl = h(shl);
                const rl = h(rhl);
                return `30${h(rhl + shl + 4)}02${rl}${r}02${sl}${s}`;
            }
        };
        const weierstrass_0n = BigInt(0), weierstrass_1n = BigInt(1), weierstrass_3n = (BigInt(2), 
        BigInt(3));
        BigInt(4);
        function weierstrassPoints(opts) {
            const CURVE = validatePointOpts(opts);
            const {Fp} = CURVE;
            const toBytes = CURVE.toBytes || ((_c, point, _isCompressed) => {
                const a = point.toAffine();
                return abstract_utils_concatBytes(Uint8Array.from([ 4 ]), Fp.toBytes(a.x), Fp.toBytes(a.y));
            });
            const fromBytes = CURVE.fromBytes || (bytes => {
                const tail = bytes.subarray(1);
                const x = Fp.fromBytes(tail.subarray(0, Fp.BYTES));
                const y = Fp.fromBytes(tail.subarray(Fp.BYTES, 2 * Fp.BYTES));
                return {
                    x,
                    y
                };
            });
            function weierstrassEquation(x) {
                const {a, b} = CURVE;
                const x2 = Fp.sqr(x);
                const x3 = Fp.mul(x2, x);
                return Fp.add(Fp.add(x3, Fp.mul(x, a)), b);
            }
            if (!Fp.eql(Fp.sqr(CURVE.Gy), weierstrassEquation(CURVE.Gx))) throw new Error("bad generator point: equation left != right");
            function isWithinCurveOrder(num) {
                return typeof num === "bigint" && weierstrass_0n < num && num < CURVE.n;
            }
            function assertGE(num) {
                if (!isWithinCurveOrder(num)) throw new Error("Expected valid bigint: 0 < bigint < curve.n");
            }
            function normPrivateKeyToScalar(key) {
                const {allowedPrivateKeyLengths: lengths, nByteLength, wrapPrivateKey, n} = CURVE;
                if (lengths && typeof key !== "bigint") {
                    if (abstract_utils_isBytes(key)) key = abstract_utils_bytesToHex(key);
                    if (typeof key !== "string" || !lengths.includes(key.length)) throw new Error("Invalid key");
                    key = key.padStart(nByteLength * 2, "0");
                }
                let num;
                try {
                    num = typeof key === "bigint" ? key : utils_bytesToNumberBE(utils_ensureBytes("private key", key, nByteLength));
                } catch (error) {
                    throw new Error(`private key must be ${nByteLength} bytes, hex or bigint, not ${typeof key}`);
                }
                if (wrapPrivateKey) num = modular_mod(num, n);
                assertGE(num);
                return num;
            }
            const pointPrecomputes = new Map;
            function assertPrjPoint(other) {
                if (!(other instanceof Point)) throw new Error("ProjectivePoint expected");
            }
            class Point {
                constructor(px, py, pz) {
                    this.px = px;
                    this.py = py;
                    this.pz = pz;
                    if (px == null || !Fp.isValid(px)) throw new Error("x required");
                    if (py == null || !Fp.isValid(py)) throw new Error("y required");
                    if (pz == null || !Fp.isValid(pz)) throw new Error("z required");
                }
                static fromAffine(p) {
                    const {x, y} = p || {};
                    if (!p || !Fp.isValid(x) || !Fp.isValid(y)) throw new Error("invalid affine point");
                    if (p instanceof Point) throw new Error("projective point not allowed");
                    const is0 = i => Fp.eql(i, Fp.ZERO);
                    if (is0(x) && is0(y)) return Point.ZERO;
                    return new Point(x, y, Fp.ONE);
                }
                get x() {
                    return this.toAffine().x;
                }
                get y() {
                    return this.toAffine().y;
                }
                static normalizeZ(points) {
                    const toInv = Fp.invertBatch(points.map((p => p.pz)));
                    return points.map(((p, i) => p.toAffine(toInv[i]))).map(Point.fromAffine);
                }
                static fromHex(hex) {
                    const P = Point.fromAffine(fromBytes(utils_ensureBytes("pointHex", hex)));
                    P.assertValidity();
                    return P;
                }
                static fromPrivateKey(privateKey) {
                    return Point.BASE.multiply(normPrivateKeyToScalar(privateKey));
                }
                _setWindowSize(windowSize) {
                    this._WINDOW_SIZE = windowSize;
                    pointPrecomputes.delete(this);
                }
                assertValidity() {
                    if (this.is0()) {
                        if (CURVE.allowInfinityPoint && !Fp.is0(this.py)) return;
                        throw new Error("bad point: ZERO");
                    }
                    const {x, y} = this.toAffine();
                    if (!Fp.isValid(x) || !Fp.isValid(y)) throw new Error("bad point: x or y not FE");
                    const left = Fp.sqr(y);
                    const right = weierstrassEquation(x);
                    if (!Fp.eql(left, right)) throw new Error("bad point: equation left != right");
                    if (!this.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
                }
                hasEvenY() {
                    const {y} = this.toAffine();
                    if (Fp.isOdd) return !Fp.isOdd(y);
                    throw new Error("Field doesn't support isOdd");
                }
                equals(other) {
                    assertPrjPoint(other);
                    const {px: X1, py: Y1, pz: Z1} = this;
                    const {px: X2, py: Y2, pz: Z2} = other;
                    const U1 = Fp.eql(Fp.mul(X1, Z2), Fp.mul(X2, Z1));
                    const U2 = Fp.eql(Fp.mul(Y1, Z2), Fp.mul(Y2, Z1));
                    return U1 && U2;
                }
                negate() {
                    return new Point(this.px, Fp.neg(this.py), this.pz);
                }
                double() {
                    const {a, b} = CURVE;
                    const b3 = Fp.mul(b, weierstrass_3n);
                    const {px: X1, py: Y1, pz: Z1} = this;
                    let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO;
                    let t0 = Fp.mul(X1, X1);
                    let t1 = Fp.mul(Y1, Y1);
                    let t2 = Fp.mul(Z1, Z1);
                    let t3 = Fp.mul(X1, Y1);
                    t3 = Fp.add(t3, t3);
                    Z3 = Fp.mul(X1, Z1);
                    Z3 = Fp.add(Z3, Z3);
                    X3 = Fp.mul(a, Z3);
                    Y3 = Fp.mul(b3, t2);
                    Y3 = Fp.add(X3, Y3);
                    X3 = Fp.sub(t1, Y3);
                    Y3 = Fp.add(t1, Y3);
                    Y3 = Fp.mul(X3, Y3);
                    X3 = Fp.mul(t3, X3);
                    Z3 = Fp.mul(b3, Z3);
                    t2 = Fp.mul(a, t2);
                    t3 = Fp.sub(t0, t2);
                    t3 = Fp.mul(a, t3);
                    t3 = Fp.add(t3, Z3);
                    Z3 = Fp.add(t0, t0);
                    t0 = Fp.add(Z3, t0);
                    t0 = Fp.add(t0, t2);
                    t0 = Fp.mul(t0, t3);
                    Y3 = Fp.add(Y3, t0);
                    t2 = Fp.mul(Y1, Z1);
                    t2 = Fp.add(t2, t2);
                    t0 = Fp.mul(t2, t3);
                    X3 = Fp.sub(X3, t0);
                    Z3 = Fp.mul(t2, t1);
                    Z3 = Fp.add(Z3, Z3);
                    Z3 = Fp.add(Z3, Z3);
                    return new Point(X3, Y3, Z3);
                }
                add(other) {
                    assertPrjPoint(other);
                    const {px: X1, py: Y1, pz: Z1} = this;
                    const {px: X2, py: Y2, pz: Z2} = other;
                    let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO;
                    const a = CURVE.a;
                    const b3 = Fp.mul(CURVE.b, weierstrass_3n);
                    let t0 = Fp.mul(X1, X2);
                    let t1 = Fp.mul(Y1, Y2);
                    let t2 = Fp.mul(Z1, Z2);
                    let t3 = Fp.add(X1, Y1);
                    let t4 = Fp.add(X2, Y2);
                    t3 = Fp.mul(t3, t4);
                    t4 = Fp.add(t0, t1);
                    t3 = Fp.sub(t3, t4);
                    t4 = Fp.add(X1, Z1);
                    let t5 = Fp.add(X2, Z2);
                    t4 = Fp.mul(t4, t5);
                    t5 = Fp.add(t0, t2);
                    t4 = Fp.sub(t4, t5);
                    t5 = Fp.add(Y1, Z1);
                    X3 = Fp.add(Y2, Z2);
                    t5 = Fp.mul(t5, X3);
                    X3 = Fp.add(t1, t2);
                    t5 = Fp.sub(t5, X3);
                    Z3 = Fp.mul(a, t4);
                    X3 = Fp.mul(b3, t2);
                    Z3 = Fp.add(X3, Z3);
                    X3 = Fp.sub(t1, Z3);
                    Z3 = Fp.add(t1, Z3);
                    Y3 = Fp.mul(X3, Z3);
                    t1 = Fp.add(t0, t0);
                    t1 = Fp.add(t1, t0);
                    t2 = Fp.mul(a, t2);
                    t4 = Fp.mul(b3, t4);
                    t1 = Fp.add(t1, t2);
                    t2 = Fp.sub(t0, t2);
                    t2 = Fp.mul(a, t2);
                    t4 = Fp.add(t4, t2);
                    t0 = Fp.mul(t1, t4);
                    Y3 = Fp.add(Y3, t0);
                    t0 = Fp.mul(t5, t4);
                    X3 = Fp.mul(t3, X3);
                    X3 = Fp.sub(X3, t0);
                    t0 = Fp.mul(t3, t1);
                    Z3 = Fp.mul(t5, Z3);
                    Z3 = Fp.add(Z3, t0);
                    return new Point(X3, Y3, Z3);
                }
                subtract(other) {
                    return this.add(other.negate());
                }
                is0() {
                    return this.equals(Point.ZERO);
                }
                wNAF(n) {
                    return wnaf.wNAFCached(this, pointPrecomputes, n, (comp => {
                        const toInv = Fp.invertBatch(comp.map((p => p.pz)));
                        return comp.map(((p, i) => p.toAffine(toInv[i]))).map(Point.fromAffine);
                    }));
                }
                multiplyUnsafe(n) {
                    const I = Point.ZERO;
                    if (n === weierstrass_0n) return I;
                    assertGE(n);
                    if (n === weierstrass_1n) return this;
                    const {endo} = CURVE;
                    if (!endo) return wnaf.unsafeLadder(this, n);
                    let {k1neg, k1, k2neg, k2} = endo.splitScalar(n);
                    let k1p = I;
                    let k2p = I;
                    let d = this;
                    while (k1 > weierstrass_0n || k2 > weierstrass_0n) {
                        if (k1 & weierstrass_1n) k1p = k1p.add(d);
                        if (k2 & weierstrass_1n) k2p = k2p.add(d);
                        d = d.double();
                        k1 >>= weierstrass_1n;
                        k2 >>= weierstrass_1n;
                    }
                    if (k1neg) k1p = k1p.negate();
                    if (k2neg) k2p = k2p.negate();
                    k2p = new Point(Fp.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
                    return k1p.add(k2p);
                }
                multiply(scalar) {
                    assertGE(scalar);
                    let n = scalar;
                    let point, fake;
                    const {endo} = CURVE;
                    if (endo) {
                        const {k1neg, k1, k2neg, k2} = endo.splitScalar(n);
                        let {p: k1p, f: f1p} = this.wNAF(k1);
                        let {p: k2p, f: f2p} = this.wNAF(k2);
                        k1p = wnaf.constTimeNegate(k1neg, k1p);
                        k2p = wnaf.constTimeNegate(k2neg, k2p);
                        k2p = new Point(Fp.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
                        point = k1p.add(k2p);
                        fake = f1p.add(f2p);
                    } else {
                        const {p, f} = this.wNAF(n);
                        point = p;
                        fake = f;
                    }
                    return Point.normalizeZ([ point, fake ])[0];
                }
                multiplyAndAddUnsafe(Q, a, b) {
                    const G = Point.BASE;
                    const mul = (P, a) => a === weierstrass_0n || a === weierstrass_1n || !P.equals(G) ? P.multiplyUnsafe(a) : P.multiply(a);
                    const sum = mul(this, a).add(mul(Q, b));
                    return sum.is0() ? void 0 : sum;
                }
                toAffine(iz) {
                    const {px: x, py: y, pz: z} = this;
                    const is0 = this.is0();
                    if (iz == null) iz = is0 ? Fp.ONE : Fp.inv(z);
                    const ax = Fp.mul(x, iz);
                    const ay = Fp.mul(y, iz);
                    const zz = Fp.mul(z, iz);
                    if (is0) return {
                        x: Fp.ZERO,
                        y: Fp.ZERO
                    };
                    if (!Fp.eql(zz, Fp.ONE)) throw new Error("invZ was invalid");
                    return {
                        x: ax,
                        y: ay
                    };
                }
                isTorsionFree() {
                    const {h: cofactor, isTorsionFree} = CURVE;
                    if (cofactor === weierstrass_1n) return true;
                    if (isTorsionFree) return isTorsionFree(Point, this);
                    throw new Error("isTorsionFree() has not been declared for the elliptic curve");
                }
                clearCofactor() {
                    const {h: cofactor, clearCofactor} = CURVE;
                    if (cofactor === weierstrass_1n) return this;
                    if (clearCofactor) return clearCofactor(Point, this);
                    return this.multiplyUnsafe(CURVE.h);
                }
                toRawBytes(isCompressed = true) {
                    this.assertValidity();
                    return toBytes(Point, this, isCompressed);
                }
                toHex(isCompressed = true) {
                    return abstract_utils_bytesToHex(this.toRawBytes(isCompressed));
                }
            }
            Point.BASE = new Point(CURVE.Gx, CURVE.Gy, Fp.ONE);
            Point.ZERO = new Point(Fp.ZERO, Fp.ONE, Fp.ZERO);
            const _bits = CURVE.nBitLength;
            const wnaf = wNAF(Point, CURVE.endo ? Math.ceil(_bits / 2) : _bits);
            return {
                CURVE,
                ProjectivePoint: Point,
                normPrivateKeyToScalar,
                weierstrassEquation,
                isWithinCurveOrder
            };
        }
        function weierstrass_validateOpts(curve) {
            const opts = validateBasic(curve);
            validateObject(opts, {
                hash: "hash",
                hmac: "function",
                randomBytes: "function"
            }, {
                bits2int: "function",
                bits2int_modN: "function",
                lowS: "boolean"
            });
            return Object.freeze({
                lowS: true,
                ...opts
            });
        }
        function weierstrass(curveDef) {
            const CURVE = weierstrass_validateOpts(curveDef);
            const {Fp, n: CURVE_ORDER} = CURVE;
            const compressedLen = Fp.BYTES + 1;
            const uncompressedLen = 2 * Fp.BYTES + 1;
            function isValidFieldElement(num) {
                return weierstrass_0n < num && num < Fp.ORDER;
            }
            function modN(a) {
                return modular_mod(a, CURVE_ORDER);
            }
            function invN(a) {
                return invert(a, CURVE_ORDER);
            }
            const {ProjectivePoint: Point, normPrivateKeyToScalar, weierstrassEquation, isWithinCurveOrder} = weierstrassPoints({
                ...CURVE,
                toBytes(_c, point, isCompressed) {
                    const a = point.toAffine();
                    const x = Fp.toBytes(a.x);
                    const cat = abstract_utils_concatBytes;
                    if (isCompressed) return cat(Uint8Array.from([ point.hasEvenY() ? 2 : 3 ]), x); else return cat(Uint8Array.from([ 4 ]), x, Fp.toBytes(a.y));
                },
                fromBytes(bytes) {
                    const len = bytes.length;
                    const head = bytes[0];
                    const tail = bytes.subarray(1);
                    if (len === compressedLen && (head === 2 || head === 3)) {
                        const x = utils_bytesToNumberBE(tail);
                        if (!isValidFieldElement(x)) throw new Error("Point is not on curve");
                        const y2 = weierstrassEquation(x);
                        let y = Fp.sqrt(y2);
                        const isYOdd = (y & weierstrass_1n) === weierstrass_1n;
                        const isHeadOdd = (head & 1) === 1;
                        if (isHeadOdd !== isYOdd) y = Fp.neg(y);
                        return {
                            x,
                            y
                        };
                    } else if (len === uncompressedLen && head === 4) {
                        const x = Fp.fromBytes(tail.subarray(0, Fp.BYTES));
                        const y = Fp.fromBytes(tail.subarray(Fp.BYTES, 2 * Fp.BYTES));
                        return {
                            x,
                            y
                        };
                    } else throw new Error(`Point of length ${len} was invalid. Expected ${compressedLen} compressed bytes or ${uncompressedLen} uncompressed bytes`);
                }
            });
            const numToNByteStr = num => abstract_utils_bytesToHex(utils_numberToBytesBE(num, CURVE.nByteLength));
            function isBiggerThanHalfOrder(number) {
                const HALF = CURVE_ORDER >> weierstrass_1n;
                return number > HALF;
            }
            function normalizeS(s) {
                return isBiggerThanHalfOrder(s) ? modN(-s) : s;
            }
            const slcNum = (b, from, to) => utils_bytesToNumberBE(b.slice(from, to));
            class Signature {
                constructor(r, s, recovery) {
                    this.r = r;
                    this.s = s;
                    this.recovery = recovery;
                    this.assertValidity();
                }
                static fromCompact(hex) {
                    const l = CURVE.nByteLength;
                    hex = utils_ensureBytes("compactSignature", hex, l * 2);
                    return new Signature(slcNum(hex, 0, l), slcNum(hex, l, 2 * l));
                }
                static fromDER(hex) {
                    const {r, s} = DER.toSig(utils_ensureBytes("DER", hex));
                    return new Signature(r, s);
                }
                assertValidity() {
                    if (!isWithinCurveOrder(this.r)) throw new Error("r must be 0 < r < CURVE.n");
                    if (!isWithinCurveOrder(this.s)) throw new Error("s must be 0 < s < CURVE.n");
                }
                addRecoveryBit(recovery) {
                    return new Signature(this.r, this.s, recovery);
                }
                recoverPublicKey(msgHash) {
                    const {r, s, recovery: rec} = this;
                    const h = bits2int_modN(utils_ensureBytes("msgHash", msgHash));
                    if (rec == null || ![ 0, 1, 2, 3 ].includes(rec)) throw new Error("recovery id invalid");
                    const radj = rec === 2 || rec === 3 ? r + CURVE.n : r;
                    if (radj >= Fp.ORDER) throw new Error("recovery id 2 or 3 invalid");
                    const prefix = (rec & 1) === 0 ? "02" : "03";
                    const R = Point.fromHex(prefix + numToNByteStr(radj));
                    const ir = invN(radj);
                    const u1 = modN(-h * ir);
                    const u2 = modN(s * ir);
                    const Q = Point.BASE.multiplyAndAddUnsafe(R, u1, u2);
                    if (!Q) throw new Error("point at infinify");
                    Q.assertValidity();
                    return Q;
                }
                hasHighS() {
                    return isBiggerThanHalfOrder(this.s);
                }
                normalizeS() {
                    return this.hasHighS() ? new Signature(this.r, modN(-this.s), this.recovery) : this;
                }
                toDERRawBytes() {
                    return utils_hexToBytes(this.toDERHex());
                }
                toDERHex() {
                    return DER.hexFromSig({
                        r: this.r,
                        s: this.s
                    });
                }
                toCompactRawBytes() {
                    return utils_hexToBytes(this.toCompactHex());
                }
                toCompactHex() {
                    return numToNByteStr(this.r) + numToNByteStr(this.s);
                }
            }
            const utils = {
                isValidPrivateKey(privateKey) {
                    try {
                        normPrivateKeyToScalar(privateKey);
                        return true;
                    } catch (error) {
                        return false;
                    }
                },
                normPrivateKeyToScalar,
                randomPrivateKey: () => {
                    const length = getMinHashLength(CURVE.n);
                    return mapHashToField(CURVE.randomBytes(length), CURVE.n);
                },
                precompute(windowSize = 8, point = Point.BASE) {
                    point._setWindowSize(windowSize);
                    point.multiply(BigInt(3));
                    return point;
                }
            };
            function getPublicKey(privateKey, isCompressed = true) {
                return Point.fromPrivateKey(privateKey).toRawBytes(isCompressed);
            }
            function isProbPub(item) {
                const arr = abstract_utils_isBytes(item);
                const str = typeof item === "string";
                const len = (arr || str) && item.length;
                if (arr) return len === compressedLen || len === uncompressedLen;
                if (str) return len === 2 * compressedLen || len === 2 * uncompressedLen;
                if (item instanceof Point) return true;
                return false;
            }
            function getSharedSecret(privateA, publicB, isCompressed = true) {
                if (isProbPub(privateA)) throw new Error("first arg must be private key");
                if (!isProbPub(publicB)) throw new Error("second arg must be public key");
                const b = Point.fromHex(publicB);
                return b.multiply(normPrivateKeyToScalar(privateA)).toRawBytes(isCompressed);
            }
            const bits2int = CURVE.bits2int || function(bytes) {
                const num = utils_bytesToNumberBE(bytes);
                const delta = bytes.length * 8 - CURVE.nBitLength;
                return delta > 0 ? num >> BigInt(delta) : num;
            };
            const bits2int_modN = CURVE.bits2int_modN || function(bytes) {
                return modN(bits2int(bytes));
            };
            const ORDER_MASK = bitMask(CURVE.nBitLength);
            function int2octets(num) {
                if (typeof num !== "bigint") throw new Error("bigint expected");
                if (!(weierstrass_0n <= num && num < ORDER_MASK)) throw new Error(`bigint expected < 2^${CURVE.nBitLength}`);
                return utils_numberToBytesBE(num, CURVE.nByteLength);
            }
            function prepSig(msgHash, privateKey, opts = defaultSigOpts) {
                if ([ "recovered", "canonical" ].some((k => k in opts))) throw new Error("sign() legacy options not supported");
                const {hash, randomBytes} = CURVE;
                let {lowS, prehash, extraEntropy: ent} = opts;
                if (lowS == null) lowS = true;
                msgHash = utils_ensureBytes("msgHash", msgHash);
                if (prehash) msgHash = utils_ensureBytes("prehashed msgHash", hash(msgHash));
                const h1int = bits2int_modN(msgHash);
                const d = normPrivateKeyToScalar(privateKey);
                const seedArgs = [ int2octets(d), int2octets(h1int) ];
                if (ent != null) {
                    const e = ent === true ? randomBytes(Fp.BYTES) : ent;
                    seedArgs.push(utils_ensureBytes("extraEntropy", e));
                }
                const seed = abstract_utils_concatBytes(...seedArgs);
                const m = h1int;
                function k2sig(kBytes) {
                    const k = bits2int(kBytes);
                    if (!isWithinCurveOrder(k)) return;
                    const ik = invN(k);
                    const q = Point.BASE.multiply(k).toAffine();
                    const r = modN(q.x);
                    if (r === weierstrass_0n) return;
                    const s = modN(ik * modN(m + r * d));
                    if (s === weierstrass_0n) return;
                    let recovery = (q.x === r ? 0 : 2) | Number(q.y & weierstrass_1n);
                    let normS = s;
                    if (lowS && isBiggerThanHalfOrder(s)) {
                        normS = normalizeS(s);
                        recovery ^= 1;
                    }
                    return new Signature(r, normS, recovery);
                }
                return {
                    seed,
                    k2sig
                };
            }
            const defaultSigOpts = {
                lowS: CURVE.lowS,
                prehash: false
            };
            const defaultVerOpts = {
                lowS: CURVE.lowS,
                prehash: false
            };
            function sign(msgHash, privKey, opts = defaultSigOpts) {
                const {seed, k2sig} = prepSig(msgHash, privKey, opts);
                const C = CURVE;
                const drbg = createHmacDrbg(C.hash.outputLen, C.nByteLength, C.hmac);
                return drbg(seed, k2sig);
            }
            Point.BASE._setWindowSize(8);
            function verify(signature, msgHash, publicKey, opts = defaultVerOpts) {
                const sg = signature;
                msgHash = utils_ensureBytes("msgHash", msgHash);
                publicKey = utils_ensureBytes("publicKey", publicKey);
                if ("strict" in opts) throw new Error("options.strict was renamed to lowS");
                const {lowS, prehash} = opts;
                let _sig;
                let P;
                try {
                    if (typeof sg === "string" || abstract_utils_isBytes(sg)) try {
                        _sig = Signature.fromDER(sg);
                    } catch (derError) {
                        if (!(derError instanceof DER.Err)) throw derError;
                        _sig = Signature.fromCompact(sg);
                    } else if (typeof sg === "object" && typeof sg.r === "bigint" && typeof sg.s === "bigint") {
                        const {r, s} = sg;
                        _sig = new Signature(r, s);
                    } else throw new Error("PARSE");
                    P = Point.fromHex(publicKey);
                } catch (error) {
                    if (error.message === "PARSE") throw new Error(`signature must be Signature instance, Uint8Array or hex string`);
                    return false;
                }
                if (lowS && _sig.hasHighS()) return false;
                if (prehash) msgHash = CURVE.hash(msgHash);
                const {r, s} = _sig;
                const h = bits2int_modN(msgHash);
                const is = invN(s);
                const u1 = modN(h * is);
                const u2 = modN(r * is);
                const R = Point.BASE.multiplyAndAddUnsafe(P, u1, u2)?.toAffine();
                if (!R) return false;
                const v = modN(R.x);
                return v === r;
            }
            return {
                CURVE,
                getPublicKey,
                getSharedSecret,
                sign,
                verify,
                ProjectivePoint: Point,
                Signature,
                utils
            };
        }
        /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
        function _shortw_utils_getHash(hash) {
            return {
                hash,
                hmac: (key, ...msgs) => hmac(hash, key, utils_concatBytes(...msgs)),
                randomBytes: utils_randomBytes
            };
        }
        function createCurve(curveDef, defHash) {
            const create = hash => weierstrass({
                ...curveDef,
                ..._shortw_utils_getHash(hash)
            });
            return Object.freeze({
                ...create(defHash),
                create
            });
        }
        /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
        const secp256k1P = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f");
        const secp256k1N = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141");
        const secp256k1_1n = BigInt(1);
        const secp256k1_2n = BigInt(2);
        const divNearest = (a, b) => (a + b / secp256k1_2n) / b;
        function sqrtMod(y) {
            const P = secp256k1P;
            const _3n = BigInt(3), _6n = BigInt(6), _11n = BigInt(11), _22n = BigInt(22);
            const _23n = BigInt(23), _44n = BigInt(44), _88n = BigInt(88);
            const b2 = y * y * y % P;
            const b3 = b2 * b2 * y % P;
            const b6 = modular_pow2(b3, _3n, P) * b3 % P;
            const b9 = modular_pow2(b6, _3n, P) * b3 % P;
            const b11 = modular_pow2(b9, secp256k1_2n, P) * b2 % P;
            const b22 = modular_pow2(b11, _11n, P) * b11 % P;
            const b44 = modular_pow2(b22, _22n, P) * b22 % P;
            const b88 = modular_pow2(b44, _44n, P) * b44 % P;
            const b176 = modular_pow2(b88, _88n, P) * b88 % P;
            const b220 = modular_pow2(b176, _44n, P) * b44 % P;
            const b223 = modular_pow2(b220, _3n, P) * b3 % P;
            const t1 = modular_pow2(b223, _23n, P) * b22 % P;
            const t2 = modular_pow2(t1, _6n, P) * b2 % P;
            const root = modular_pow2(t2, secp256k1_2n, P);
            if (!secp256k1_Fp.eql(secp256k1_Fp.sqr(root), y)) throw new Error("Cannot find square root");
            return root;
        }
        const secp256k1_Fp = Field(secp256k1P, void 0, void 0, {
            sqrt: sqrtMod
        });
        const secp256k1 = createCurve({
            a: BigInt(0),
            b: BigInt(7),
            Fp: secp256k1_Fp,
            n: secp256k1N,
            Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
            Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
            h: BigInt(1),
            lowS: true,
            endo: {
                beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
                splitScalar: k => {
                    const n = secp256k1N;
                    const a1 = BigInt("0x3086d221a7d46bcde86c90e49284eb15");
                    const b1 = -secp256k1_1n * BigInt("0xe4437ed6010e88286f547fa90abfe4c3");
                    const a2 = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8");
                    const b2 = a1;
                    const POW_2_128 = BigInt("0x100000000000000000000000000000000");
                    const c1 = divNearest(b2 * k, n);
                    const c2 = divNearest(-b1 * k, n);
                    let k1 = modular_mod(k - c1 * a1 - c2 * a2, n);
                    let k2 = modular_mod(-c1 * b1 - c2 * b2, n);
                    const k1neg = k1 > POW_2_128;
                    const k2neg = k2 > POW_2_128;
                    if (k1neg) k1 = n - k1;
                    if (k2neg) k2 = n - k2;
                    if (k1 > POW_2_128 || k2 > POW_2_128) throw new Error("splitScalar: Endomorphism failed, k=" + k);
                    return {
                        k1neg,
                        k1,
                        k2neg,
                        k2
                    };
                }
            }
        }, sha256_sha256);
        const secp256k1_0n = BigInt(0);
        const fe = x => typeof x === "bigint" && secp256k1_0n < x && x < secp256k1P;
        const ge = x => typeof x === "bigint" && secp256k1_0n < x && x < secp256k1N;
        const TAGGED_HASH_PREFIXES = {};
        function taggedHash(tag, ...messages) {
            let tagP = TAGGED_HASH_PREFIXES[tag];
            if (tagP === void 0) {
                const tagH = sha256(Uint8Array.from(tag, (c => c.charCodeAt(0))));
                concatBytes(tagH, tagH);
                TAGGED_HASH_PREFIXES[tag] = tagP;
            }
            return sha256(concatBytes(tagP, ...messages));
        }
        const pointToBytes = point => point.toRawBytes(true).slice(1);
        const numTo32b = n => numberToBytesBE(n, 32);
        const modP = x => mod(x, secp256k1P);
        const modN = x => mod(x, secp256k1N);
        const Point = secp256k1.ProjectivePoint;
        const GmulAdd = (Q, a, b) => Point.BASE.multiplyAndAddUnsafe(Q, a, b);
        function schnorrGetExtPubKey(priv) {
            let d_ = secp256k1.utils.normPrivateKeyToScalar(priv);
            let p = Point.fromPrivateKey(d_);
            const scalar = p.hasEvenY() ? d_ : modN(-d_);
            return {
                scalar,
                bytes: pointToBytes(p)
            };
        }
        function lift_x(x) {
            if (!fe(x)) throw new Error("bad x: need 0 < x < p");
            const xx = modP(x * x);
            const c = modP(xx * x + BigInt(7));
            let y = sqrtMod(c);
            if (y % secp256k1_2n !== secp256k1_0n) modP(-y);
            const p = new Point(x, y, secp256k1_1n);
            p.assertValidity();
            return p;
        }
        function challenge(...args) {
            return modN(bytesToNumberBE(taggedHash("BIP0340/challenge", ...args)));
        }
        function schnorrGetPublicKey(privateKey) {
            return schnorrGetExtPubKey(privateKey).bytes;
        }
        function schnorrSign(message, privateKey, auxRand = randomBytes(32)) {
            const m = ensureBytes("message", message);
            const {bytes: px, scalar: d} = schnorrGetExtPubKey(privateKey);
            const a = ensureBytes("auxRand", auxRand, 32);
            const t = numTo32b(d ^ bytesToNumberBE(taggedHash("BIP0340/aux", a)));
            const rand = taggedHash("BIP0340/nonce", t, px, m);
            const k_ = modN(bytesToNumberBE(rand));
            if (k_ === secp256k1_0n) throw new Error("sign failed: k is zero");
            const {bytes: rx, scalar: k} = schnorrGetExtPubKey(k_);
            const e = challenge(rx, px, m);
            const sig = new Uint8Array(64);
            sig.set(rx, 0);
            sig.set(numTo32b(modN(k + e * d)), 32);
            if (!schnorrVerify(sig, m, px)) throw new Error("sign: Invalid signature produced");
            return sig;
        }
        function schnorrVerify(signature, message, publicKey) {
            const sig = ensureBytes("signature", signature, 64);
            const m = ensureBytes("message", message);
            const pub = ensureBytes("publicKey", publicKey, 32);
            try {
                const P = lift_x(bytesToNumberBE(pub));
                const r = bytesToNumberBE(sig.subarray(0, 32));
                if (!fe(r)) return false;
                const s = bytesToNumberBE(sig.subarray(32, 64));
                if (!ge(s)) return false;
                const e = challenge(numTo32b(r), pointToBytes(P), m);
                const R = GmulAdd(P, s, modN(-e));
                if (!R || !R.hasEvenY() || R.toAffine().x !== r) return false;
                return true;
            } catch (error) {
                return false;
            }
        }
        null && (() => {
            secp256k1.utils.randomPrivateKey, numberToBytesBE, bytesToNumberBE, mod;
        })();
        const isoMap = null && (() => isogenyMap(secp256k1_Fp, [ [ "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7", "0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581", "0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262", "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c" ], [ "0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b", "0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14", "0x0000000000000000000000000000000000000000000000000000000000000001" ], [ "0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c", "0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3", "0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931", "0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84" ], [ "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b", "0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573", "0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f", "0x0000000000000000000000000000000000000000000000000000000000000001" ] ].map((i => i.map((j => BigInt(j)))))))();
        const mapSWU = null && (() => mapToCurveSimpleSWU(secp256k1_Fp, {
            A: BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"),
            B: BigInt("1771"),
            Z: secp256k1_Fp.create(BigInt("-11"))
        }))();
        const secp256k1_htf = null && (() => createHasher(secp256k1.ProjectivePoint, (scalars => {
            const {x, y} = mapSWU(secp256k1_Fp.create(scalars[0]));
            return isoMap(x, y);
        }), {
            DST: "secp256k1_XMD:SHA-256_SSWU_RO_",
            encodeDST: "secp256k1_XMD:SHA-256_SSWU_NU_",
            p: secp256k1_Fp.ORDER,
            m: 1,
            k: 128,
            expand: "xmd",
            hash: sha256
        }))();
        null && (() => {
            secp256k1_htf.hashToCurve;
        })();
        null && (() => {
            secp256k1_htf.encodeToCurve;
        })();
        ed25519.utils.randomPrivateKey;
        const generateKeypair = () => {
            const privateScalar = ed25519.utils.randomPrivateKey();
            const publicKey = getPublicKey(privateScalar);
            const secretKey = new Uint8Array(64);
            secretKey.set(privateScalar);
            secretKey.set(publicKey, 32);
            return {
                publicKey,
                secretKey
            };
        };
        const getPublicKey = ed25519.getPublicKey;
        function isOnCurve(publicKey) {
            try {
                ed25519.ExtendedPoint.fromHex(publicKey);
                return true;
            } catch {
                return false;
            }
        }
        const sign = (message, secretKey) => ed25519.sign(message, secretKey.slice(0, 32));
        const verify = ed25519.verify;
        const toBuffer = arr => {
            if (node_modules_buffer.hp.isBuffer(arr)) return arr; else if (arr instanceof Uint8Array) return node_modules_buffer.hp.from(arr.buffer, arr.byteOffset, arr.byteLength); else return node_modules_buffer.hp.from(arr);
        };
        class index_browser_esm_Struct {
            constructor(properties) {
                Object.assign(this, properties);
            }
            encode() {
                return node_modules_buffer.hp.from((0, lib.serialize)(SOLANA_SCHEMA, this));
            }
            static decode(data) {
                return (0, lib.deserialize)(SOLANA_SCHEMA, this, data);
            }
            static decodeUnchecked(data) {
                return (0, lib.deserializeUnchecked)(SOLANA_SCHEMA, this, data);
            }
        }
        const SOLANA_SCHEMA = new Map;
        var _class;
        let _Symbol$toStringTag;
        const MAX_SEED_LENGTH = 32;
        const PUBLIC_KEY_LENGTH = 32;
        function isPublicKeyData(value) {
            return value._bn !== void 0;
        }
        let uniquePublicKeyCounter = 1;
        _Symbol$toStringTag = Symbol.toStringTag;
        class PublicKey extends index_browser_esm_Struct {
            constructor(value) {
                super({});
                this._bn = void 0;
                if (isPublicKeyData(value)) this._bn = value._bn; else {
                    if (typeof value === "string") {
                        const decoded = bs58_default().decode(value);
                        if (decoded.length != PUBLIC_KEY_LENGTH) throw new Error(`Invalid public key input`);
                        this._bn = new (bn_default())(decoded);
                    } else this._bn = new (bn_default())(value);
                    if (this._bn.byteLength() > PUBLIC_KEY_LENGTH) throw new Error(`Invalid public key input`);
                }
            }
            static unique() {
                const key = new PublicKey(uniquePublicKeyCounter);
                uniquePublicKeyCounter += 1;
                return new PublicKey(key.toBuffer());
            }
            equals(publicKey) {
                return this._bn.eq(publicKey._bn);
            }
            toBase58() {
                return bs58_default().encode(this.toBytes());
            }
            toJSON() {
                return this.toBase58();
            }
            toBytes() {
                const buf = this.toBuffer();
                return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
            }
            toBuffer() {
                const b = this._bn.toArrayLike(node_modules_buffer.hp);
                if (b.length === PUBLIC_KEY_LENGTH) return b;
                const zeroPad = node_modules_buffer.hp.alloc(32);
                b.copy(zeroPad, 32 - b.length);
                return zeroPad;
            }
            get [_Symbol$toStringTag]() {
                return `PublicKey(${this.toString()})`;
            }
            toString() {
                return this.toBase58();
            }
            static async createWithSeed(fromPublicKey, seed, programId) {
                const buffer = node_modules_buffer.hp.concat([ fromPublicKey.toBuffer(), node_modules_buffer.hp.from(seed), programId.toBuffer() ]);
                const publicKeyBytes = sha256_sha256(buffer);
                return new PublicKey(publicKeyBytes);
            }
            static createProgramAddressSync(seeds, programId) {
                let buffer = node_modules_buffer.hp.alloc(0);
                seeds.forEach((function(seed) {
                    if (seed.length > MAX_SEED_LENGTH) throw new TypeError(`Max seed length exceeded`);
                    buffer = node_modules_buffer.hp.concat([ buffer, toBuffer(seed) ]);
                }));
                buffer = node_modules_buffer.hp.concat([ buffer, programId.toBuffer(), node_modules_buffer.hp.from("ProgramDerivedAddress") ]);
                const publicKeyBytes = sha256_sha256(buffer);
                if (isOnCurve(publicKeyBytes)) throw new Error(`Invalid seeds, address must fall off the curve`);
                return new PublicKey(publicKeyBytes);
            }
            static async createProgramAddress(seeds, programId) {
                return this.createProgramAddressSync(seeds, programId);
            }
            static findProgramAddressSync(seeds, programId) {
                let nonce = 255;
                let address;
                while (nonce != 0) {
                    try {
                        const seedsWithNonce = seeds.concat(node_modules_buffer.hp.from([ nonce ]));
                        address = this.createProgramAddressSync(seedsWithNonce, programId);
                    } catch (err) {
                        if (err instanceof TypeError) throw err;
                        nonce--;
                        continue;
                    }
                    return [ address, nonce ];
                }
                throw new Error(`Unable to find a viable program address nonce`);
            }
            static async findProgramAddress(seeds, programId) {
                return this.findProgramAddressSync(seeds, programId);
            }
            static isOnCurve(pubkeyData) {
                const pubkey = new PublicKey(pubkeyData);
                return isOnCurve(pubkey.toBytes());
            }
        }
        _class = PublicKey;
        PublicKey.default = new _class("11111111111111111111111111111111");
        SOLANA_SCHEMA.set(PublicKey, {
            kind: "struct",
            fields: [ [ "_bn", "u256" ] ]
        });
        new PublicKey("BPFLoader1111111111111111111111111111111111");
        const PACKET_DATA_SIZE = 1280 - 40 - 8;
        const VERSION_PREFIX_MASK = 127;
        const SIGNATURE_LENGTH_IN_BYTES = 64;
        class TransactionExpiredBlockheightExceededError extends Error {
            constructor(signature) {
                super(`Signature ${signature} has expired: block height exceeded.`);
                this.signature = void 0;
                this.signature = signature;
            }
        }
        Object.defineProperty(TransactionExpiredBlockheightExceededError.prototype, "name", {
            value: "TransactionExpiredBlockheightExceededError"
        });
        class TransactionExpiredTimeoutError extends Error {
            constructor(signature, timeoutSeconds) {
                super(`Transaction was not confirmed in ${timeoutSeconds.toFixed(2)} seconds. It is ` + "unknown if it succeeded or failed. Check signature " + `${signature} using the Solana Explorer or CLI tools.`);
                this.signature = void 0;
                this.signature = signature;
            }
        }
        Object.defineProperty(TransactionExpiredTimeoutError.prototype, "name", {
            value: "TransactionExpiredTimeoutError"
        });
        class TransactionExpiredNonceInvalidError extends Error {
            constructor(signature) {
                super(`Signature ${signature} has expired: the nonce is no longer valid.`);
                this.signature = void 0;
                this.signature = signature;
            }
        }
        Object.defineProperty(TransactionExpiredNonceInvalidError.prototype, "name", {
            value: "TransactionExpiredNonceInvalidError"
        });
        class MessageAccountKeys {
            constructor(staticAccountKeys, accountKeysFromLookups) {
                this.staticAccountKeys = void 0;
                this.accountKeysFromLookups = void 0;
                this.staticAccountKeys = staticAccountKeys;
                this.accountKeysFromLookups = accountKeysFromLookups;
            }
            keySegments() {
                const keySegments = [ this.staticAccountKeys ];
                if (this.accountKeysFromLookups) {
                    keySegments.push(this.accountKeysFromLookups.writable);
                    keySegments.push(this.accountKeysFromLookups.readonly);
                }
                return keySegments;
            }
            get(index) {
                for (const keySegment of this.keySegments()) if (index < keySegment.length) return keySegment[index]; else index -= keySegment.length;
                return;
            }
            get length() {
                return this.keySegments().flat().length;
            }
            compileInstructions(instructions) {
                const U8_MAX = 255;
                if (this.length > U8_MAX + 1) throw new Error("Account index overflow encountered during compilation");
                const keyIndexMap = new Map;
                this.keySegments().flat().forEach(((key, index) => {
                    keyIndexMap.set(key.toBase58(), index);
                }));
                const findKeyIndex = key => {
                    const keyIndex = keyIndexMap.get(key.toBase58());
                    if (keyIndex === void 0) throw new Error("Encountered an unknown instruction account key during compilation");
                    return keyIndex;
                };
                return instructions.map((instruction => ({
                    programIdIndex: findKeyIndex(instruction.programId),
                    accountKeyIndexes: instruction.keys.map((meta => findKeyIndex(meta.pubkey))),
                    data: instruction.data
                })));
            }
        }
        const publicKey = (property = "publicKey") => Layout.av(32, property);
        const rustString = (property = "string") => {
            const rsl = Layout.w3([ Layout.DH("length"), Layout.DH("lengthPadding"), Layout.av(Layout.cY(Layout.DH(), -8), "chars") ], property);
            const _decode = rsl.decode.bind(rsl);
            const _encode = rsl.encode.bind(rsl);
            const rslShim = rsl;
            rslShim.decode = (b, offset) => {
                const data = _decode(b, offset);
                return data["chars"].toString();
            };
            rslShim.encode = (str, b, offset) => {
                const data = {
                    chars: node_modules_buffer.hp.from(str, "utf8")
                };
                return _encode(data, b, offset);
            };
            rslShim.alloc = str => Layout.DH().span + Layout.DH().span + node_modules_buffer.hp.from(str, "utf8").length;
            return rslShim;
        };
        const authorized = (property = "authorized") => Layout.w3([ publicKey("staker"), publicKey("withdrawer") ], property);
        const lockup = (property = "lockup") => Layout.w3([ Layout.Wg("unixTimestamp"), Layout.Wg("epoch"), publicKey("custodian") ], property);
        const voteInit = (property = "voteInit") => Layout.w3([ publicKey("nodePubkey"), publicKey("authorizedVoter"), publicKey("authorizedWithdrawer"), Layout.u8("commission") ], property);
        const voteAuthorizeWithSeedArgs = (property = "voteAuthorizeWithSeedArgs") => Layout.w3([ Layout.DH("voteAuthorizationType"), publicKey("currentAuthorityDerivedKeyOwnerPubkey"), rustString("currentAuthorityDerivedKeySeed"), publicKey("newAuthorized") ], property);
        function getAlloc(type, fields) {
            const getItemAlloc = item => {
                if (item.span >= 0) return item.span; else if (typeof item.alloc === "function") return item.alloc(fields[item.property]); else if ("count" in item && "elementLayout" in item) {
                    const field = fields[item.property];
                    if (Array.isArray(field)) return field.length * getItemAlloc(item.elementLayout);
                } else if ("fields" in item) return getAlloc({
                    layout: item
                }, fields[item.property]);
                return 0;
            };
            let alloc = 0;
            type.layout.fields.forEach((item => {
                alloc += getItemAlloc(item);
            }));
            return alloc;
        }
        function decodeLength(bytes) {
            let len = 0;
            let size = 0;
            for (;;) {
                let elem = bytes.shift();
                len |= (elem & 127) << size * 7;
                size += 1;
                if ((elem & 128) === 0) break;
            }
            return len;
        }
        function encodeLength(bytes, len) {
            let rem_len = len;
            for (;;) {
                let elem = rem_len & 127;
                rem_len >>= 7;
                if (rem_len == 0) {
                    bytes.push(elem);
                    break;
                } else {
                    elem |= 128;
                    bytes.push(elem);
                }
            }
        }
        function index_browser_esm_assert(condition, message) {
            if (!condition) throw new Error(message || "Assertion failed");
        }
        class CompiledKeys {
            constructor(payer, keyMetaMap) {
                this.payer = void 0;
                this.keyMetaMap = void 0;
                this.payer = payer;
                this.keyMetaMap = keyMetaMap;
            }
            static compile(instructions, payer) {
                const keyMetaMap = new Map;
                const getOrInsertDefault = pubkey => {
                    const address = pubkey.toBase58();
                    let keyMeta = keyMetaMap.get(address);
                    if (keyMeta === void 0) {
                        keyMeta = {
                            isSigner: false,
                            isWritable: false,
                            isInvoked: false
                        };
                        keyMetaMap.set(address, keyMeta);
                    }
                    return keyMeta;
                };
                const payerKeyMeta = getOrInsertDefault(payer);
                payerKeyMeta.isSigner = true;
                payerKeyMeta.isWritable = true;
                for (const ix of instructions) {
                    getOrInsertDefault(ix.programId).isInvoked = true;
                    for (const accountMeta of ix.keys) {
                        const keyMeta = getOrInsertDefault(accountMeta.pubkey);
                        keyMeta.isSigner ||= accountMeta.isSigner;
                        keyMeta.isWritable ||= accountMeta.isWritable;
                    }
                }
                return new CompiledKeys(payer, keyMetaMap);
            }
            getMessageComponents() {
                const mapEntries = [ ...this.keyMetaMap.entries() ];
                index_browser_esm_assert(mapEntries.length <= 256, "Max static account keys length exceeded");
                const writableSigners = mapEntries.filter((([, meta]) => meta.isSigner && meta.isWritable));
                const readonlySigners = mapEntries.filter((([, meta]) => meta.isSigner && !meta.isWritable));
                const writableNonSigners = mapEntries.filter((([, meta]) => !meta.isSigner && meta.isWritable));
                const readonlyNonSigners = mapEntries.filter((([, meta]) => !meta.isSigner && !meta.isWritable));
                const header = {
                    numRequiredSignatures: writableSigners.length + readonlySigners.length,
                    numReadonlySignedAccounts: readonlySigners.length,
                    numReadonlyUnsignedAccounts: readonlyNonSigners.length
                };
                {
                    index_browser_esm_assert(writableSigners.length > 0, "Expected at least one writable signer key");
                    const [payerAddress] = writableSigners[0];
                    index_browser_esm_assert(payerAddress === this.payer.toBase58(), "Expected first writable signer key to be the fee payer");
                }
                const staticAccountKeys = [ ...writableSigners.map((([address]) => new PublicKey(address))), ...readonlySigners.map((([address]) => new PublicKey(address))), ...writableNonSigners.map((([address]) => new PublicKey(address))), ...readonlyNonSigners.map((([address]) => new PublicKey(address))) ];
                return [ header, staticAccountKeys ];
            }
            extractTableLookup(lookupTable) {
                const [writableIndexes, drainedWritableKeys] = this.drainKeysFoundInLookupTable(lookupTable.state.addresses, (keyMeta => !keyMeta.isSigner && !keyMeta.isInvoked && keyMeta.isWritable));
                const [readonlyIndexes, drainedReadonlyKeys] = this.drainKeysFoundInLookupTable(lookupTable.state.addresses, (keyMeta => !keyMeta.isSigner && !keyMeta.isInvoked && !keyMeta.isWritable));
                if (writableIndexes.length === 0 && readonlyIndexes.length === 0) return;
                return [ {
                    accountKey: lookupTable.key,
                    writableIndexes,
                    readonlyIndexes
                }, {
                    writable: drainedWritableKeys,
                    readonly: drainedReadonlyKeys
                } ];
            }
            drainKeysFoundInLookupTable(lookupTableEntries, keyMetaFilter) {
                const lookupTableIndexes = new Array;
                const drainedKeys = new Array;
                for (const [address, keyMeta] of this.keyMetaMap.entries()) if (keyMetaFilter(keyMeta)) {
                    const key = new PublicKey(address);
                    const lookupTableIndex = lookupTableEntries.findIndex((entry => entry.equals(key)));
                    if (lookupTableIndex >= 0) {
                        index_browser_esm_assert(lookupTableIndex < 256, "Max lookup table index exceeded");
                        lookupTableIndexes.push(lookupTableIndex);
                        drainedKeys.push(key);
                        this.keyMetaMap.delete(address);
                    }
                }
                return [ lookupTableIndexes, drainedKeys ];
            }
        }
        class Message {
            constructor(args) {
                this.header = void 0;
                this.accountKeys = void 0;
                this.recentBlockhash = void 0;
                this.instructions = void 0;
                this.indexToProgramIds = new Map;
                this.header = args.header;
                this.accountKeys = args.accountKeys.map((account => new PublicKey(account)));
                this.recentBlockhash = args.recentBlockhash;
                this.instructions = args.instructions;
                this.instructions.forEach((ix => this.indexToProgramIds.set(ix.programIdIndex, this.accountKeys[ix.programIdIndex])));
            }
            get version() {
                return "legacy";
            }
            get staticAccountKeys() {
                return this.accountKeys;
            }
            get compiledInstructions() {
                return this.instructions.map((ix => ({
                    programIdIndex: ix.programIdIndex,
                    accountKeyIndexes: ix.accounts,
                    data: bs58_default().decode(ix.data)
                })));
            }
            get addressTableLookups() {
                return [];
            }
            getAccountKeys() {
                return new MessageAccountKeys(this.staticAccountKeys);
            }
            static compile(args) {
                const compiledKeys = CompiledKeys.compile(args.instructions, args.payerKey);
                const [header, staticAccountKeys] = compiledKeys.getMessageComponents();
                const accountKeys = new MessageAccountKeys(staticAccountKeys);
                const instructions = accountKeys.compileInstructions(args.instructions).map((ix => ({
                    programIdIndex: ix.programIdIndex,
                    accounts: ix.accountKeyIndexes,
                    data: bs58_default().encode(ix.data)
                })));
                return new Message({
                    header,
                    accountKeys: staticAccountKeys,
                    recentBlockhash: args.recentBlockhash,
                    instructions
                });
            }
            isAccountSigner(index) {
                return index < this.header.numRequiredSignatures;
            }
            isAccountWritable(index) {
                const numSignedAccounts = this.header.numRequiredSignatures;
                if (index >= this.header.numRequiredSignatures) {
                    const unsignedAccountIndex = index - numSignedAccounts;
                    const numUnsignedAccounts = this.accountKeys.length - numSignedAccounts;
                    const numWritableUnsignedAccounts = numUnsignedAccounts - this.header.numReadonlyUnsignedAccounts;
                    return unsignedAccountIndex < numWritableUnsignedAccounts;
                } else {
                    const numWritableSignedAccounts = numSignedAccounts - this.header.numReadonlySignedAccounts;
                    return index < numWritableSignedAccounts;
                }
            }
            isProgramId(index) {
                return this.indexToProgramIds.has(index);
            }
            programIds() {
                return [ ...this.indexToProgramIds.values() ];
            }
            nonProgramIds() {
                return this.accountKeys.filter(((_, index) => !this.isProgramId(index)));
            }
            serialize() {
                const numKeys = this.accountKeys.length;
                let keyCount = [];
                encodeLength(keyCount, numKeys);
                const instructions = this.instructions.map((instruction => {
                    const {accounts, programIdIndex} = instruction;
                    const data = Array.from(bs58_default().decode(instruction.data));
                    let keyIndicesCount = [];
                    encodeLength(keyIndicesCount, accounts.length);
                    let dataCount = [];
                    encodeLength(dataCount, data.length);
                    return {
                        programIdIndex,
                        keyIndicesCount: node_modules_buffer.hp.from(keyIndicesCount),
                        keyIndices: accounts,
                        dataLength: node_modules_buffer.hp.from(dataCount),
                        data
                    };
                }));
                let instructionCount = [];
                encodeLength(instructionCount, instructions.length);
                let instructionBuffer = node_modules_buffer.hp.alloc(PACKET_DATA_SIZE);
                node_modules_buffer.hp.from(instructionCount).copy(instructionBuffer);
                let instructionBufferLength = instructionCount.length;
                instructions.forEach((instruction => {
                    const instructionLayout = Layout.w3([ Layout.u8("programIdIndex"), Layout.av(instruction.keyIndicesCount.length, "keyIndicesCount"), Layout.O6(Layout.u8("keyIndex"), instruction.keyIndices.length, "keyIndices"), Layout.av(instruction.dataLength.length, "dataLength"), Layout.O6(Layout.u8("userdatum"), instruction.data.length, "data") ]);
                    const length = instructionLayout.encode(instruction, instructionBuffer, instructionBufferLength);
                    instructionBufferLength += length;
                }));
                instructionBuffer = instructionBuffer.slice(0, instructionBufferLength);
                const signDataLayout = Layout.w3([ Layout.av(1, "numRequiredSignatures"), Layout.av(1, "numReadonlySignedAccounts"), Layout.av(1, "numReadonlyUnsignedAccounts"), Layout.av(keyCount.length, "keyCount"), Layout.O6(publicKey("key"), numKeys, "keys"), publicKey("recentBlockhash") ]);
                const transaction = {
                    numRequiredSignatures: node_modules_buffer.hp.from([ this.header.numRequiredSignatures ]),
                    numReadonlySignedAccounts: node_modules_buffer.hp.from([ this.header.numReadonlySignedAccounts ]),
                    numReadonlyUnsignedAccounts: node_modules_buffer.hp.from([ this.header.numReadonlyUnsignedAccounts ]),
                    keyCount: node_modules_buffer.hp.from(keyCount),
                    keys: this.accountKeys.map((key => toBuffer(key.toBytes()))),
                    recentBlockhash: bs58_default().decode(this.recentBlockhash)
                };
                let signData = node_modules_buffer.hp.alloc(2048);
                const length = signDataLayout.encode(transaction, signData);
                instructionBuffer.copy(signData, length);
                return signData.slice(0, length + instructionBuffer.length);
            }
            static from(buffer) {
                let byteArray = [ ...buffer ];
                const numRequiredSignatures = byteArray.shift();
                if (numRequiredSignatures !== (numRequiredSignatures & VERSION_PREFIX_MASK)) throw new Error("Versioned messages must be deserialized with VersionedMessage.deserialize()");
                const numReadonlySignedAccounts = byteArray.shift();
                const numReadonlyUnsignedAccounts = byteArray.shift();
                const accountCount = decodeLength(byteArray);
                let accountKeys = [];
                for (let i = 0; i < accountCount; i++) {
                    const account = byteArray.slice(0, PUBLIC_KEY_LENGTH);
                    byteArray = byteArray.slice(PUBLIC_KEY_LENGTH);
                    accountKeys.push(new PublicKey(node_modules_buffer.hp.from(account)));
                }
                const recentBlockhash = byteArray.slice(0, PUBLIC_KEY_LENGTH);
                byteArray = byteArray.slice(PUBLIC_KEY_LENGTH);
                const instructionCount = decodeLength(byteArray);
                let instructions = [];
                for (let i = 0; i < instructionCount; i++) {
                    const programIdIndex = byteArray.shift();
                    const accountCount = decodeLength(byteArray);
                    const accounts = byteArray.slice(0, accountCount);
                    byteArray = byteArray.slice(accountCount);
                    const dataLength = decodeLength(byteArray);
                    const dataSlice = byteArray.slice(0, dataLength);
                    const data = bs58_default().encode(node_modules_buffer.hp.from(dataSlice));
                    byteArray = byteArray.slice(dataLength);
                    instructions.push({
                        programIdIndex,
                        accounts,
                        data
                    });
                }
                const messageArgs = {
                    header: {
                        numRequiredSignatures,
                        numReadonlySignedAccounts,
                        numReadonlyUnsignedAccounts
                    },
                    recentBlockhash: bs58_default().encode(node_modules_buffer.hp.from(recentBlockhash)),
                    accountKeys,
                    instructions
                };
                return new Message(messageArgs);
            }
        }
        class MessageV0 {
            constructor(args) {
                this.header = void 0;
                this.staticAccountKeys = void 0;
                this.recentBlockhash = void 0;
                this.compiledInstructions = void 0;
                this.addressTableLookups = void 0;
                this.header = args.header;
                this.staticAccountKeys = args.staticAccountKeys;
                this.recentBlockhash = args.recentBlockhash;
                this.compiledInstructions = args.compiledInstructions;
                this.addressTableLookups = args.addressTableLookups;
            }
            get version() {
                return 0;
            }
            get numAccountKeysFromLookups() {
                let count = 0;
                for (const lookup of this.addressTableLookups) count += lookup.readonlyIndexes.length + lookup.writableIndexes.length;
                return count;
            }
            getAccountKeys(args) {
                let accountKeysFromLookups;
                if (args && "accountKeysFromLookups" in args && args.accountKeysFromLookups) {
                    if (this.numAccountKeysFromLookups != args.accountKeysFromLookups.writable.length + args.accountKeysFromLookups.readonly.length) throw new Error("Failed to get account keys because of a mismatch in the number of account keys from lookups");
                    accountKeysFromLookups = args.accountKeysFromLookups;
                } else if (args && "addressLookupTableAccounts" in args && args.addressLookupTableAccounts) accountKeysFromLookups = this.resolveAddressTableLookups(args.addressLookupTableAccounts); else if (this.addressTableLookups.length > 0) throw new Error("Failed to get account keys because address table lookups were not resolved");
                return new MessageAccountKeys(this.staticAccountKeys, accountKeysFromLookups);
            }
            isAccountSigner(index) {
                return index < this.header.numRequiredSignatures;
            }
            isAccountWritable(index) {
                const numSignedAccounts = this.header.numRequiredSignatures;
                const numStaticAccountKeys = this.staticAccountKeys.length;
                if (index >= numStaticAccountKeys) {
                    const lookupAccountKeysIndex = index - numStaticAccountKeys;
                    const numWritableLookupAccountKeys = this.addressTableLookups.reduce(((count, lookup) => count + lookup.writableIndexes.length), 0);
                    return lookupAccountKeysIndex < numWritableLookupAccountKeys;
                } else if (index >= this.header.numRequiredSignatures) {
                    const unsignedAccountIndex = index - numSignedAccounts;
                    const numUnsignedAccounts = numStaticAccountKeys - numSignedAccounts;
                    const numWritableUnsignedAccounts = numUnsignedAccounts - this.header.numReadonlyUnsignedAccounts;
                    return unsignedAccountIndex < numWritableUnsignedAccounts;
                } else {
                    const numWritableSignedAccounts = numSignedAccounts - this.header.numReadonlySignedAccounts;
                    return index < numWritableSignedAccounts;
                }
            }
            resolveAddressTableLookups(addressLookupTableAccounts) {
                const accountKeysFromLookups = {
                    writable: [],
                    readonly: []
                };
                for (const tableLookup of this.addressTableLookups) {
                    const tableAccount = addressLookupTableAccounts.find((account => account.key.equals(tableLookup.accountKey)));
                    if (!tableAccount) throw new Error(`Failed to find address lookup table account for table key ${tableLookup.accountKey.toBase58()}`);
                    for (const index of tableLookup.writableIndexes) if (index < tableAccount.state.addresses.length) accountKeysFromLookups.writable.push(tableAccount.state.addresses[index]); else throw new Error(`Failed to find address for index ${index} in address lookup table ${tableLookup.accountKey.toBase58()}`);
                    for (const index of tableLookup.readonlyIndexes) if (index < tableAccount.state.addresses.length) accountKeysFromLookups.readonly.push(tableAccount.state.addresses[index]); else throw new Error(`Failed to find address for index ${index} in address lookup table ${tableLookup.accountKey.toBase58()}`);
                }
                return accountKeysFromLookups;
            }
            static compile(args) {
                const compiledKeys = CompiledKeys.compile(args.instructions, args.payerKey);
                const addressTableLookups = new Array;
                const accountKeysFromLookups = {
                    writable: new Array,
                    readonly: new Array
                };
                const lookupTableAccounts = args.addressLookupTableAccounts || [];
                for (const lookupTable of lookupTableAccounts) {
                    const extractResult = compiledKeys.extractTableLookup(lookupTable);
                    if (extractResult !== void 0) {
                        const [addressTableLookup, {writable, readonly}] = extractResult;
                        addressTableLookups.push(addressTableLookup);
                        accountKeysFromLookups.writable.push(...writable);
                        accountKeysFromLookups.readonly.push(...readonly);
                    }
                }
                const [header, staticAccountKeys] = compiledKeys.getMessageComponents();
                const accountKeys = new MessageAccountKeys(staticAccountKeys, accountKeysFromLookups);
                const compiledInstructions = accountKeys.compileInstructions(args.instructions);
                return new MessageV0({
                    header,
                    staticAccountKeys,
                    recentBlockhash: args.recentBlockhash,
                    compiledInstructions,
                    addressTableLookups
                });
            }
            serialize() {
                const encodedStaticAccountKeysLength = Array();
                encodeLength(encodedStaticAccountKeysLength, this.staticAccountKeys.length);
                const serializedInstructions = this.serializeInstructions();
                const encodedInstructionsLength = Array();
                encodeLength(encodedInstructionsLength, this.compiledInstructions.length);
                const serializedAddressTableLookups = this.serializeAddressTableLookups();
                const encodedAddressTableLookupsLength = Array();
                encodeLength(encodedAddressTableLookupsLength, this.addressTableLookups.length);
                const messageLayout = Layout.w3([ Layout.u8("prefix"), Layout.w3([ Layout.u8("numRequiredSignatures"), Layout.u8("numReadonlySignedAccounts"), Layout.u8("numReadonlyUnsignedAccounts") ], "header"), Layout.av(encodedStaticAccountKeysLength.length, "staticAccountKeysLength"), Layout.O6(publicKey(), this.staticAccountKeys.length, "staticAccountKeys"), publicKey("recentBlockhash"), Layout.av(encodedInstructionsLength.length, "instructionsLength"), Layout.av(serializedInstructions.length, "serializedInstructions"), Layout.av(encodedAddressTableLookupsLength.length, "addressTableLookupsLength"), Layout.av(serializedAddressTableLookups.length, "serializedAddressTableLookups") ]);
                const serializedMessage = new Uint8Array(PACKET_DATA_SIZE);
                const MESSAGE_VERSION_0_PREFIX = 1 << 7;
                const serializedMessageLength = messageLayout.encode({
                    prefix: MESSAGE_VERSION_0_PREFIX,
                    header: this.header,
                    staticAccountKeysLength: new Uint8Array(encodedStaticAccountKeysLength),
                    staticAccountKeys: this.staticAccountKeys.map((key => key.toBytes())),
                    recentBlockhash: bs58_default().decode(this.recentBlockhash),
                    instructionsLength: new Uint8Array(encodedInstructionsLength),
                    serializedInstructions,
                    addressTableLookupsLength: new Uint8Array(encodedAddressTableLookupsLength),
                    serializedAddressTableLookups
                }, serializedMessage);
                return serializedMessage.slice(0, serializedMessageLength);
            }
            serializeInstructions() {
                let serializedLength = 0;
                const serializedInstructions = new Uint8Array(PACKET_DATA_SIZE);
                for (const instruction of this.compiledInstructions) {
                    const encodedAccountKeyIndexesLength = Array();
                    encodeLength(encodedAccountKeyIndexesLength, instruction.accountKeyIndexes.length);
                    const encodedDataLength = Array();
                    encodeLength(encodedDataLength, instruction.data.length);
                    const instructionLayout = Layout.w3([ Layout.u8("programIdIndex"), Layout.av(encodedAccountKeyIndexesLength.length, "encodedAccountKeyIndexesLength"), Layout.O6(Layout.u8(), instruction.accountKeyIndexes.length, "accountKeyIndexes"), Layout.av(encodedDataLength.length, "encodedDataLength"), Layout.av(instruction.data.length, "data") ]);
                    serializedLength += instructionLayout.encode({
                        programIdIndex: instruction.programIdIndex,
                        encodedAccountKeyIndexesLength: new Uint8Array(encodedAccountKeyIndexesLength),
                        accountKeyIndexes: instruction.accountKeyIndexes,
                        encodedDataLength: new Uint8Array(encodedDataLength),
                        data: instruction.data
                    }, serializedInstructions, serializedLength);
                }
                return serializedInstructions.slice(0, serializedLength);
            }
            serializeAddressTableLookups() {
                let serializedLength = 0;
                const serializedAddressTableLookups = new Uint8Array(PACKET_DATA_SIZE);
                for (const lookup of this.addressTableLookups) {
                    const encodedWritableIndexesLength = Array();
                    encodeLength(encodedWritableIndexesLength, lookup.writableIndexes.length);
                    const encodedReadonlyIndexesLength = Array();
                    encodeLength(encodedReadonlyIndexesLength, lookup.readonlyIndexes.length);
                    const addressTableLookupLayout = Layout.w3([ publicKey("accountKey"), Layout.av(encodedWritableIndexesLength.length, "encodedWritableIndexesLength"), Layout.O6(Layout.u8(), lookup.writableIndexes.length, "writableIndexes"), Layout.av(encodedReadonlyIndexesLength.length, "encodedReadonlyIndexesLength"), Layout.O6(Layout.u8(), lookup.readonlyIndexes.length, "readonlyIndexes") ]);
                    serializedLength += addressTableLookupLayout.encode({
                        accountKey: lookup.accountKey.toBytes(),
                        encodedWritableIndexesLength: new Uint8Array(encodedWritableIndexesLength),
                        writableIndexes: lookup.writableIndexes,
                        encodedReadonlyIndexesLength: new Uint8Array(encodedReadonlyIndexesLength),
                        readonlyIndexes: lookup.readonlyIndexes
                    }, serializedAddressTableLookups, serializedLength);
                }
                return serializedAddressTableLookups.slice(0, serializedLength);
            }
            static deserialize(serializedMessage) {
                let byteArray = [ ...serializedMessage ];
                const prefix = byteArray.shift();
                const maskedPrefix = prefix & VERSION_PREFIX_MASK;
                index_browser_esm_assert(prefix !== maskedPrefix, `Expected versioned message but received legacy message`);
                const version = maskedPrefix;
                index_browser_esm_assert(version === 0, `Expected versioned message with version 0 but found version ${version}`);
                const header = {
                    numRequiredSignatures: byteArray.shift(),
                    numReadonlySignedAccounts: byteArray.shift(),
                    numReadonlyUnsignedAccounts: byteArray.shift()
                };
                const staticAccountKeys = [];
                const staticAccountKeysLength = decodeLength(byteArray);
                for (let i = 0; i < staticAccountKeysLength; i++) staticAccountKeys.push(new PublicKey(byteArray.splice(0, PUBLIC_KEY_LENGTH)));
                const recentBlockhash = bs58_default().encode(byteArray.splice(0, PUBLIC_KEY_LENGTH));
                const instructionCount = decodeLength(byteArray);
                const compiledInstructions = [];
                for (let i = 0; i < instructionCount; i++) {
                    const programIdIndex = byteArray.shift();
                    const accountKeyIndexesLength = decodeLength(byteArray);
                    const accountKeyIndexes = byteArray.splice(0, accountKeyIndexesLength);
                    const dataLength = decodeLength(byteArray);
                    const data = new Uint8Array(byteArray.splice(0, dataLength));
                    compiledInstructions.push({
                        programIdIndex,
                        accountKeyIndexes,
                        data
                    });
                }
                const addressTableLookupsCount = decodeLength(byteArray);
                const addressTableLookups = [];
                for (let i = 0; i < addressTableLookupsCount; i++) {
                    const accountKey = new PublicKey(byteArray.splice(0, PUBLIC_KEY_LENGTH));
                    const writableIndexesLength = decodeLength(byteArray);
                    const writableIndexes = byteArray.splice(0, writableIndexesLength);
                    const readonlyIndexesLength = decodeLength(byteArray);
                    const readonlyIndexes = byteArray.splice(0, readonlyIndexesLength);
                    addressTableLookups.push({
                        accountKey,
                        writableIndexes,
                        readonlyIndexes
                    });
                }
                return new MessageV0({
                    header,
                    staticAccountKeys,
                    recentBlockhash,
                    compiledInstructions,
                    addressTableLookups
                });
            }
        }
        let TransactionStatus = function(TransactionStatus) {
            TransactionStatus[TransactionStatus["BLOCKHEIGHT_EXCEEDED"] = 0] = "BLOCKHEIGHT_EXCEEDED";
            TransactionStatus[TransactionStatus["PROCESSED"] = 1] = "PROCESSED";
            TransactionStatus[TransactionStatus["TIMED_OUT"] = 2] = "TIMED_OUT";
            TransactionStatus[TransactionStatus["NONCE_INVALID"] = 3] = "NONCE_INVALID";
            return TransactionStatus;
        }({});
        const DEFAULT_SIGNATURE = node_modules_buffer.hp.alloc(SIGNATURE_LENGTH_IN_BYTES).fill(0);
        class TransactionInstruction {
            constructor(opts) {
                this.keys = void 0;
                this.programId = void 0;
                this.data = node_modules_buffer.hp.alloc(0);
                this.programId = opts.programId;
                this.keys = opts.keys;
                if (opts.data) this.data = opts.data;
            }
            toJSON() {
                return {
                    keys: this.keys.map((({pubkey, isSigner, isWritable}) => ({
                        pubkey: pubkey.toJSON(),
                        isSigner,
                        isWritable
                    }))),
                    programId: this.programId.toJSON(),
                    data: [ ...this.data ]
                };
            }
        }
        class Transaction {
            get signature() {
                if (this.signatures.length > 0) return this.signatures[0].signature;
                return null;
            }
            constructor(opts) {
                this.signatures = [];
                this.feePayer = void 0;
                this.instructions = [];
                this.recentBlockhash = void 0;
                this.lastValidBlockHeight = void 0;
                this.nonceInfo = void 0;
                this.minNonceContextSlot = void 0;
                this._message = void 0;
                this._json = void 0;
                if (!opts) return;
                if (opts.feePayer) this.feePayer = opts.feePayer;
                if (opts.signatures) this.signatures = opts.signatures;
                if (Object.prototype.hasOwnProperty.call(opts, "nonceInfo")) {
                    const {minContextSlot, nonceInfo} = opts;
                    this.minNonceContextSlot = minContextSlot;
                    this.nonceInfo = nonceInfo;
                } else if (Object.prototype.hasOwnProperty.call(opts, "lastValidBlockHeight")) {
                    const {blockhash, lastValidBlockHeight} = opts;
                    this.recentBlockhash = blockhash;
                    this.lastValidBlockHeight = lastValidBlockHeight;
                } else {
                    const {recentBlockhash, nonceInfo} = opts;
                    if (nonceInfo) this.nonceInfo = nonceInfo;
                    this.recentBlockhash = recentBlockhash;
                }
            }
            toJSON() {
                return {
                    recentBlockhash: this.recentBlockhash || null,
                    feePayer: this.feePayer ? this.feePayer.toJSON() : null,
                    nonceInfo: this.nonceInfo ? {
                        nonce: this.nonceInfo.nonce,
                        nonceInstruction: this.nonceInfo.nonceInstruction.toJSON()
                    } : null,
                    instructions: this.instructions.map((instruction => instruction.toJSON())),
                    signers: this.signatures.map((({publicKey}) => publicKey.toJSON()))
                };
            }
            add(...items) {
                if (items.length === 0) throw new Error("No instructions");
                items.forEach((item => {
                    if ("instructions" in item) this.instructions = this.instructions.concat(item.instructions); else if ("data" in item && "programId" in item && "keys" in item) this.instructions.push(item); else this.instructions.push(new TransactionInstruction(item));
                }));
                return this;
            }
            compileMessage() {
                if (this._message && JSON.stringify(this.toJSON()) === JSON.stringify(this._json)) return this._message;
                let recentBlockhash;
                let instructions;
                if (this.nonceInfo) {
                    recentBlockhash = this.nonceInfo.nonce;
                    if (this.instructions[0] != this.nonceInfo.nonceInstruction) instructions = [ this.nonceInfo.nonceInstruction, ...this.instructions ]; else instructions = this.instructions;
                } else {
                    recentBlockhash = this.recentBlockhash;
                    instructions = this.instructions;
                }
                if (!recentBlockhash) throw new Error("Transaction recentBlockhash required");
                if (instructions.length < 1) console.warn("No instructions provided");
                let feePayer;
                if (this.feePayer) feePayer = this.feePayer; else if (this.signatures.length > 0 && this.signatures[0].publicKey) feePayer = this.signatures[0].publicKey; else throw new Error("Transaction fee payer required");
                for (let i = 0; i < instructions.length; i++) if (instructions[i].programId === void 0) throw new Error(`Transaction instruction index ${i} has undefined program id`);
                const programIds = [];
                const accountMetas = [];
                instructions.forEach((instruction => {
                    instruction.keys.forEach((accountMeta => {
                        accountMetas.push({
                            ...accountMeta
                        });
                    }));
                    const programId = instruction.programId.toString();
                    if (!programIds.includes(programId)) programIds.push(programId);
                }));
                programIds.forEach((programId => {
                    accountMetas.push({
                        pubkey: new PublicKey(programId),
                        isSigner: false,
                        isWritable: false
                    });
                }));
                const uniqueMetas = [];
                accountMetas.forEach((accountMeta => {
                    const pubkeyString = accountMeta.pubkey.toString();
                    const uniqueIndex = uniqueMetas.findIndex((x => x.pubkey.toString() === pubkeyString));
                    if (uniqueIndex > -1) {
                        uniqueMetas[uniqueIndex].isWritable = uniqueMetas[uniqueIndex].isWritable || accountMeta.isWritable;
                        uniqueMetas[uniqueIndex].isSigner = uniqueMetas[uniqueIndex].isSigner || accountMeta.isSigner;
                    } else uniqueMetas.push(accountMeta);
                }));
                uniqueMetas.sort((function(x, y) {
                    if (x.isSigner !== y.isSigner) return x.isSigner ? -1 : 1;
                    if (x.isWritable !== y.isWritable) return x.isWritable ? -1 : 1;
                    const options = {
                        localeMatcher: "best fit",
                        usage: "sort",
                        sensitivity: "variant",
                        ignorePunctuation: false,
                        numeric: false,
                        caseFirst: "lower"
                    };
                    return x.pubkey.toBase58().localeCompare(y.pubkey.toBase58(), "en", options);
                }));
                const feePayerIndex = uniqueMetas.findIndex((x => x.pubkey.equals(feePayer)));
                if (feePayerIndex > -1) {
                    const [payerMeta] = uniqueMetas.splice(feePayerIndex, 1);
                    payerMeta.isSigner = true;
                    payerMeta.isWritable = true;
                    uniqueMetas.unshift(payerMeta);
                } else uniqueMetas.unshift({
                    pubkey: feePayer,
                    isSigner: true,
                    isWritable: true
                });
                for (const signature of this.signatures) {
                    const uniqueIndex = uniqueMetas.findIndex((x => x.pubkey.equals(signature.publicKey)));
                    if (uniqueIndex > -1) {
                        if (!uniqueMetas[uniqueIndex].isSigner) {
                            uniqueMetas[uniqueIndex].isSigner = true;
                            console.warn("Transaction references a signature that is unnecessary, " + "only the fee payer and instruction signer accounts should sign a transaction. " + "This behavior is deprecated and will throw an error in the next major version release.");
                        }
                    } else throw new Error(`unknown signer: ${signature.publicKey.toString()}`);
                }
                let numRequiredSignatures = 0;
                let numReadonlySignedAccounts = 0;
                let numReadonlyUnsignedAccounts = 0;
                const signedKeys = [];
                const unsignedKeys = [];
                uniqueMetas.forEach((({pubkey, isSigner, isWritable}) => {
                    if (isSigner) {
                        signedKeys.push(pubkey.toString());
                        numRequiredSignatures += 1;
                        if (!isWritable) numReadonlySignedAccounts += 1;
                    } else {
                        unsignedKeys.push(pubkey.toString());
                        if (!isWritable) numReadonlyUnsignedAccounts += 1;
                    }
                }));
                const accountKeys = signedKeys.concat(unsignedKeys);
                const compiledInstructions = instructions.map((instruction => {
                    const {data, programId} = instruction;
                    return {
                        programIdIndex: accountKeys.indexOf(programId.toString()),
                        accounts: instruction.keys.map((meta => accountKeys.indexOf(meta.pubkey.toString()))),
                        data: bs58_default().encode(data)
                    };
                }));
                compiledInstructions.forEach((instruction => {
                    index_browser_esm_assert(instruction.programIdIndex >= 0);
                    instruction.accounts.forEach((keyIndex => index_browser_esm_assert(keyIndex >= 0)));
                }));
                return new Message({
                    header: {
                        numRequiredSignatures,
                        numReadonlySignedAccounts,
                        numReadonlyUnsignedAccounts
                    },
                    accountKeys,
                    recentBlockhash,
                    instructions: compiledInstructions
                });
            }
            _compile() {
                const message = this.compileMessage();
                const signedKeys = message.accountKeys.slice(0, message.header.numRequiredSignatures);
                if (this.signatures.length === signedKeys.length) {
                    const valid = this.signatures.every(((pair, index) => signedKeys[index].equals(pair.publicKey)));
                    if (valid) return message;
                }
                this.signatures = signedKeys.map((publicKey => ({
                    signature: null,
                    publicKey
                })));
                return message;
            }
            serializeMessage() {
                return this._compile().serialize();
            }
            async getEstimatedFee(connection) {
                return (await connection.getFeeForMessage(this.compileMessage())).value;
            }
            setSigners(...signers) {
                if (signers.length === 0) throw new Error("No signers");
                const seen = new Set;
                this.signatures = signers.filter((publicKey => {
                    const key = publicKey.toString();
                    if (seen.has(key)) return false; else {
                        seen.add(key);
                        return true;
                    }
                })).map((publicKey => ({
                    signature: null,
                    publicKey
                })));
            }
            sign(...signers) {
                if (signers.length === 0) throw new Error("No signers");
                const seen = new Set;
                const uniqueSigners = [];
                for (const signer of signers) {
                    const key = signer.publicKey.toString();
                    if (seen.has(key)) continue; else {
                        seen.add(key);
                        uniqueSigners.push(signer);
                    }
                }
                this.signatures = uniqueSigners.map((signer => ({
                    signature: null,
                    publicKey: signer.publicKey
                })));
                const message = this._compile();
                this._partialSign(message, ...uniqueSigners);
            }
            partialSign(...signers) {
                if (signers.length === 0) throw new Error("No signers");
                const seen = new Set;
                const uniqueSigners = [];
                for (const signer of signers) {
                    const key = signer.publicKey.toString();
                    if (seen.has(key)) continue; else {
                        seen.add(key);
                        uniqueSigners.push(signer);
                    }
                }
                const message = this._compile();
                this._partialSign(message, ...uniqueSigners);
            }
            _partialSign(message, ...signers) {
                const signData = message.serialize();
                signers.forEach((signer => {
                    const signature = sign(signData, signer.secretKey);
                    this._addSignature(signer.publicKey, toBuffer(signature));
                }));
            }
            addSignature(pubkey, signature) {
                this._compile();
                this._addSignature(pubkey, signature);
            }
            _addSignature(pubkey, signature) {
                index_browser_esm_assert(signature.length === 64);
                const index = this.signatures.findIndex((sigpair => pubkey.equals(sigpair.publicKey)));
                if (index < 0) throw new Error(`unknown signer: ${pubkey.toString()}`);
                this.signatures[index].signature = node_modules_buffer.hp.from(signature);
            }
            verifySignatures(requireAllSignatures = true) {
                const signatureErrors = this._getMessageSignednessErrors(this.serializeMessage(), requireAllSignatures);
                return !signatureErrors;
            }
            _getMessageSignednessErrors(message, requireAllSignatures) {
                const errors = {};
                for (const {signature, publicKey} of this.signatures) if (signature === null) {
                    if (requireAllSignatures) (errors.missing ||= []).push(publicKey);
                } else if (!verify(signature, message, publicKey.toBytes())) (errors.invalid ||= []).push(publicKey);
                return errors.invalid || errors.missing ? errors : void 0;
            }
            serialize(config) {
                const {requireAllSignatures, verifySignatures} = Object.assign({
                    requireAllSignatures: true,
                    verifySignatures: true
                }, config);
                const signData = this.serializeMessage();
                if (verifySignatures) {
                    const sigErrors = this._getMessageSignednessErrors(signData, requireAllSignatures);
                    if (sigErrors) {
                        let errorMessage = "Signature verification failed.";
                        if (sigErrors.invalid) errorMessage += `\nInvalid signature for public key${sigErrors.invalid.length === 1 ? "" : "(s)"} [\`${sigErrors.invalid.map((p => p.toBase58())).join("`, `")}\`].`;
                        if (sigErrors.missing) errorMessage += `\nMissing signature for public key${sigErrors.missing.length === 1 ? "" : "(s)"} [\`${sigErrors.missing.map((p => p.toBase58())).join("`, `")}\`].`;
                        throw new Error(errorMessage);
                    }
                }
                return this._serialize(signData);
            }
            _serialize(signData) {
                const {signatures} = this;
                const signatureCount = [];
                encodeLength(signatureCount, signatures.length);
                const transactionLength = signatureCount.length + signatures.length * 64 + signData.length;
                const wireTransaction = node_modules_buffer.hp.alloc(transactionLength);
                index_browser_esm_assert(signatures.length < 256);
                node_modules_buffer.hp.from(signatureCount).copy(wireTransaction, 0);
                signatures.forEach((({signature}, index) => {
                    if (signature !== null) {
                        index_browser_esm_assert(signature.length === 64, `signature has invalid length`);
                        node_modules_buffer.hp.from(signature).copy(wireTransaction, signatureCount.length + index * 64);
                    }
                }));
                signData.copy(wireTransaction, signatureCount.length + signatures.length * 64);
                index_browser_esm_assert(wireTransaction.length <= PACKET_DATA_SIZE, `Transaction too large: ${wireTransaction.length} > ${PACKET_DATA_SIZE}`);
                return wireTransaction;
            }
            get keys() {
                index_browser_esm_assert(this.instructions.length === 1);
                return this.instructions[0].keys.map((keyObj => keyObj.pubkey));
            }
            get programId() {
                index_browser_esm_assert(this.instructions.length === 1);
                return this.instructions[0].programId;
            }
            get data() {
                index_browser_esm_assert(this.instructions.length === 1);
                return this.instructions[0].data;
            }
            static from(buffer) {
                let byteArray = [ ...buffer ];
                const signatureCount = decodeLength(byteArray);
                let signatures = [];
                for (let i = 0; i < signatureCount; i++) {
                    const signature = byteArray.slice(0, SIGNATURE_LENGTH_IN_BYTES);
                    byteArray = byteArray.slice(SIGNATURE_LENGTH_IN_BYTES);
                    signatures.push(bs58_default().encode(node_modules_buffer.hp.from(signature)));
                }
                return Transaction.populate(Message.from(byteArray), signatures);
            }
            static populate(message, signatures = []) {
                const transaction = new Transaction;
                transaction.recentBlockhash = message.recentBlockhash;
                if (message.header.numRequiredSignatures > 0) transaction.feePayer = message.accountKeys[0];
                signatures.forEach(((signature, index) => {
                    const sigPubkeyPair = {
                        signature: signature == bs58_default().encode(DEFAULT_SIGNATURE) ? null : bs58_default().decode(signature),
                        publicKey: message.accountKeys[index]
                    };
                    transaction.signatures.push(sigPubkeyPair);
                }));
                message.instructions.forEach((instruction => {
                    const keys = instruction.accounts.map((account => {
                        const pubkey = message.accountKeys[account];
                        return {
                            pubkey,
                            isSigner: transaction.signatures.some((keyObj => keyObj.publicKey.toString() === pubkey.toString())) || message.isAccountSigner(account),
                            isWritable: message.isAccountWritable(account)
                        };
                    }));
                    transaction.instructions.push(new TransactionInstruction({
                        keys,
                        programId: message.accountKeys[instruction.programIdIndex],
                        data: bs58_default().decode(instruction.data)
                    }));
                }));
                transaction._message = message;
                transaction._json = transaction.toJSON();
                return transaction;
            }
        }
        const NUM_TICKS_PER_SECOND = 160;
        const DEFAULT_TICKS_PER_SLOT = 64;
        const NUM_SLOTS_PER_SECOND = NUM_TICKS_PER_SECOND / DEFAULT_TICKS_PER_SLOT;
        const MS_PER_SLOT = 1e3 / NUM_SLOTS_PER_SECOND;
        const SYSVAR_CLOCK_PUBKEY = new PublicKey("SysvarC1ock11111111111111111111111111111111");
        new PublicKey("SysvarEpochSchedu1e111111111111111111111111");
        new PublicKey("Sysvar1nstructions1111111111111111111111111");
        const SYSVAR_RECENT_BLOCKHASHES_PUBKEY = new PublicKey("SysvarRecentB1ockHashes11111111111111111111");
        const SYSVAR_RENT_PUBKEY = new PublicKey("SysvarRent111111111111111111111111111111111");
        new PublicKey("SysvarRewards111111111111111111111111111111");
        new PublicKey("SysvarS1otHashes111111111111111111111111111");
        new PublicKey("SysvarS1otHistory11111111111111111111111111");
        const SYSVAR_STAKE_HISTORY_PUBKEY = new PublicKey("SysvarStakeHistory1111111111111111111111111");
        async function sendAndConfirmTransaction(connection, transaction, signers, options) {
            const sendOptions = options && {
                skipPreflight: options.skipPreflight,
                preflightCommitment: options.preflightCommitment || options.commitment,
                maxRetries: options.maxRetries,
                minContextSlot: options.minContextSlot
            };
            const signature = await connection.sendTransaction(transaction, signers, sendOptions);
            let status;
            if (transaction.recentBlockhash != null && transaction.lastValidBlockHeight != null) status = (await connection.confirmTransaction({
                abortSignal: options?.abortSignal,
                signature,
                blockhash: transaction.recentBlockhash,
                lastValidBlockHeight: transaction.lastValidBlockHeight
            }, options && options.commitment)).value; else if (transaction.minNonceContextSlot != null && transaction.nonceInfo != null) {
                const {nonceInstruction} = transaction.nonceInfo;
                const nonceAccountPubkey = nonceInstruction.keys[0].pubkey;
                status = (await connection.confirmTransaction({
                    abortSignal: options?.abortSignal,
                    minContextSlot: transaction.minNonceContextSlot,
                    nonceAccountPubkey,
                    nonceValue: transaction.nonceInfo.nonce,
                    signature
                }, options && options.commitment)).value;
            } else {
                if (options?.abortSignal != null) console.warn("sendAndConfirmTransaction(): A transaction with a deprecated confirmation strategy was " + "supplied along with an `abortSignal`. Only transactions having `lastValidBlockHeight` " + "or a combination of `nonceInfo` and `minNonceContextSlot` are abortable.");
                status = (await connection.confirmTransaction(signature, options && options.commitment)).value;
            }
            if (status.err) throw new Error(`Transaction ${signature} failed (${JSON.stringify(status)})`);
            return signature;
        }
        function sleep(ms) {
            return new Promise((resolve => setTimeout(resolve, ms)));
        }
        function encodeData(type, fields) {
            const allocLength = type.layout.span >= 0 ? type.layout.span : getAlloc(type, fields);
            const data = node_modules_buffer.hp.alloc(allocLength);
            const layoutFields = Object.assign({
                instruction: type.index
            }, fields);
            type.layout.encode(layoutFields, data);
            return data;
        }
        const FeeCalculatorLayout = Layout.I0("lamportsPerSignature");
        const NonceAccountLayout = Layout.w3([ Layout.DH("version"), Layout.DH("state"), publicKey("authorizedPubkey"), publicKey("nonce"), Layout.w3([ FeeCalculatorLayout ], "feeCalculator") ]);
        const NONCE_ACCOUNT_LENGTH = NonceAccountLayout.span;
        class NonceAccount {
            constructor(args) {
                this.authorizedPubkey = void 0;
                this.nonce = void 0;
                this.feeCalculator = void 0;
                this.authorizedPubkey = args.authorizedPubkey;
                this.nonce = args.nonce;
                this.feeCalculator = args.feeCalculator;
            }
            static fromAccountData(buffer) {
                const nonceAccount = NonceAccountLayout.decode(toBuffer(buffer), 0);
                return new NonceAccount({
                    authorizedPubkey: new PublicKey(nonceAccount.authorizedPubkey),
                    nonce: new PublicKey(nonceAccount.nonce).toString(),
                    feeCalculator: nonceAccount.feeCalculator
                });
            }
        }
        const encodeDecode = layout => {
            const decode = layout.decode.bind(layout);
            const encode = layout.encode.bind(layout);
            return {
                decode,
                encode
            };
        };
        const bigInt = length => property => {
            const layout = (0, Layout.av)(length, property);
            const {encode, decode} = encodeDecode(layout);
            const bigIntLayout = layout;
            bigIntLayout.decode = (buffer, offset) => {
                const src = decode(buffer, offset);
                return (0, browser.k5)(node_modules_buffer.hp.from(src));
            };
            bigIntLayout.encode = (bigInt, buffer, offset) => {
                const src = (0, browser.Bq)(bigInt, length);
                return encode(src, buffer, offset);
            };
            return bigIntLayout;
        };
        const index_browser_esm_u64 = bigInt(8);
        const SYSTEM_INSTRUCTION_LAYOUTS = Object.freeze({
            Create: {
                index: 0,
                layout: Layout.w3([ Layout.DH("instruction"), Layout.Wg("lamports"), Layout.Wg("space"), publicKey("programId") ])
            },
            Assign: {
                index: 1,
                layout: Layout.w3([ Layout.DH("instruction"), publicKey("programId") ])
            },
            Transfer: {
                index: 2,
                layout: Layout.w3([ Layout.DH("instruction"), index_browser_esm_u64("lamports") ])
            },
            CreateWithSeed: {
                index: 3,
                layout: Layout.w3([ Layout.DH("instruction"), publicKey("base"), rustString("seed"), Layout.Wg("lamports"), Layout.Wg("space"), publicKey("programId") ])
            },
            AdvanceNonceAccount: {
                index: 4,
                layout: Layout.w3([ Layout.DH("instruction") ])
            },
            WithdrawNonceAccount: {
                index: 5,
                layout: Layout.w3([ Layout.DH("instruction"), Layout.Wg("lamports") ])
            },
            InitializeNonceAccount: {
                index: 6,
                layout: Layout.w3([ Layout.DH("instruction"), publicKey("authorized") ])
            },
            AuthorizeNonceAccount: {
                index: 7,
                layout: Layout.w3([ Layout.DH("instruction"), publicKey("authorized") ])
            },
            Allocate: {
                index: 8,
                layout: Layout.w3([ Layout.DH("instruction"), Layout.Wg("space") ])
            },
            AllocateWithSeed: {
                index: 9,
                layout: Layout.w3([ Layout.DH("instruction"), publicKey("base"), rustString("seed"), Layout.Wg("space"), publicKey("programId") ])
            },
            AssignWithSeed: {
                index: 10,
                layout: Layout.w3([ Layout.DH("instruction"), publicKey("base"), rustString("seed"), publicKey("programId") ])
            },
            TransferWithSeed: {
                index: 11,
                layout: Layout.w3([ Layout.DH("instruction"), index_browser_esm_u64("lamports"), rustString("seed"), publicKey("programId") ])
            },
            UpgradeNonceAccount: {
                index: 12,
                layout: Layout.w3([ Layout.DH("instruction") ])
            }
        });
        class SystemProgram {
            constructor() {}
            static createAccount(params) {
                const type = SYSTEM_INSTRUCTION_LAYOUTS.Create;
                const data = encodeData(type, {
                    lamports: params.lamports,
                    space: params.space,
                    programId: toBuffer(params.programId.toBuffer())
                });
                return new TransactionInstruction({
                    keys: [ {
                        pubkey: params.fromPubkey,
                        isSigner: true,
                        isWritable: true
                    }, {
                        pubkey: params.newAccountPubkey,
                        isSigner: true,
                        isWritable: true
                    } ],
                    programId: this.programId,
                    data
                });
            }
            static transfer(params) {
                let data;
                let keys;
                if ("basePubkey" in params) {
                    const type = SYSTEM_INSTRUCTION_LAYOUTS.TransferWithSeed;
                    data = encodeData(type, {
                        lamports: BigInt(params.lamports),
                        seed: params.seed,
                        programId: toBuffer(params.programId.toBuffer())
                    });
                    keys = [ {
                        pubkey: params.fromPubkey,
                        isSigner: false,
                        isWritable: true
                    }, {
                        pubkey: params.basePubkey,
                        isSigner: true,
                        isWritable: false
                    }, {
                        pubkey: params.toPubkey,
                        isSigner: false,
                        isWritable: true
                    } ];
                } else {
                    const type = SYSTEM_INSTRUCTION_LAYOUTS.Transfer;
                    data = encodeData(type, {
                        lamports: BigInt(params.lamports)
                    });
                    keys = [ {
                        pubkey: params.fromPubkey,
                        isSigner: true,
                        isWritable: true
                    }, {
                        pubkey: params.toPubkey,
                        isSigner: false,
                        isWritable: true
                    } ];
                }
                return new TransactionInstruction({
                    keys,
                    programId: this.programId,
                    data
                });
            }
            static assign(params) {
                let data;
                let keys;
                if ("basePubkey" in params) {
                    const type = SYSTEM_INSTRUCTION_LAYOUTS.AssignWithSeed;
                    data = encodeData(type, {
                        base: toBuffer(params.basePubkey.toBuffer()),
                        seed: params.seed,
                        programId: toBuffer(params.programId.toBuffer())
                    });
                    keys = [ {
                        pubkey: params.accountPubkey,
                        isSigner: false,
                        isWritable: true
                    }, {
                        pubkey: params.basePubkey,
                        isSigner: true,
                        isWritable: false
                    } ];
                } else {
                    const type = SYSTEM_INSTRUCTION_LAYOUTS.Assign;
                    data = encodeData(type, {
                        programId: toBuffer(params.programId.toBuffer())
                    });
                    keys = [ {
                        pubkey: params.accountPubkey,
                        isSigner: true,
                        isWritable: true
                    } ];
                }
                return new TransactionInstruction({
                    keys,
                    programId: this.programId,
                    data
                });
            }
            static createAccountWithSeed(params) {
                const type = SYSTEM_INSTRUCTION_LAYOUTS.CreateWithSeed;
                const data = encodeData(type, {
                    base: toBuffer(params.basePubkey.toBuffer()),
                    seed: params.seed,
                    lamports: params.lamports,
                    space: params.space,
                    programId: toBuffer(params.programId.toBuffer())
                });
                let keys = [ {
                    pubkey: params.fromPubkey,
                    isSigner: true,
                    isWritable: true
                }, {
                    pubkey: params.newAccountPubkey,
                    isSigner: false,
                    isWritable: true
                } ];
                if (params.basePubkey != params.fromPubkey) keys.push({
                    pubkey: params.basePubkey,
                    isSigner: true,
                    isWritable: false
                });
                return new TransactionInstruction({
                    keys,
                    programId: this.programId,
                    data
                });
            }
            static createNonceAccount(params) {
                const transaction = new Transaction;
                if ("basePubkey" in params && "seed" in params) transaction.add(SystemProgram.createAccountWithSeed({
                    fromPubkey: params.fromPubkey,
                    newAccountPubkey: params.noncePubkey,
                    basePubkey: params.basePubkey,
                    seed: params.seed,
                    lamports: params.lamports,
                    space: NONCE_ACCOUNT_LENGTH,
                    programId: this.programId
                })); else transaction.add(SystemProgram.createAccount({
                    fromPubkey: params.fromPubkey,
                    newAccountPubkey: params.noncePubkey,
                    lamports: params.lamports,
                    space: NONCE_ACCOUNT_LENGTH,
                    programId: this.programId
                }));
                const initParams = {
                    noncePubkey: params.noncePubkey,
                    authorizedPubkey: params.authorizedPubkey
                };
                transaction.add(this.nonceInitialize(initParams));
                return transaction;
            }
            static nonceInitialize(params) {
                const type = SYSTEM_INSTRUCTION_LAYOUTS.InitializeNonceAccount;
                const data = encodeData(type, {
                    authorized: toBuffer(params.authorizedPubkey.toBuffer())
                });
                const instructionData = {
                    keys: [ {
                        pubkey: params.noncePubkey,
                        isSigner: false,
                        isWritable: true
                    }, {
                        pubkey: SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
                        isSigner: false,
                        isWritable: false
                    }, {
                        pubkey: SYSVAR_RENT_PUBKEY,
                        isSigner: false,
                        isWritable: false
                    } ],
                    programId: this.programId,
                    data
                };
                return new TransactionInstruction(instructionData);
            }
            static nonceAdvance(params) {
                const type = SYSTEM_INSTRUCTION_LAYOUTS.AdvanceNonceAccount;
                const data = encodeData(type);
                const instructionData = {
                    keys: [ {
                        pubkey: params.noncePubkey,
                        isSigner: false,
                        isWritable: true
                    }, {
                        pubkey: SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
                        isSigner: false,
                        isWritable: false
                    }, {
                        pubkey: params.authorizedPubkey,
                        isSigner: true,
                        isWritable: false
                    } ],
                    programId: this.programId,
                    data
                };
                return new TransactionInstruction(instructionData);
            }
            static nonceWithdraw(params) {
                const type = SYSTEM_INSTRUCTION_LAYOUTS.WithdrawNonceAccount;
                const data = encodeData(type, {
                    lamports: params.lamports
                });
                return new TransactionInstruction({
                    keys: [ {
                        pubkey: params.noncePubkey,
                        isSigner: false,
                        isWritable: true
                    }, {
                        pubkey: params.toPubkey,
                        isSigner: false,
                        isWritable: true
                    }, {
                        pubkey: SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
                        isSigner: false,
                        isWritable: false
                    }, {
                        pubkey: SYSVAR_RENT_PUBKEY,
                        isSigner: false,
                        isWritable: false
                    }, {
                        pubkey: params.authorizedPubkey,
                        isSigner: true,
                        isWritable: false
                    } ],
                    programId: this.programId,
                    data
                });
            }
            static nonceAuthorize(params) {
                const type = SYSTEM_INSTRUCTION_LAYOUTS.AuthorizeNonceAccount;
                const data = encodeData(type, {
                    authorized: toBuffer(params.newAuthorizedPubkey.toBuffer())
                });
                return new TransactionInstruction({
                    keys: [ {
                        pubkey: params.noncePubkey,
                        isSigner: false,
                        isWritable: true
                    }, {
                        pubkey: params.authorizedPubkey,
                        isSigner: true,
                        isWritable: false
                    } ],
                    programId: this.programId,
                    data
                });
            }
            static allocate(params) {
                let data;
                let keys;
                if ("basePubkey" in params) {
                    const type = SYSTEM_INSTRUCTION_LAYOUTS.AllocateWithSeed;
                    data = encodeData(type, {
                        base: toBuffer(params.basePubkey.toBuffer()),
                        seed: params.seed,
                        space: params.space,
                        programId: toBuffer(params.programId.toBuffer())
                    });
                    keys = [ {
                        pubkey: params.accountPubkey,
                        isSigner: false,
                        isWritable: true
                    }, {
                        pubkey: params.basePubkey,
                        isSigner: true,
                        isWritable: false
                    } ];
                } else {
                    const type = SYSTEM_INSTRUCTION_LAYOUTS.Allocate;
                    data = encodeData(type, {
                        space: params.space
                    });
                    keys = [ {
                        pubkey: params.accountPubkey,
                        isSigner: true,
                        isWritable: true
                    } ];
                }
                return new TransactionInstruction({
                    keys,
                    programId: this.programId,
                    data
                });
            }
        }
        SystemProgram.programId = new PublicKey("11111111111111111111111111111111");
        const CHUNK_SIZE = PACKET_DATA_SIZE - 300;
        class Loader {
            constructor() {}
            static getMinNumSignatures(dataLength) {
                return 2 * (Math.ceil(dataLength / Loader.chunkSize) + 1 + 1);
            }
            static async load(connection, payer, program, programId, data) {
                {
                    const balanceNeeded = await connection.getMinimumBalanceForRentExemption(data.length);
                    const programInfo = await connection.getAccountInfo(program.publicKey, "confirmed");
                    let transaction = null;
                    if (programInfo !== null) {
                        if (programInfo.executable) {
                            console.error("Program load failed, account is already executable");
                            return false;
                        }
                        if (programInfo.data.length !== data.length) {
                            transaction = transaction || new Transaction;
                            transaction.add(SystemProgram.allocate({
                                accountPubkey: program.publicKey,
                                space: data.length
                            }));
                        }
                        if (!programInfo.owner.equals(programId)) {
                            transaction = transaction || new Transaction;
                            transaction.add(SystemProgram.assign({
                                accountPubkey: program.publicKey,
                                programId
                            }));
                        }
                        if (programInfo.lamports < balanceNeeded) {
                            transaction = transaction || new Transaction;
                            transaction.add(SystemProgram.transfer({
                                fromPubkey: payer.publicKey,
                                toPubkey: program.publicKey,
                                lamports: balanceNeeded - programInfo.lamports
                            }));
                        }
                    } else transaction = (new Transaction).add(SystemProgram.createAccount({
                        fromPubkey: payer.publicKey,
                        newAccountPubkey: program.publicKey,
                        lamports: balanceNeeded > 0 ? balanceNeeded : 1,
                        space: data.length,
                        programId
                    }));
                    if (transaction !== null) await sendAndConfirmTransaction(connection, transaction, [ payer, program ], {
                        commitment: "confirmed"
                    });
                }
                const dataLayout = Layout.w3([ Layout.DH("instruction"), Layout.DH("offset"), Layout.DH("bytesLength"), Layout.DH("bytesLengthPadding"), Layout.O6(Layout.u8("byte"), Layout.cY(Layout.DH(), -8), "bytes") ]);
                const chunkSize = Loader.chunkSize;
                let offset = 0;
                let array = data;
                let transactions = [];
                while (array.length > 0) {
                    const bytes = array.slice(0, chunkSize);
                    const data = node_modules_buffer.hp.alloc(chunkSize + 16);
                    dataLayout.encode({
                        instruction: 0,
                        offset,
                        bytes,
                        bytesLength: 0,
                        bytesLengthPadding: 0
                    }, data);
                    const transaction = (new Transaction).add({
                        keys: [ {
                            pubkey: program.publicKey,
                            isSigner: true,
                            isWritable: true
                        } ],
                        programId,
                        data
                    });
                    transactions.push(sendAndConfirmTransaction(connection, transaction, [ payer, program ], {
                        commitment: "confirmed"
                    }));
                    if (connection._rpcEndpoint.includes("solana.com")) {
                        const REQUESTS_PER_SECOND = 4;
                        await sleep(1e3 / REQUESTS_PER_SECOND);
                    }
                    offset += chunkSize;
                    array = array.slice(chunkSize);
                }
                await Promise.all(transactions);
                {
                    const dataLayout = Layout.w3([ Layout.DH("instruction") ]);
                    const data = node_modules_buffer.hp.alloc(dataLayout.span);
                    dataLayout.encode({
                        instruction: 1
                    }, data);
                    const transaction = (new Transaction).add({
                        keys: [ {
                            pubkey: program.publicKey,
                            isSigner: true,
                            isWritable: true
                        }, {
                            pubkey: SYSVAR_RENT_PUBKEY,
                            isSigner: false,
                            isWritable: false
                        } ],
                        programId,
                        data
                    });
                    const deployCommitment = "processed";
                    const finalizeSignature = await connection.sendTransaction(transaction, [ payer, program ], {
                        preflightCommitment: deployCommitment
                    });
                    const {context, value} = await connection.confirmTransaction({
                        signature: finalizeSignature,
                        lastValidBlockHeight: transaction.lastValidBlockHeight,
                        blockhash: transaction.recentBlockhash
                    }, deployCommitment);
                    if (value.err) throw new Error(`Transaction ${finalizeSignature} failed (${JSON.stringify(value)})`);
                    while (true) {
                        try {
                            const currentSlot = await connection.getSlot({
                                commitment: deployCommitment
                            });
                            if (currentSlot > context.slot) break;
                        } catch {}
                        await new Promise((resolve => setTimeout(resolve, Math.round(MS_PER_SLOT / 2))));
                    }
                }
                return true;
            }
        }
        Loader.chunkSize = CHUNK_SIZE;
        new PublicKey("BPFLoader2111111111111111111111111111111111");
        function getDefaultExportFromCjs(x) {
            return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
        }
        var objToString = Object.prototype.toString;
        var objKeys = Object.keys || function(obj) {
            var keys = [];
            for (var name in obj) keys.push(name);
            return keys;
        };
        function stringify(val, isArrayProp) {
            var i, max, str, keys, key, propVal, toStr;
            if (val === true) return "true";
            if (val === false) return "false";
            switch (typeof val) {
              case "object":
                if (val === null) return null; else if (val.toJSON && typeof val.toJSON === "function") return stringify(val.toJSON(), isArrayProp); else {
                    toStr = objToString.call(val);
                    if (toStr === "[object Array]") {
                        str = "[";
                        max = val.length - 1;
                        for (i = 0; i < max; i++) str += stringify(val[i], true) + ",";
                        if (max > -1) str += stringify(val[i], true);
                        return str + "]";
                    } else if (toStr === "[object Object]") {
                        keys = objKeys(val).sort();
                        max = keys.length;
                        str = "";
                        i = 0;
                        while (i < max) {
                            key = keys[i];
                            propVal = stringify(val[key], false);
                            if (propVal !== void 0) {
                                if (str) str += ",";
                                str += JSON.stringify(key) + ":" + propVal;
                            }
                            i++;
                        }
                        return "{" + str + "}";
                    } else return JSON.stringify(val);
                }

              case "function":
              case "undefined":
                return isArrayProp ? null : void 0;

              case "string":
                return JSON.stringify(val);

              default:
                return isFinite(val) ? val : null;
            }
        }
        var fastStableStringify = function(val) {
            var returnVal = stringify(val, false);
            if (returnVal !== void 0) return "" + returnVal;
        };
        var fastStableStringify$1 = getDefaultExportFromCjs(fastStableStringify);
        const MINIMUM_SLOT_PER_EPOCH = 32;
        function trailingZeros(n) {
            let trailingZeros = 0;
            while (n > 1) {
                n /= 2;
                trailingZeros++;
            }
            return trailingZeros;
        }
        function nextPowerOfTwo(n) {
            if (n === 0) return 1;
            n--;
            n |= n >> 1;
            n |= n >> 2;
            n |= n >> 4;
            n |= n >> 8;
            n |= n >> 16;
            n |= n >> 32;
            return n + 1;
        }
        class EpochSchedule {
            constructor(slotsPerEpoch, leaderScheduleSlotOffset, warmup, firstNormalEpoch, firstNormalSlot) {
                this.slotsPerEpoch = void 0;
                this.leaderScheduleSlotOffset = void 0;
                this.warmup = void 0;
                this.firstNormalEpoch = void 0;
                this.firstNormalSlot = void 0;
                this.slotsPerEpoch = slotsPerEpoch;
                this.leaderScheduleSlotOffset = leaderScheduleSlotOffset;
                this.warmup = warmup;
                this.firstNormalEpoch = firstNormalEpoch;
                this.firstNormalSlot = firstNormalSlot;
            }
            getEpoch(slot) {
                return this.getEpochAndSlotIndex(slot)[0];
            }
            getEpochAndSlotIndex(slot) {
                if (slot < this.firstNormalSlot) {
                    const epoch = trailingZeros(nextPowerOfTwo(slot + MINIMUM_SLOT_PER_EPOCH + 1)) - trailingZeros(MINIMUM_SLOT_PER_EPOCH) - 1;
                    const epochLen = this.getSlotsInEpoch(epoch);
                    const slotIndex = slot - (epochLen - MINIMUM_SLOT_PER_EPOCH);
                    return [ epoch, slotIndex ];
                } else {
                    const normalSlotIndex = slot - this.firstNormalSlot;
                    const normalEpochIndex = Math.floor(normalSlotIndex / this.slotsPerEpoch);
                    const epoch = this.firstNormalEpoch + normalEpochIndex;
                    const slotIndex = normalSlotIndex % this.slotsPerEpoch;
                    return [ epoch, slotIndex ];
                }
            }
            getFirstSlotInEpoch(epoch) {
                if (epoch <= this.firstNormalEpoch) return (Math.pow(2, epoch) - 1) * MINIMUM_SLOT_PER_EPOCH; else return (epoch - this.firstNormalEpoch) * this.slotsPerEpoch + this.firstNormalSlot;
            }
            getLastSlotInEpoch(epoch) {
                return this.getFirstSlotInEpoch(epoch) + this.getSlotsInEpoch(epoch) - 1;
            }
            getSlotsInEpoch(epoch) {
                if (epoch < this.firstNormalEpoch) return Math.pow(2, epoch + trailingZeros(MINIMUM_SLOT_PER_EPOCH)); else return this.slotsPerEpoch;
            }
        }
        class SendTransactionError extends Error {
            constructor(message, logs) {
                super(message);
                this.logs = void 0;
                this.logs = logs;
            }
        }
        class SolanaJSONRPCError extends Error {
            constructor({code, message, data}, customMessage) {
                super(customMessage != null ? `${customMessage}: ${message}` : message);
                this.code = void 0;
                this.data = void 0;
                this.code = code;
                this.data = data;
                this.name = "SolanaJSONRPCError";
            }
        }
        var fetchImpl = globalThis.fetch;
        class RpcWebSocketClient extends client.A {
            constructor(address, options, generate_request_id) {
                const webSocketFactory = url => {
                    const rpc = (0, websocket_browser.A)(url, {
                        autoconnect: true,
                        max_reconnects: 5,
                        reconnect: true,
                        reconnect_interval: 1e3,
                        ...options
                    });
                    if ("socket" in rpc) this.underlyingSocket = rpc.socket; else this.underlyingSocket = rpc;
                    return rpc;
                };
                super(webSocketFactory, address, options, generate_request_id);
                this.underlyingSocket = void 0;
            }
            call(...args) {
                const readyState = this.underlyingSocket?.readyState;
                if (readyState === 1) return super.call(...args);
                return Promise.reject(new Error("Tried to call a JSON-RPC method `" + args[0] + "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " + readyState + ")"));
            }
            notify(...args) {
                const readyState = this.underlyingSocket?.readyState;
                if (readyState === 1) return super.notify(...args);
                return Promise.reject(new Error("Tried to send a JSON-RPC notification `" + args[0] + "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " + readyState + ")"));
            }
        }
        function decodeData(type, data) {
            let decoded;
            try {
                decoded = type.layout.decode(data);
            } catch (err) {
                throw new Error("invalid instruction; " + err);
            }
            if (decoded.typeIndex !== type.index) throw new Error(`invalid account data; account type mismatch ${decoded.typeIndex} != ${type.index}`);
            return decoded;
        }
        const LOOKUP_TABLE_META_SIZE = 56;
        class AddressLookupTableAccount {
            constructor(args) {
                this.key = void 0;
                this.state = void 0;
                this.key = args.key;
                this.state = args.state;
            }
            isActive() {
                const U64_MAX = BigInt("0xffffffffffffffff");
                return this.state.deactivationSlot === U64_MAX;
            }
            static deserialize(accountData) {
                const meta = decodeData(LookupTableMetaLayout, accountData);
                const serializedAddressesLen = accountData.length - LOOKUP_TABLE_META_SIZE;
                index_browser_esm_assert(serializedAddressesLen >= 0, "lookup table is invalid");
                index_browser_esm_assert(serializedAddressesLen % 32 === 0, "lookup table is invalid");
                const numSerializedAddresses = serializedAddressesLen / 32;
                const {addresses} = Layout.w3([ Layout.O6(publicKey(), numSerializedAddresses, "addresses") ]).decode(accountData.slice(LOOKUP_TABLE_META_SIZE));
                return {
                    deactivationSlot: meta.deactivationSlot,
                    lastExtendedSlot: meta.lastExtendedSlot,
                    lastExtendedSlotStartIndex: meta.lastExtendedStartIndex,
                    authority: meta.authority.length !== 0 ? new PublicKey(meta.authority[0]) : void 0,
                    addresses: addresses.map((address => new PublicKey(address)))
                };
            }
        }
        const LookupTableMetaLayout = {
            index: 1,
            layout: Layout.w3([ Layout.DH("typeIndex"), index_browser_esm_u64("deactivationSlot"), Layout.I0("lastExtendedSlot"), Layout.u8("lastExtendedStartIndex"), Layout.u8(), Layout.O6(publicKey(), Layout.cY(Layout.u8(), -1), "authority") ])
        };
        const URL_RE = /^[^:]+:\/\/([^:[]+|\[[^\]]+\])(:\d+)?(.*)/i;
        function makeWebsocketUrl(endpoint) {
            const matches = endpoint.match(URL_RE);
            if (matches == null) throw TypeError(`Failed to validate endpoint URL \`${endpoint}\``);
            const [_, hostish, portWithColon, rest] = matches;
            const protocol = endpoint.startsWith("https:") ? "wss:" : "ws:";
            const startPort = portWithColon == null ? null : parseInt(portWithColon.slice(1), 10);
            const websocketPort = startPort == null ? "" : `:${startPort + 1}`;
            return `${protocol}//${hostish}${websocketPort}${rest}`;
        }
        const PublicKeyFromString = coerce(instance(PublicKey), string(), (value => new PublicKey(value)));
        const RawAccountDataResult = tuple([ string(), literal("base64") ]);
        const BufferFromRawAccountData = coerce(instance(node_modules_buffer.hp), RawAccountDataResult, (value => node_modules_buffer.hp.from(value[0], "base64")));
        const BLOCKHASH_CACHE_TIMEOUT_MS = 30 * 1e3;
        function assertEndpointUrl(putativeUrl) {
            if (/^https?:/.test(putativeUrl) === false) throw new TypeError("Endpoint URL must start with `http:` or `https:`.");
            return putativeUrl;
        }
        function extractCommitmentFromConfig(commitmentOrConfig) {
            let commitment;
            let config;
            if (typeof commitmentOrConfig === "string") commitment = commitmentOrConfig; else if (commitmentOrConfig) {
                const {commitment: specifiedCommitment, ...specifiedConfig} = commitmentOrConfig;
                commitment = specifiedCommitment;
                config = specifiedConfig;
            }
            return {
                commitment,
                config
            };
        }
        function createRpcResult(result) {
            return union([ type({
                jsonrpc: literal("2.0"),
                id: string(),
                result
            }), type({
                jsonrpc: literal("2.0"),
                id: string(),
                error: type({
                    code: unknown(),
                    message: string(),
                    data: optional(any())
                })
            }) ]);
        }
        const UnknownRpcResult = createRpcResult(unknown());
        function jsonRpcResult(schema) {
            return coerce(createRpcResult(schema), UnknownRpcResult, (value => {
                if ("error" in value) return value; else return {
                    ...value,
                    result: create(value.result, schema)
                };
            }));
        }
        function jsonRpcResultAndContext(value) {
            return jsonRpcResult(type({
                context: type({
                    slot: index_es_number()
                }),
                value
            }));
        }
        function notificationResultAndContext(value) {
            return type({
                context: type({
                    slot: index_es_number()
                }),
                value
            });
        }
        function versionedMessageFromResponse(version, response) {
            if (version === 0) return new MessageV0({
                header: response.header,
                staticAccountKeys: response.accountKeys.map((accountKey => new PublicKey(accountKey))),
                recentBlockhash: response.recentBlockhash,
                compiledInstructions: response.instructions.map((ix => ({
                    programIdIndex: ix.programIdIndex,
                    accountKeyIndexes: ix.accounts,
                    data: bs58_default().decode(ix.data)
                }))),
                addressTableLookups: response.addressTableLookups
            }); else return new Message(response);
        }
        const GetInflationGovernorResult = type({
            foundation: index_es_number(),
            foundationTerm: index_es_number(),
            initial: index_es_number(),
            taper: index_es_number(),
            terminal: index_es_number()
        });
        const GetInflationRewardResult = jsonRpcResult(array(nullable(type({
            epoch: index_es_number(),
            effectiveSlot: index_es_number(),
            amount: index_es_number(),
            postBalance: index_es_number(),
            commission: optional(nullable(index_es_number()))
        }))));
        const GetRecentPrioritizationFeesResult = array(type({
            slot: index_es_number(),
            prioritizationFee: index_es_number()
        }));
        const GetInflationRateResult = type({
            total: index_es_number(),
            validator: index_es_number(),
            foundation: index_es_number(),
            epoch: index_es_number()
        });
        const GetEpochInfoResult = type({
            epoch: index_es_number(),
            slotIndex: index_es_number(),
            slotsInEpoch: index_es_number(),
            absoluteSlot: index_es_number(),
            blockHeight: optional(index_es_number()),
            transactionCount: optional(index_es_number())
        });
        const GetEpochScheduleResult = type({
            slotsPerEpoch: index_es_number(),
            leaderScheduleSlotOffset: index_es_number(),
            warmup: index_es_boolean(),
            firstNormalEpoch: index_es_number(),
            firstNormalSlot: index_es_number()
        });
        const GetLeaderScheduleResult = record(string(), array(index_es_number()));
        const TransactionErrorResult = nullable(union([ type({}), string() ]));
        const SignatureStatusResult = type({
            err: TransactionErrorResult
        });
        const SignatureReceivedResult = literal("receivedSignature");
        const VersionResult = type({
            "solana-core": string(),
            "feature-set": optional(index_es_number())
        });
        const SimulatedTransactionResponseStruct = jsonRpcResultAndContext(type({
            err: nullable(union([ type({}), string() ])),
            logs: nullable(array(string())),
            accounts: optional(nullable(array(nullable(type({
                executable: index_es_boolean(),
                owner: string(),
                lamports: index_es_number(),
                data: array(string()),
                rentEpoch: optional(index_es_number())
            }))))),
            unitsConsumed: optional(index_es_number()),
            returnData: optional(nullable(type({
                programId: string(),
                data: tuple([ string(), literal("base64") ])
            })))
        }));
        const BlockProductionResponseStruct = jsonRpcResultAndContext(type({
            byIdentity: record(string(), array(index_es_number())),
            range: type({
                firstSlot: index_es_number(),
                lastSlot: index_es_number()
            })
        }));
        function createRpcClient(url, httpHeaders, customFetch, fetchMiddleware, disableRetryOnRateLimit, httpAgent) {
            const fetch = customFetch ? customFetch : fetchImpl;
            let agent;
            if (httpAgent != null) console.warn("You have supplied an `httpAgent` when creating a `Connection` in a browser environment." + "It has been ignored; `httpAgent` is only used in Node environments.");
            let fetchWithMiddleware;
            if (fetchMiddleware) fetchWithMiddleware = async (info, init) => {
                const modifiedFetchArgs = await new Promise(((resolve, reject) => {
                    try {
                        fetchMiddleware(info, init, ((modifiedInfo, modifiedInit) => resolve([ modifiedInfo, modifiedInit ])));
                    } catch (error) {
                        reject(error);
                    }
                }));
                return await fetch(...modifiedFetchArgs);
            };
            const clientBrowser = new (browser_default())((async (request, callback) => {
                const options = {
                    method: "POST",
                    body: request,
                    agent,
                    headers: Object.assign({
                        "Content-Type": "application/json"
                    }, httpHeaders || {}, COMMON_HTTP_HEADERS)
                };
                try {
                    let too_many_requests_retries = 5;
                    let res;
                    let waitTime = 500;
                    for (;;) {
                        if (fetchWithMiddleware) res = await fetchWithMiddleware(url, options); else res = await fetch(url, options);
                        if (res.status !== 429) break;
                        if (disableRetryOnRateLimit === true) break;
                        too_many_requests_retries -= 1;
                        if (too_many_requests_retries === 0) break;
                        console.error(`Server responded with ${res.status} ${res.statusText}.  Retrying after ${waitTime}ms delay...`);
                        await sleep(waitTime);
                        waitTime *= 2;
                    }
                    const text = await res.text();
                    if (res.ok) callback(null, text); else callback(new Error(`${res.status} ${res.statusText}: ${text}`));
                } catch (err) {
                    if (err instanceof Error) callback(err);
                }
            }), {});
            return clientBrowser;
        }
        function createRpcRequest(client) {
            return (method, args) => new Promise(((resolve, reject) => {
                client.request(method, args, ((err, response) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(response);
                }));
            }));
        }
        function createRpcBatchRequest(client) {
            return requests => new Promise(((resolve, reject) => {
                if (requests.length === 0) resolve([]);
                const batch = requests.map((params => client.request(params.methodName, params.args)));
                client.request(batch, ((err, response) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(response);
                }));
            }));
        }
        const GetInflationGovernorRpcResult = jsonRpcResult(GetInflationGovernorResult);
        const GetInflationRateRpcResult = jsonRpcResult(GetInflationRateResult);
        const GetRecentPrioritizationFeesRpcResult = jsonRpcResult(GetRecentPrioritizationFeesResult);
        const GetEpochInfoRpcResult = jsonRpcResult(GetEpochInfoResult);
        const GetEpochScheduleRpcResult = jsonRpcResult(GetEpochScheduleResult);
        const GetLeaderScheduleRpcResult = jsonRpcResult(GetLeaderScheduleResult);
        const SlotRpcResult = jsonRpcResult(index_es_number());
        const GetSupplyRpcResult = jsonRpcResultAndContext(type({
            total: index_es_number(),
            circulating: index_es_number(),
            nonCirculating: index_es_number(),
            nonCirculatingAccounts: array(PublicKeyFromString)
        }));
        const TokenAmountResult = type({
            amount: string(),
            uiAmount: nullable(index_es_number()),
            decimals: index_es_number(),
            uiAmountString: optional(string())
        });
        const GetTokenLargestAccountsResult = jsonRpcResultAndContext(array(type({
            address: PublicKeyFromString,
            amount: string(),
            uiAmount: nullable(index_es_number()),
            decimals: index_es_number(),
            uiAmountString: optional(string())
        })));
        const GetTokenAccountsByOwner = jsonRpcResultAndContext(array(type({
            pubkey: PublicKeyFromString,
            account: type({
                executable: index_es_boolean(),
                owner: PublicKeyFromString,
                lamports: index_es_number(),
                data: BufferFromRawAccountData,
                rentEpoch: index_es_number()
            })
        })));
        const ParsedAccountDataResult = type({
            program: string(),
            parsed: unknown(),
            space: index_es_number()
        });
        const GetParsedTokenAccountsByOwner = jsonRpcResultAndContext(array(type({
            pubkey: PublicKeyFromString,
            account: type({
                executable: index_es_boolean(),
                owner: PublicKeyFromString,
                lamports: index_es_number(),
                data: ParsedAccountDataResult,
                rentEpoch: index_es_number()
            })
        })));
        const GetLargestAccountsRpcResult = jsonRpcResultAndContext(array(type({
            lamports: index_es_number(),
            address: PublicKeyFromString
        })));
        const AccountInfoResult = type({
            executable: index_es_boolean(),
            owner: PublicKeyFromString,
            lamports: index_es_number(),
            data: BufferFromRawAccountData,
            rentEpoch: index_es_number()
        });
        const KeyedAccountInfoResult = type({
            pubkey: PublicKeyFromString,
            account: AccountInfoResult
        });
        const ParsedOrRawAccountData = coerce(union([ instance(node_modules_buffer.hp), ParsedAccountDataResult ]), union([ RawAccountDataResult, ParsedAccountDataResult ]), (value => {
            if (Array.isArray(value)) return create(value, BufferFromRawAccountData); else return value;
        }));
        const ParsedAccountInfoResult = type({
            executable: index_es_boolean(),
            owner: PublicKeyFromString,
            lamports: index_es_number(),
            data: ParsedOrRawAccountData,
            rentEpoch: index_es_number()
        });
        const KeyedParsedAccountInfoResult = type({
            pubkey: PublicKeyFromString,
            account: ParsedAccountInfoResult
        });
        const StakeActivationResult = type({
            state: union([ literal("active"), literal("inactive"), literal("activating"), literal("deactivating") ]),
            active: index_es_number(),
            inactive: index_es_number()
        });
        const GetConfirmedSignaturesForAddress2RpcResult = jsonRpcResult(array(type({
            signature: string(),
            slot: index_es_number(),
            err: TransactionErrorResult,
            memo: nullable(string()),
            blockTime: optional(nullable(index_es_number()))
        })));
        const GetSignaturesForAddressRpcResult = jsonRpcResult(array(type({
            signature: string(),
            slot: index_es_number(),
            err: TransactionErrorResult,
            memo: nullable(string()),
            blockTime: optional(nullable(index_es_number()))
        })));
        const AccountNotificationResult = type({
            subscription: index_es_number(),
            result: notificationResultAndContext(AccountInfoResult)
        });
        const ProgramAccountInfoResult = type({
            pubkey: PublicKeyFromString,
            account: AccountInfoResult
        });
        const ProgramAccountNotificationResult = type({
            subscription: index_es_number(),
            result: notificationResultAndContext(ProgramAccountInfoResult)
        });
        const SlotInfoResult = type({
            parent: index_es_number(),
            slot: index_es_number(),
            root: index_es_number()
        });
        const SlotNotificationResult = type({
            subscription: index_es_number(),
            result: SlotInfoResult
        });
        const SlotUpdateResult = union([ type({
            type: union([ literal("firstShredReceived"), literal("completed"), literal("optimisticConfirmation"), literal("root") ]),
            slot: index_es_number(),
            timestamp: index_es_number()
        }), type({
            type: literal("createdBank"),
            parent: index_es_number(),
            slot: index_es_number(),
            timestamp: index_es_number()
        }), type({
            type: literal("frozen"),
            slot: index_es_number(),
            timestamp: index_es_number(),
            stats: type({
                numTransactionEntries: index_es_number(),
                numSuccessfulTransactions: index_es_number(),
                numFailedTransactions: index_es_number(),
                maxTransactionsPerEntry: index_es_number()
            })
        }), type({
            type: literal("dead"),
            slot: index_es_number(),
            timestamp: index_es_number(),
            err: string()
        }) ]);
        const SlotUpdateNotificationResult = type({
            subscription: index_es_number(),
            result: SlotUpdateResult
        });
        const SignatureNotificationResult = type({
            subscription: index_es_number(),
            result: notificationResultAndContext(union([ SignatureStatusResult, SignatureReceivedResult ]))
        });
        const RootNotificationResult = type({
            subscription: index_es_number(),
            result: index_es_number()
        });
        const ContactInfoResult = type({
            pubkey: string(),
            gossip: nullable(string()),
            tpu: nullable(string()),
            rpc: nullable(string()),
            version: nullable(string())
        });
        const VoteAccountInfoResult = type({
            votePubkey: string(),
            nodePubkey: string(),
            activatedStake: index_es_number(),
            epochVoteAccount: index_es_boolean(),
            epochCredits: array(tuple([ index_es_number(), index_es_number(), index_es_number() ])),
            commission: index_es_number(),
            lastVote: index_es_number(),
            rootSlot: nullable(index_es_number())
        });
        const GetVoteAccounts = jsonRpcResult(type({
            current: array(VoteAccountInfoResult),
            delinquent: array(VoteAccountInfoResult)
        }));
        const ConfirmationStatus = union([ literal("processed"), literal("confirmed"), literal("finalized") ]);
        const SignatureStatusResponse = type({
            slot: index_es_number(),
            confirmations: nullable(index_es_number()),
            err: TransactionErrorResult,
            confirmationStatus: optional(ConfirmationStatus)
        });
        const GetSignatureStatusesRpcResult = jsonRpcResultAndContext(array(nullable(SignatureStatusResponse)));
        const GetMinimumBalanceForRentExemptionRpcResult = jsonRpcResult(index_es_number());
        const AddressTableLookupStruct = type({
            accountKey: PublicKeyFromString,
            writableIndexes: array(index_es_number()),
            readonlyIndexes: array(index_es_number())
        });
        const ConfirmedTransactionResult = type({
            signatures: array(string()),
            message: type({
                accountKeys: array(string()),
                header: type({
                    numRequiredSignatures: index_es_number(),
                    numReadonlySignedAccounts: index_es_number(),
                    numReadonlyUnsignedAccounts: index_es_number()
                }),
                instructions: array(type({
                    accounts: array(index_es_number()),
                    data: string(),
                    programIdIndex: index_es_number()
                })),
                recentBlockhash: string(),
                addressTableLookups: optional(array(AddressTableLookupStruct))
            })
        });
        const AnnotatedAccountKey = type({
            pubkey: PublicKeyFromString,
            signer: index_es_boolean(),
            writable: index_es_boolean(),
            source: optional(union([ literal("transaction"), literal("lookupTable") ]))
        });
        const ConfirmedTransactionAccountsModeResult = type({
            accountKeys: array(AnnotatedAccountKey),
            signatures: array(string())
        });
        const ParsedInstructionResult = type({
            parsed: unknown(),
            program: string(),
            programId: PublicKeyFromString
        });
        const RawInstructionResult = type({
            accounts: array(PublicKeyFromString),
            data: string(),
            programId: PublicKeyFromString
        });
        const InstructionResult = union([ RawInstructionResult, ParsedInstructionResult ]);
        const UnknownInstructionResult = union([ type({
            parsed: unknown(),
            program: string(),
            programId: string()
        }), type({
            accounts: array(string()),
            data: string(),
            programId: string()
        }) ]);
        const ParsedOrRawInstruction = coerce(InstructionResult, UnknownInstructionResult, (value => {
            if ("accounts" in value) return create(value, RawInstructionResult); else return create(value, ParsedInstructionResult);
        }));
        const ParsedConfirmedTransactionResult = type({
            signatures: array(string()),
            message: type({
                accountKeys: array(AnnotatedAccountKey),
                instructions: array(ParsedOrRawInstruction),
                recentBlockhash: string(),
                addressTableLookups: optional(nullable(array(AddressTableLookupStruct)))
            })
        });
        const TokenBalanceResult = type({
            accountIndex: index_es_number(),
            mint: string(),
            owner: optional(string()),
            uiTokenAmount: TokenAmountResult
        });
        const LoadedAddressesResult = type({
            writable: array(PublicKeyFromString),
            readonly: array(PublicKeyFromString)
        });
        const ConfirmedTransactionMetaResult = type({
            err: TransactionErrorResult,
            fee: index_es_number(),
            innerInstructions: optional(nullable(array(type({
                index: index_es_number(),
                instructions: array(type({
                    accounts: array(index_es_number()),
                    data: string(),
                    programIdIndex: index_es_number()
                }))
            })))),
            preBalances: array(index_es_number()),
            postBalances: array(index_es_number()),
            logMessages: optional(nullable(array(string()))),
            preTokenBalances: optional(nullable(array(TokenBalanceResult))),
            postTokenBalances: optional(nullable(array(TokenBalanceResult))),
            loadedAddresses: optional(LoadedAddressesResult),
            computeUnitsConsumed: optional(index_es_number())
        });
        const ParsedConfirmedTransactionMetaResult = type({
            err: TransactionErrorResult,
            fee: index_es_number(),
            innerInstructions: optional(nullable(array(type({
                index: index_es_number(),
                instructions: array(ParsedOrRawInstruction)
            })))),
            preBalances: array(index_es_number()),
            postBalances: array(index_es_number()),
            logMessages: optional(nullable(array(string()))),
            preTokenBalances: optional(nullable(array(TokenBalanceResult))),
            postTokenBalances: optional(nullable(array(TokenBalanceResult))),
            loadedAddresses: optional(LoadedAddressesResult),
            computeUnitsConsumed: optional(index_es_number())
        });
        const TransactionVersionStruct = union([ literal(0), literal("legacy") ]);
        const RewardsResult = type({
            pubkey: string(),
            lamports: index_es_number(),
            postBalance: nullable(index_es_number()),
            rewardType: nullable(string()),
            commission: optional(nullable(index_es_number()))
        });
        const GetBlockRpcResult = jsonRpcResult(nullable(type({
            blockhash: string(),
            previousBlockhash: string(),
            parentSlot: index_es_number(),
            transactions: array(type({
                transaction: ConfirmedTransactionResult,
                meta: nullable(ConfirmedTransactionMetaResult),
                version: optional(TransactionVersionStruct)
            })),
            rewards: optional(array(RewardsResult)),
            blockTime: nullable(index_es_number()),
            blockHeight: nullable(index_es_number())
        })));
        const GetNoneModeBlockRpcResult = jsonRpcResult(nullable(type({
            blockhash: string(),
            previousBlockhash: string(),
            parentSlot: index_es_number(),
            rewards: optional(array(RewardsResult)),
            blockTime: nullable(index_es_number()),
            blockHeight: nullable(index_es_number())
        })));
        const GetAccountsModeBlockRpcResult = jsonRpcResult(nullable(type({
            blockhash: string(),
            previousBlockhash: string(),
            parentSlot: index_es_number(),
            transactions: array(type({
                transaction: ConfirmedTransactionAccountsModeResult,
                meta: nullable(ConfirmedTransactionMetaResult),
                version: optional(TransactionVersionStruct)
            })),
            rewards: optional(array(RewardsResult)),
            blockTime: nullable(index_es_number()),
            blockHeight: nullable(index_es_number())
        })));
        const GetParsedBlockRpcResult = jsonRpcResult(nullable(type({
            blockhash: string(),
            previousBlockhash: string(),
            parentSlot: index_es_number(),
            transactions: array(type({
                transaction: ParsedConfirmedTransactionResult,
                meta: nullable(ParsedConfirmedTransactionMetaResult),
                version: optional(TransactionVersionStruct)
            })),
            rewards: optional(array(RewardsResult)),
            blockTime: nullable(index_es_number()),
            blockHeight: nullable(index_es_number())
        })));
        const GetParsedAccountsModeBlockRpcResult = jsonRpcResult(nullable(type({
            blockhash: string(),
            previousBlockhash: string(),
            parentSlot: index_es_number(),
            transactions: array(type({
                transaction: ConfirmedTransactionAccountsModeResult,
                meta: nullable(ParsedConfirmedTransactionMetaResult),
                version: optional(TransactionVersionStruct)
            })),
            rewards: optional(array(RewardsResult)),
            blockTime: nullable(index_es_number()),
            blockHeight: nullable(index_es_number())
        })));
        const GetParsedNoneModeBlockRpcResult = jsonRpcResult(nullable(type({
            blockhash: string(),
            previousBlockhash: string(),
            parentSlot: index_es_number(),
            rewards: optional(array(RewardsResult)),
            blockTime: nullable(index_es_number()),
            blockHeight: nullable(index_es_number())
        })));
        const GetConfirmedBlockRpcResult = jsonRpcResult(nullable(type({
            blockhash: string(),
            previousBlockhash: string(),
            parentSlot: index_es_number(),
            transactions: array(type({
                transaction: ConfirmedTransactionResult,
                meta: nullable(ConfirmedTransactionMetaResult)
            })),
            rewards: optional(array(RewardsResult)),
            blockTime: nullable(index_es_number())
        })));
        const GetBlockSignaturesRpcResult = jsonRpcResult(nullable(type({
            blockhash: string(),
            previousBlockhash: string(),
            parentSlot: index_es_number(),
            signatures: array(string()),
            blockTime: nullable(index_es_number())
        })));
        const GetTransactionRpcResult = jsonRpcResult(nullable(type({
            slot: index_es_number(),
            meta: nullable(ConfirmedTransactionMetaResult),
            blockTime: optional(nullable(index_es_number())),
            transaction: ConfirmedTransactionResult,
            version: optional(TransactionVersionStruct)
        })));
        const GetParsedTransactionRpcResult = jsonRpcResult(nullable(type({
            slot: index_es_number(),
            transaction: ParsedConfirmedTransactionResult,
            meta: nullable(ParsedConfirmedTransactionMetaResult),
            blockTime: optional(nullable(index_es_number())),
            version: optional(TransactionVersionStruct)
        })));
        const GetRecentBlockhashAndContextRpcResult = jsonRpcResultAndContext(type({
            blockhash: string(),
            feeCalculator: type({
                lamportsPerSignature: index_es_number()
            })
        }));
        const GetLatestBlockhashRpcResult = jsonRpcResultAndContext(type({
            blockhash: string(),
            lastValidBlockHeight: index_es_number()
        }));
        const IsBlockhashValidRpcResult = jsonRpcResultAndContext(index_es_boolean());
        const PerfSampleResult = type({
            slot: index_es_number(),
            numTransactions: index_es_number(),
            numSlots: index_es_number(),
            samplePeriodSecs: index_es_number()
        });
        const GetRecentPerformanceSamplesRpcResult = jsonRpcResult(array(PerfSampleResult));
        const GetFeeCalculatorRpcResult = jsonRpcResultAndContext(nullable(type({
            feeCalculator: type({
                lamportsPerSignature: index_es_number()
            })
        })));
        const RequestAirdropRpcResult = jsonRpcResult(string());
        const SendTransactionRpcResult = jsonRpcResult(string());
        const LogsResult = type({
            err: TransactionErrorResult,
            logs: array(string()),
            signature: string()
        });
        const LogsNotificationResult = type({
            result: notificationResultAndContext(LogsResult),
            subscription: index_es_number()
        });
        const COMMON_HTTP_HEADERS = {
            "solana-client": `js/${"0.0.0-development"}`
        };
        class Connection {
            constructor(endpoint, _commitmentOrConfig) {
                this._commitment = void 0;
                this._confirmTransactionInitialTimeout = void 0;
                this._rpcEndpoint = void 0;
                this._rpcWsEndpoint = void 0;
                this._rpcClient = void 0;
                this._rpcRequest = void 0;
                this._rpcBatchRequest = void 0;
                this._rpcWebSocket = void 0;
                this._rpcWebSocketConnected = false;
                this._rpcWebSocketHeartbeat = null;
                this._rpcWebSocketIdleTimeout = null;
                this._rpcWebSocketGeneration = 0;
                this._disableBlockhashCaching = false;
                this._pollingBlockhash = false;
                this._blockhashInfo = {
                    latestBlockhash: null,
                    lastFetch: 0,
                    transactionSignatures: [],
                    simulatedSignatures: []
                };
                this._nextClientSubscriptionId = 0;
                this._subscriptionDisposeFunctionsByClientSubscriptionId = {};
                this._subscriptionHashByClientSubscriptionId = {};
                this._subscriptionStateChangeCallbacksByHash = {};
                this._subscriptionCallbacksByServerSubscriptionId = {};
                this._subscriptionsByHash = {};
                this._subscriptionsAutoDisposedByRpc = new Set;
                this.getBlockHeight = (() => {
                    const requestPromises = {};
                    return async commitmentOrConfig => {
                        const {commitment, config} = extractCommitmentFromConfig(commitmentOrConfig);
                        const args = this._buildArgs([], commitment, void 0, config);
                        const requestHash = fastStableStringify$1(args);
                        requestPromises[requestHash] = requestPromises[requestHash] ?? (async () => {
                            try {
                                const unsafeRes = await this._rpcRequest("getBlockHeight", args);
                                const res = create(unsafeRes, jsonRpcResult(index_es_number()));
                                if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get block height information");
                                return res.result;
                            } finally {
                                delete requestPromises[requestHash];
                            }
                        })();
                        return await requestPromises[requestHash];
                    };
                })();
                let wsEndpoint;
                let httpHeaders;
                let fetch;
                let fetchMiddleware;
                let disableRetryOnRateLimit;
                let httpAgent;
                if (_commitmentOrConfig && typeof _commitmentOrConfig === "string") this._commitment = _commitmentOrConfig; else if (_commitmentOrConfig) {
                    this._commitment = _commitmentOrConfig.commitment;
                    this._confirmTransactionInitialTimeout = _commitmentOrConfig.confirmTransactionInitialTimeout;
                    wsEndpoint = _commitmentOrConfig.wsEndpoint;
                    httpHeaders = _commitmentOrConfig.httpHeaders;
                    fetch = _commitmentOrConfig.fetch;
                    fetchMiddleware = _commitmentOrConfig.fetchMiddleware;
                    disableRetryOnRateLimit = _commitmentOrConfig.disableRetryOnRateLimit;
                    httpAgent = _commitmentOrConfig.httpAgent;
                }
                this._rpcEndpoint = assertEndpointUrl(endpoint);
                this._rpcWsEndpoint = wsEndpoint || makeWebsocketUrl(endpoint);
                this._rpcClient = createRpcClient(endpoint, httpHeaders, fetch, fetchMiddleware, disableRetryOnRateLimit, httpAgent);
                this._rpcRequest = createRpcRequest(this._rpcClient);
                this._rpcBatchRequest = createRpcBatchRequest(this._rpcClient);
                this._rpcWebSocket = new RpcWebSocketClient(this._rpcWsEndpoint, {
                    autoconnect: false,
                    max_reconnects: 1 / 0
                });
                this._rpcWebSocket.on("open", this._wsOnOpen.bind(this));
                this._rpcWebSocket.on("error", this._wsOnError.bind(this));
                this._rpcWebSocket.on("close", this._wsOnClose.bind(this));
                this._rpcWebSocket.on("accountNotification", this._wsOnAccountNotification.bind(this));
                this._rpcWebSocket.on("programNotification", this._wsOnProgramAccountNotification.bind(this));
                this._rpcWebSocket.on("slotNotification", this._wsOnSlotNotification.bind(this));
                this._rpcWebSocket.on("slotsUpdatesNotification", this._wsOnSlotUpdatesNotification.bind(this));
                this._rpcWebSocket.on("signatureNotification", this._wsOnSignatureNotification.bind(this));
                this._rpcWebSocket.on("rootNotification", this._wsOnRootNotification.bind(this));
                this._rpcWebSocket.on("logsNotification", this._wsOnLogsNotification.bind(this));
            }
            get commitment() {
                return this._commitment;
            }
            get rpcEndpoint() {
                return this._rpcEndpoint;
            }
            async getBalanceAndContext(publicKey, commitmentOrConfig) {
                const {commitment, config} = extractCommitmentFromConfig(commitmentOrConfig);
                const args = this._buildArgs([ publicKey.toBase58() ], commitment, void 0, config);
                const unsafeRes = await this._rpcRequest("getBalance", args);
                const res = create(unsafeRes, jsonRpcResultAndContext(index_es_number()));
                if ("error" in res) throw new SolanaJSONRPCError(res.error, `failed to get balance for ${publicKey.toBase58()}`);
                return res.result;
            }
            async getBalance(publicKey, commitmentOrConfig) {
                return await this.getBalanceAndContext(publicKey, commitmentOrConfig).then((x => x.value)).catch((e => {
                    throw new Error("failed to get balance of account " + publicKey.toBase58() + ": " + e);
                }));
            }
            async getBlockTime(slot) {
                const unsafeRes = await this._rpcRequest("getBlockTime", [ slot ]);
                const res = create(unsafeRes, jsonRpcResult(nullable(index_es_number())));
                if ("error" in res) throw new SolanaJSONRPCError(res.error, `failed to get block time for slot ${slot}`);
                return res.result;
            }
            async getMinimumLedgerSlot() {
                const unsafeRes = await this._rpcRequest("minimumLedgerSlot", []);
                const res = create(unsafeRes, jsonRpcResult(index_es_number()));
                if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get minimum ledger slot");
                return res.result;
            }
            async getFirstAvailableBlock() {
                const unsafeRes = await this._rpcRequest("getFirstAvailableBlock", []);
                const res = create(unsafeRes, SlotRpcResult);
                if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get first available block");
                return res.result;
            }
            async getSupply(config) {
                let configArg = {};
                if (typeof config === "string") configArg = {
                    commitment: config
                }; else if (config) configArg = {
                    ...config,
                    commitment: config && config.commitment || this.commitment
                }; else configArg = {
                    commitment: this.commitment
                };
                const unsafeRes = await this._rpcRequest("getSupply", [ configArg ]);
                const res = create(unsafeRes, GetSupplyRpcResult);
                if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get supply");
                return res.result;
            }
            async getTokenSupply(tokenMintAddress, commitment) {
                const args = this._buildArgs([ tokenMintAddress.toBase58() ], commitment);
                const unsafeRes = await this._rpcRequest("getTokenSupply", args);
                const res = create(unsafeRes, jsonRpcResultAndContext(TokenAmountResult));
                if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get token supply");
                return res.result;
            }
            async getTokenAccountBalance(tokenAddress, commitment) {
                const args = this._buildArgs([ tokenAddress.toBase58() ], commitment);
                const unsafeRes = await this._rpcRequest("getTokenAccountBalance", args);
                const res = create(unsafeRes, jsonRpcResultAndContext(TokenAmountResult));
                if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get token account balance");
                return res.result;
            }
            async getTokenAccountsByOwner(ownerAddress, filter, commitmentOrConfig) {
                const {commitment, config} = extractCommitmentFromConfig(commitmentOrConfig);
                let _args = [ ownerAddress.toBase58() ];
                if ("mint" in filter) _args.push({
                    mint: filter.mint.toBase58()
                }); else _args.push({
                    programId: filter.programId.toBase58()
                });
                const args = this._buildArgs(_args, commitment, "base64", config);
                const unsafeRes = await this._rpcRequest("getTokenAccountsByOwner", args);
                const res = create(unsafeRes, GetTokenAccountsByOwner);
                if ("error" in res) throw new SolanaJSONRPCError(res.error, `failed to get token accounts owned by account ${ownerAddress.toBase58()}`);
                return res.result;
            }
            async getParsedTokenAccountsByOwner(ownerAddress, filter, commitment) {
                let _args = [ ownerAddress.toBase58() ];
                if ("mint" in filter) _args.push({
                    mint: filter.mint.toBase58()
                }); else _args.push({
                    programId: filter.programId.toBase58()
                });
                const args = this._buildArgs(_args, commitment, "jsonParsed");
                const unsafeRes = await this._rpcRequest("getTokenAccountsByOwner", args);
                const res = create(unsafeRes, GetParsedTokenAccountsByOwner);
                if ("error" in res) throw new SolanaJSONRPCError(res.error, `failed to get token accounts owned by account ${ownerAddress.toBase58()}`);
                return res.result;
            }
            async getLargestAccounts(config) {
                const arg = {
                    ...config,
                    commitment: config && config.commitment || this.commitment
                };
                const args = arg.filter || arg.commitment ? [ arg ] : [];
                const unsafeRes = await this._rpcRequest("getLargestAccounts", args);
                const res = create(unsafeRes, GetLargestAccountsRpcResult);
                if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get largest accounts");
                return res.result;
            }
            async getTokenLargestAccounts(mintAddress, commitment) {
                const args = this._buildArgs([ mintAddress.toBase58() ], commitment);
                const unsafeRes = await this._rpcRequest("getTokenLargestAccounts", args);
                const res = create(unsafeRes, GetTokenLargestAccountsResult);
                if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get token largest accounts");
                return res.result;
            }
            async getAccountInfoAndContext(publicKey, commitmentOrConfig) {
                const {commitment, config} = extractCommitmentFromConfig(commitmentOrConfig);
                const args = this._buildArgs([ publicKey.toBase58() ], commitment, "base64", config);
                const unsafeRes = await this._rpcRequest("getAccountInfo", args);
                const res = create(unsafeRes, jsonRpcResultAndContext(nullable(AccountInfoResult)));
                if ("error" in res) throw new SolanaJSONRPCError(res.error, `failed to get info about account ${publicKey.toBase58()}`);
                return res.result;
            }
            async getParsedAccountInfo(publicKey, commitmentOrConfig) {
                const {commitment, config} = extractCommitmentFromConfig(commitmentOrConfig);
                const args = this._buildArgs([ publicKey.toBase58() ], commitment, "jsonParsed", config);
                const unsafeRes = await this._rpcRequest("getAccountInfo", args);
                const res = create(unsafeRes, jsonRpcResultAndContext(nullable(ParsedAccountInfoResult)));
                if ("error" in res) throw new SolanaJSONRPCError(res.error, `failed to get info about account ${publicKey.toBase58()}`);
                return res.result;
            }
            async getAccountInfo(publicKey, commitmentOrConfig) {
                try {
                    const res = await this.getAccountInfoAndContext(publicKey, commitmentOrConfig);
                    return res.value;
                } catch (e) {
                    throw new Error("failed to get info about account " + publicKey.toBase58() + ": " + e);
                }
            }
            async getMultipleParsedAccounts(publicKeys, rawConfig) {
                const {commitment, config} = extractCommitmentFromConfig(rawConfig);
                const keys = publicKeys.map((key => key.toBase58()));
                const args = this._buildArgs([ keys ], commitment, "jsonParsed", config);
                const unsafeRes = await this._rpcRequest("getMultipleAccounts", args);
                const res = create(unsafeRes, jsonRpcResultAndContext(array(nullable(ParsedAccountInfoResult))));
                if ("error" in res) throw new SolanaJSONRPCError(res.error, `failed to get info for accounts ${keys}`);
                return res.result;
            }
            async getMultipleAccountsInfoAndContext(publicKeys, commitmentOrConfig) {
                const {commitment, config} = extractCommitmentFromConfig(commitmentOrConfig);
                const keys = publicKeys.map((key => key.toBase58()));
                const args = this._buildArgs([ keys ], commitment, "base64", config);
                const unsafeRes = await this._rpcRequest("getMultipleAccounts", args);
                const res = create(unsafeRes, jsonRpcResultAndContext(array(nullable(AccountInfoResult))));
                if ("error" in res) throw new SolanaJSONRPCError(res.error, `failed to get info for accounts ${keys}`);
                return res.result;
            }
            async getMultipleAccountsInfo(publicKeys, commitmentOrConfig) {
                const res = await this.getMultipleAccountsInfoAndContext(publicKeys, commitmentOrConfig);
                return res.value;
            }
            async getStakeActivation(publicKey, commitmentOrConfig, epoch) {
                const {commitment, config} = extractCommitmentFromConfig(commitmentOrConfig);
                const args = this._buildArgs([ publicKey.toBase58() ], commitment, void 0, {
                    ...config,
                    epoch: epoch != null ? epoch : config?.epoch
                });
                const unsafeRes = await this._rpcRequest("getStakeActivation", args);
                const res = create(unsafeRes, jsonRpcResult(StakeActivationResult));
                if ("error" in res) throw new SolanaJSONRPCError(res.error, `failed to get Stake Activation ${publicKey.toBase58()}`);
                return res.result;
            }
            async getProgramAccounts(programId, configOrCommitment) {
                const {commitment, config} = extractCommitmentFromConfig(configOrCommitment);
                const {encoding, ...configWithoutEncoding} = config || {};
                const args = this._buildArgs([ programId.toBase58() ], commitment, encoding || "base64", configWithoutEncoding);
                const unsafeRes = await this._rpcRequest("getProgramAccounts", args);
                const baseSchema = array(KeyedAccountInfoResult);
                const res = configWithoutEncoding.withContext === true ? create(unsafeRes, jsonRpcResultAndContext(baseSchema)) : create(unsafeRes, jsonRpcResult(baseSchema));
                if ("error" in res) throw new SolanaJSONRPCError(res.error, `failed to get accounts owned by program ${programId.toBase58()}`);
                return res.result;
            }
            async getParsedProgramAccounts(programId, configOrCommitment) {
                const {commitment, config} = extractCommitmentFromConfig(configOrCommitment);
                const args = this._buildArgs([ programId.toBase58() ], commitment, "jsonParsed", config);
                const unsafeRes = await this._rpcRequest("getProgramAccounts", args);
                const res = create(unsafeRes, jsonRpcResult(array(KeyedParsedAccountInfoResult)));
                if ("error" in res) throw new SolanaJSONRPCError(res.error, `failed to get accounts owned by program ${programId.toBase58()}`);
                return res.result;
            }
            async confirmTransaction(strategy, commitment) {
                let rawSignature;
                if (typeof strategy == "string") rawSignature = strategy; else {
                    const config = strategy;
                    if (config.abortSignal?.aborted) return Promise.reject(config.abortSignal.reason);
                    rawSignature = config.signature;
                }
                let decodedSignature;
                try {
                    decodedSignature = bs58_default().decode(rawSignature);
                } catch (err) {
                    throw new Error("signature must be base58 encoded: " + rawSignature);
                }
                index_browser_esm_assert(decodedSignature.length === 64, "signature has invalid length");
                if (typeof strategy === "string") return await this.confirmTransactionUsingLegacyTimeoutStrategy({
                    commitment: commitment || this.commitment,
                    signature: rawSignature
                }); else if ("lastValidBlockHeight" in strategy) return await this.confirmTransactionUsingBlockHeightExceedanceStrategy({
                    commitment: commitment || this.commitment,
                    strategy
                }); else return await this.confirmTransactionUsingDurableNonceStrategy({
                    commitment: commitment || this.commitment,
                    strategy
                });
            }
            getCancellationPromise(signal) {
                return new Promise(((_, reject) => {
                    if (signal == null) return;
                    if (signal.aborted) reject(signal.reason); else signal.addEventListener("abort", (() => {
                        reject(signal.reason);
                    }));
                }));
            }
            getTransactionConfirmationPromise({commitment, signature}) {
                let signatureSubscriptionId;
                let disposeSignatureSubscriptionStateChangeObserver;
                let done = false;
                const confirmationPromise = new Promise(((resolve, reject) => {
                    try {
                        signatureSubscriptionId = this.onSignature(signature, ((result, context) => {
                            signatureSubscriptionId = void 0;
                            const response = {
                                context,
                                value: result
                            };
                            resolve({
                                __type: TransactionStatus.PROCESSED,
                                response
                            });
                        }), commitment);
                        const subscriptionSetupPromise = new Promise((resolveSubscriptionSetup => {
                            if (signatureSubscriptionId == null) resolveSubscriptionSetup(); else disposeSignatureSubscriptionStateChangeObserver = this._onSubscriptionStateChange(signatureSubscriptionId, (nextState => {
                                if (nextState === "subscribed") resolveSubscriptionSetup();
                            }));
                        }));
                        (async () => {
                            await subscriptionSetupPromise;
                            if (done) return;
                            const response = await this.getSignatureStatus(signature);
                            if (done) return;
                            if (response == null) return;
                            const {context, value} = response;
                            if (value == null) return;
                            if (value?.err) reject(value.err); else {
                                switch (commitment) {
                                  case "confirmed":
                                  case "single":
                                  case "singleGossip":
                                    if (value.confirmationStatus === "processed") return;
                                    break;

                                  case "finalized":
                                  case "max":
                                  case "root":
                                    if (value.confirmationStatus === "processed" || value.confirmationStatus === "confirmed") return;
                                    break;

                                  case "processed":
                                  case "recent":
                                }
                                done = true;
                                resolve({
                                    __type: TransactionStatus.PROCESSED,
                                    response: {
                                        context,
                                        value
                                    }
                                });
                            }
                        })();
                    } catch (err) {
                        reject(err);
                    }
                }));
                const abortConfirmation = () => {
                    if (disposeSignatureSubscriptionStateChangeObserver) {
                        disposeSignatureSubscriptionStateChangeObserver();
                        disposeSignatureSubscriptionStateChangeObserver = void 0;
                    }
                    if (signatureSubscriptionId != null) {
                        this.removeSignatureListener(signatureSubscriptionId);
                        signatureSubscriptionId = void 0;
                    }
                };
                return {
                    abortConfirmation,
                    confirmationPromise
                };
            }
            async confirmTransactionUsingBlockHeightExceedanceStrategy({commitment, strategy: {abortSignal, lastValidBlockHeight, signature}}) {
                let done = false;
                const expiryPromise = new Promise((resolve => {
                    const checkBlockHeight = async () => {
                        try {
                            const blockHeight = await this.getBlockHeight(commitment);
                            return blockHeight;
                        } catch (_e) {
                            return -1;
                        }
                    };
                    (async () => {
                        let currentBlockHeight = await checkBlockHeight();
                        if (done) return;
                        while (currentBlockHeight <= lastValidBlockHeight) {
                            await sleep(1e3);
                            if (done) return;
                            currentBlockHeight = await checkBlockHeight();
                            if (done) return;
                        }
                        resolve({
                            __type: TransactionStatus.BLOCKHEIGHT_EXCEEDED
                        });
                    })();
                }));
                const {abortConfirmation, confirmationPromise} = this.getTransactionConfirmationPromise({
                    commitment,
                    signature
                });
                const cancellationPromise = this.getCancellationPromise(abortSignal);
                let result;
                try {
                    const outcome = await Promise.race([ cancellationPromise, confirmationPromise, expiryPromise ]);
                    if (outcome.__type === TransactionStatus.PROCESSED) result = outcome.response; else throw new TransactionExpiredBlockheightExceededError(signature);
                } finally {
                    done = true;
                    abortConfirmation();
                }
                return result;
            }
            async confirmTransactionUsingDurableNonceStrategy({commitment, strategy: {abortSignal, minContextSlot, nonceAccountPubkey, nonceValue, signature}}) {
                let done = false;
                const expiryPromise = new Promise((resolve => {
                    let currentNonceValue = nonceValue;
                    let lastCheckedSlot = null;
                    const getCurrentNonceValue = async () => {
                        try {
                            const {context, value: nonceAccount} = await this.getNonceAndContext(nonceAccountPubkey, {
                                commitment,
                                minContextSlot
                            });
                            lastCheckedSlot = context.slot;
                            return nonceAccount?.nonce;
                        } catch (e) {
                            return currentNonceValue;
                        }
                    };
                    (async () => {
                        currentNonceValue = await getCurrentNonceValue();
                        if (done) return;
                        while (true) {
                            if (nonceValue !== currentNonceValue) {
                                resolve({
                                    __type: TransactionStatus.NONCE_INVALID,
                                    slotInWhichNonceDidAdvance: lastCheckedSlot
                                });
                                return;
                            }
                            await sleep(2e3);
                            if (done) return;
                            currentNonceValue = await getCurrentNonceValue();
                            if (done) return;
                        }
                    })();
                }));
                const {abortConfirmation, confirmationPromise} = this.getTransactionConfirmationPromise({
                    commitment,
                    signature
                });
                const cancellationPromise = this.getCancellationPromise(abortSignal);
                let result;
                try {
                    const outcome = await Promise.race([ cancellationPromise, confirmationPromise, expiryPromise ]);
                    if (outcome.__type === TransactionStatus.PROCESSED) result = outcome.response; else {
                        let signatureStatus;
                        while (true) {
                            const status = await this.getSignatureStatus(signature);
                            if (status == null) break;
                            if (status.context.slot < (outcome.slotInWhichNonceDidAdvance ?? minContextSlot)) {
                                await sleep(400);
                                continue;
                            }
                            signatureStatus = status;
                            break;
                        }
                        if (signatureStatus?.value) {
                            const commitmentForStatus = commitment || "finalized";
                            const {confirmationStatus} = signatureStatus.value;
                            switch (commitmentForStatus) {
                              case "processed":
                              case "recent":
                                if (confirmationStatus !== "processed" && confirmationStatus !== "confirmed" && confirmationStatus !== "finalized") throw new TransactionExpiredNonceInvalidError(signature);
                                break;

                              case "confirmed":
                              case "single":
                              case "singleGossip":
                                if (confirmationStatus !== "confirmed" && confirmationStatus !== "finalized") throw new TransactionExpiredNonceInvalidError(signature);
                                break;

                              case "finalized":
                              case "max":
                              case "root":
                                if (confirmationStatus !== "finalized") throw new TransactionExpiredNonceInvalidError(signature);
                                break;

                              default:
                                (_ => {})();
                            }
                            result = {
                                context: signatureStatus.context,
                                value: {
                                    err: signatureStatus.value.err
                                }
                            };
                        } else throw new TransactionExpiredNonceInvalidError(signature);
                    }
                } finally {
                    done = true;
                    abortConfirmation();
                }
                return result;
            }
            async confirmTransactionUsingLegacyTimeoutStrategy({commitment, signature}) {
                let timeoutId;
                const expiryPromise = new Promise((resolve => {
                    let timeoutMs = this._confirmTransactionInitialTimeout || 60 * 1e3;
                    switch (commitment) {
                      case "processed":
                      case "recent":
                      case "single":
                      case "confirmed":
                      case "singleGossip":
                        timeoutMs = this._confirmTransactionInitialTimeout || 30 * 1e3;
                        break;
                    }
                    timeoutId = setTimeout((() => resolve({
                        __type: TransactionStatus.TIMED_OUT,
                        timeoutMs
                    })), timeoutMs);
                }));
                const {abortConfirmation, confirmationPromise} = this.getTransactionConfirmationPromise({
                    commitment,
                    signature
                });
                let result;
                try {
                    const outcome = await Promise.race([ confirmationPromise, expiryPromise ]);
                    if (outcome.__type === TransactionStatus.PROCESSED) result = outcome.response; else throw new TransactionExpiredTimeoutError(signature, outcome.timeoutMs / 1e3);
                } finally {
                    clearTimeout(timeoutId);
                    abortConfirmation();
                }
                return result;
            }
            async getClusterNodes() {
                const unsafeRes = await this._rpcRequest("getClusterNodes", []);
                const res = create(unsafeRes, jsonRpcResult(array(ContactInfoResult)));
                if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get cluster nodes");
                return res.result;
            }
            async getVoteAccounts(commitment) {
                const args = this._buildArgs([], commitment);
                const unsafeRes = await this._rpcRequest("getVoteAccounts", args);
                const res = create(unsafeRes, GetVoteAccounts);
                if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get vote accounts");
                return res.result;
            }
            async getSlot(commitmentOrConfig) {
                const {commitment, config} = extractCommitmentFromConfig(commitmentOrConfig);
                const args = this._buildArgs([], commitment, void 0, config);
                const unsafeRes = await this._rpcRequest("getSlot", args);
                const res = create(unsafeRes, jsonRpcResult(index_es_number()));
                if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get slot");
                return res.result;
            }
            async getSlotLeader(commitmentOrConfig) {
                const {commitment, config} = extractCommitmentFromConfig(commitmentOrConfig);
                const args = this._buildArgs([], commitment, void 0, config);
                const unsafeRes = await this._rpcRequest("getSlotLeader", args);
                const res = create(unsafeRes, jsonRpcResult(string()));
                if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get slot leader");
                return res.result;
            }
            async getSlotLeaders(startSlot, limit) {
                const args = [ startSlot, limit ];
                const unsafeRes = await this._rpcRequest("getSlotLeaders", args);
                const res = create(unsafeRes, jsonRpcResult(array(PublicKeyFromString)));
                if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get slot leaders");
                return res.result;
            }
            async getSignatureStatus(signature, config) {
                const {context, value: values} = await this.getSignatureStatuses([ signature ], config);
                index_browser_esm_assert(values.length === 1);
                const value = values[0];
                return {
                    context,
                    value
                };
            }
            async getSignatureStatuses(signatures, config) {
                const params = [ signatures ];
                if (config) params.push(config);
                const unsafeRes = await this._rpcRequest("getSignatureStatuses", params);
                const res = create(unsafeRes, GetSignatureStatusesRpcResult);
                if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get signature status");
                return res.result;
            }
            async getTransactionCount(commitmentOrConfig) {
                const {commitment, config} = extractCommitmentFromConfig(commitmentOrConfig);
                const args = this._buildArgs([], commitment, void 0, config);
                const unsafeRes = await this._rpcRequest("getTransactionCount", args);
                const res = create(unsafeRes, jsonRpcResult(index_es_number()));
                if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get transaction count");
                return res.result;
            }
            async getTotalSupply(commitment) {
                const result = await this.getSupply({
                    commitment,
                    excludeNonCirculatingAccountsList: true
                });
                return result.value.total;
            }
            async getInflationGovernor(commitment) {
                const args = this._buildArgs([], commitment);
                const unsafeRes = await this._rpcRequest("getInflationGovernor", args);
                const res = create(unsafeRes, GetInflationGovernorRpcResult);
                if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get inflation");
                return res.result;
            }
            async getInflationReward(addresses, epoch, commitmentOrConfig) {
                const {commitment, config} = extractCommitmentFromConfig(commitmentOrConfig);
                const args = this._buildArgs([ addresses.map((pubkey => pubkey.toBase58())) ], commitment, void 0, {
                    ...config,
                    epoch: epoch != null ? epoch : config?.epoch
                });
                const unsafeRes = await this._rpcRequest("getInflationReward", args);
                const res = create(unsafeRes, GetInflationRewardResult);
                if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get inflation reward");
                return res.result;
            }
            async getInflationRate() {
                const unsafeRes = await this._rpcRequest("getInflationRate", []);
                const res = create(unsafeRes, GetInflationRateRpcResult);
                if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get inflation rate");
                return res.result;
            }
            async getEpochInfo(commitmentOrConfig) {
                const {commitment, config} = extractCommitmentFromConfig(commitmentOrConfig);
                const args = this._buildArgs([], commitment, void 0, config);
                const unsafeRes = await this._rpcRequest("getEpochInfo", args);
                const res = create(unsafeRes, GetEpochInfoRpcResult);
                if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get epoch info");
                return res.result;
            }
            async getEpochSchedule() {
                const unsafeRes = await this._rpcRequest("getEpochSchedule", []);
                const res = create(unsafeRes, GetEpochScheduleRpcResult);
                if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get epoch schedule");
                const epochSchedule = res.result;
                return new EpochSchedule(epochSchedule.slotsPerEpoch, epochSchedule.leaderScheduleSlotOffset, epochSchedule.warmup, epochSchedule.firstNormalEpoch, epochSchedule.firstNormalSlot);
            }
            async getLeaderSchedule() {
                const unsafeRes = await this._rpcRequest("getLeaderSchedule", []);
                const res = create(unsafeRes, GetLeaderScheduleRpcResult);
                if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get leader schedule");
                return res.result;
            }
            async getMinimumBalanceForRentExemption(dataLength, commitment) {
                const args = this._buildArgs([ dataLength ], commitment);
                const unsafeRes = await this._rpcRequest("getMinimumBalanceForRentExemption", args);
                const res = create(unsafeRes, GetMinimumBalanceForRentExemptionRpcResult);
                if ("error" in res) {
                    console.warn("Unable to fetch minimum balance for rent exemption");
                    return 0;
                }
                return res.result;
            }
            async getRecentBlockhashAndContext(commitment) {
                const args = this._buildArgs([], commitment);
                const unsafeRes = await this._rpcRequest("getRecentBlockhash", args);
                const res = create(unsafeRes, GetRecentBlockhashAndContextRpcResult);
                if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get recent blockhash");
                return res.result;
            }
            async getRecentPerformanceSamples(limit) {
                const unsafeRes = await this._rpcRequest("getRecentPerformanceSamples", limit ? [ limit ] : []);
                const res = create(unsafeRes, GetRecentPerformanceSamplesRpcResult);
                if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get recent performance samples");
                return res.result;
            }
            async getFeeCalculatorForBlockhash(blockhash, commitment) {
                const args = this._buildArgs([ blockhash ], commitment);
                const unsafeRes = await this._rpcRequest("getFeeCalculatorForBlockhash", args);
                const res = create(unsafeRes, GetFeeCalculatorRpcResult);
                if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get fee calculator");
                const {context, value} = res.result;
                return {
                    context,
                    value: value !== null ? value.feeCalculator : null
                };
            }
            async getFeeForMessage(message, commitment) {
                const wireMessage = toBuffer(message.serialize()).toString("base64");
                const args = this._buildArgs([ wireMessage ], commitment);
                const unsafeRes = await this._rpcRequest("getFeeForMessage", args);
                const res = create(unsafeRes, jsonRpcResultAndContext(nullable(index_es_number())));
                if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get fee for message");
                if (res.result === null) throw new Error("invalid blockhash");
                return res.result;
            }
            async getRecentPrioritizationFees(config) {
                const accounts = config?.lockedWritableAccounts?.map((key => key.toBase58()));
                const args = accounts?.length ? [ accounts ] : [];
                const unsafeRes = await this._rpcRequest("getRecentPrioritizationFees", args);
                const res = create(unsafeRes, GetRecentPrioritizationFeesRpcResult);
                if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get recent prioritization fees");
                return res.result;
            }
            async getRecentBlockhash(commitment) {
                try {
                    const res = await this.getRecentBlockhashAndContext(commitment);
                    return res.value;
                } catch (e) {
                    throw new Error("failed to get recent blockhash: " + e);
                }
            }
            async getLatestBlockhash(commitmentOrConfig) {
                try {
                    const res = await this.getLatestBlockhashAndContext(commitmentOrConfig);
                    return res.value;
                } catch (e) {
                    throw new Error("failed to get recent blockhash: " + e);
                }
            }
            async getLatestBlockhashAndContext(commitmentOrConfig) {
                const {commitment, config} = extractCommitmentFromConfig(commitmentOrConfig);
                const args = this._buildArgs([], commitment, void 0, config);
                const unsafeRes = await this._rpcRequest("getLatestBlockhash", args);
                const res = create(unsafeRes, GetLatestBlockhashRpcResult);
                if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get latest blockhash");
                return res.result;
            }
            async isBlockhashValid(blockhash, rawConfig) {
                const {commitment, config} = extractCommitmentFromConfig(rawConfig);
                const args = this._buildArgs([ blockhash ], commitment, void 0, config);
                const unsafeRes = await this._rpcRequest("isBlockhashValid", args);
                const res = create(unsafeRes, IsBlockhashValidRpcResult);
                if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to determine if the blockhash `" + blockhash + "`is valid");
                return res.result;
            }
            async getVersion() {
                const unsafeRes = await this._rpcRequest("getVersion", []);
                const res = create(unsafeRes, jsonRpcResult(VersionResult));
                if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get version");
                return res.result;
            }
            async getGenesisHash() {
                const unsafeRes = await this._rpcRequest("getGenesisHash", []);
                const res = create(unsafeRes, jsonRpcResult(string()));
                if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get genesis hash");
                return res.result;
            }
            async getBlock(slot, rawConfig) {
                const {commitment, config} = extractCommitmentFromConfig(rawConfig);
                const args = this._buildArgsAtLeastConfirmed([ slot ], commitment, void 0, config);
                const unsafeRes = await this._rpcRequest("getBlock", args);
                try {
                    switch (config?.transactionDetails) {
                      case "accounts":
                        {
                            const res = create(unsafeRes, GetAccountsModeBlockRpcResult);
                            if ("error" in res) throw res.error;
                            return res.result;
                        }

                      case "none":
                        {
                            const res = create(unsafeRes, GetNoneModeBlockRpcResult);
                            if ("error" in res) throw res.error;
                            return res.result;
                        }

                      default:
                        {
                            const res = create(unsafeRes, GetBlockRpcResult);
                            if ("error" in res) throw res.error;
                            const {result} = res;
                            return result ? {
                                ...result,
                                transactions: result.transactions.map((({transaction, meta, version}) => ({
                                    meta,
                                    transaction: {
                                        ...transaction,
                                        message: versionedMessageFromResponse(version, transaction.message)
                                    },
                                    version
                                })))
                            } : null;
                        }
                    }
                } catch (e) {
                    throw new SolanaJSONRPCError(e, "failed to get confirmed block");
                }
            }
            async getParsedBlock(slot, rawConfig) {
                const {commitment, config} = extractCommitmentFromConfig(rawConfig);
                const args = this._buildArgsAtLeastConfirmed([ slot ], commitment, "jsonParsed", config);
                const unsafeRes = await this._rpcRequest("getBlock", args);
                try {
                    switch (config?.transactionDetails) {
                      case "accounts":
                        {
                            const res = create(unsafeRes, GetParsedAccountsModeBlockRpcResult);
                            if ("error" in res) throw res.error;
                            return res.result;
                        }

                      case "none":
                        {
                            const res = create(unsafeRes, GetParsedNoneModeBlockRpcResult);
                            if ("error" in res) throw res.error;
                            return res.result;
                        }

                      default:
                        {
                            const res = create(unsafeRes, GetParsedBlockRpcResult);
                            if ("error" in res) throw res.error;
                            return res.result;
                        }
                    }
                } catch (e) {
                    throw new SolanaJSONRPCError(e, "failed to get block");
                }
            }
            async getBlockProduction(configOrCommitment) {
                let extra;
                let commitment;
                if (typeof configOrCommitment === "string") commitment = configOrCommitment; else if (configOrCommitment) {
                    const {commitment: c, ...rest} = configOrCommitment;
                    commitment = c;
                    extra = rest;
                }
                const args = this._buildArgs([], commitment, "base64", extra);
                const unsafeRes = await this._rpcRequest("getBlockProduction", args);
                const res = create(unsafeRes, BlockProductionResponseStruct);
                if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get block production information");
                return res.result;
            }
            async getTransaction(signature, rawConfig) {
                const {commitment, config} = extractCommitmentFromConfig(rawConfig);
                const args = this._buildArgsAtLeastConfirmed([ signature ], commitment, void 0, config);
                const unsafeRes = await this._rpcRequest("getTransaction", args);
                const res = create(unsafeRes, GetTransactionRpcResult);
                if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get transaction");
                const result = res.result;
                if (!result) return result;
                return {
                    ...result,
                    transaction: {
                        ...result.transaction,
                        message: versionedMessageFromResponse(result.version, result.transaction.message)
                    }
                };
            }
            async getParsedTransaction(signature, commitmentOrConfig) {
                const {commitment, config} = extractCommitmentFromConfig(commitmentOrConfig);
                const args = this._buildArgsAtLeastConfirmed([ signature ], commitment, "jsonParsed", config);
                const unsafeRes = await this._rpcRequest("getTransaction", args);
                const res = create(unsafeRes, GetParsedTransactionRpcResult);
                if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get transaction");
                return res.result;
            }
            async getParsedTransactions(signatures, commitmentOrConfig) {
                const {commitment, config} = extractCommitmentFromConfig(commitmentOrConfig);
                const batch = signatures.map((signature => {
                    const args = this._buildArgsAtLeastConfirmed([ signature ], commitment, "jsonParsed", config);
                    return {
                        methodName: "getTransaction",
                        args
                    };
                }));
                const unsafeRes = await this._rpcBatchRequest(batch);
                const res = unsafeRes.map((unsafeRes => {
                    const res = create(unsafeRes, GetParsedTransactionRpcResult);
                    if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get transactions");
                    return res.result;
                }));
                return res;
            }
            async getTransactions(signatures, commitmentOrConfig) {
                const {commitment, config} = extractCommitmentFromConfig(commitmentOrConfig);
                const batch = signatures.map((signature => {
                    const args = this._buildArgsAtLeastConfirmed([ signature ], commitment, void 0, config);
                    return {
                        methodName: "getTransaction",
                        args
                    };
                }));
                const unsafeRes = await this._rpcBatchRequest(batch);
                const res = unsafeRes.map((unsafeRes => {
                    const res = create(unsafeRes, GetTransactionRpcResult);
                    if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get transactions");
                    const result = res.result;
                    if (!result) return result;
                    return {
                        ...result,
                        transaction: {
                            ...result.transaction,
                            message: versionedMessageFromResponse(result.version, result.transaction.message)
                        }
                    };
                }));
                return res;
            }
            async getConfirmedBlock(slot, commitment) {
                const args = this._buildArgsAtLeastConfirmed([ slot ], commitment);
                const unsafeRes = await this._rpcRequest("getConfirmedBlock", args);
                const res = create(unsafeRes, GetConfirmedBlockRpcResult);
                if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get confirmed block");
                const result = res.result;
                if (!result) throw new Error("Confirmed block " + slot + " not found");
                const block = {
                    ...result,
                    transactions: result.transactions.map((({transaction, meta}) => {
                        const message = new Message(transaction.message);
                        return {
                            meta,
                            transaction: {
                                ...transaction,
                                message
                            }
                        };
                    }))
                };
                return {
                    ...block,
                    transactions: block.transactions.map((({transaction, meta}) => ({
                        meta,
                        transaction: Transaction.populate(transaction.message, transaction.signatures)
                    })))
                };
            }
            async getBlocks(startSlot, endSlot, commitment) {
                const args = this._buildArgsAtLeastConfirmed(endSlot !== void 0 ? [ startSlot, endSlot ] : [ startSlot ], commitment);
                const unsafeRes = await this._rpcRequest("getBlocks", args);
                const res = create(unsafeRes, jsonRpcResult(array(index_es_number())));
                if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get blocks");
                return res.result;
            }
            async getBlockSignatures(slot, commitment) {
                const args = this._buildArgsAtLeastConfirmed([ slot ], commitment, void 0, {
                    transactionDetails: "signatures",
                    rewards: false
                });
                const unsafeRes = await this._rpcRequest("getBlock", args);
                const res = create(unsafeRes, GetBlockSignaturesRpcResult);
                if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get block");
                const result = res.result;
                if (!result) throw new Error("Block " + slot + " not found");
                return result;
            }
            async getConfirmedBlockSignatures(slot, commitment) {
                const args = this._buildArgsAtLeastConfirmed([ slot ], commitment, void 0, {
                    transactionDetails: "signatures",
                    rewards: false
                });
                const unsafeRes = await this._rpcRequest("getConfirmedBlock", args);
                const res = create(unsafeRes, GetBlockSignaturesRpcResult);
                if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get confirmed block");
                const result = res.result;
                if (!result) throw new Error("Confirmed block " + slot + " not found");
                return result;
            }
            async getConfirmedTransaction(signature, commitment) {
                const args = this._buildArgsAtLeastConfirmed([ signature ], commitment);
                const unsafeRes = await this._rpcRequest("getConfirmedTransaction", args);
                const res = create(unsafeRes, GetTransactionRpcResult);
                if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get transaction");
                const result = res.result;
                if (!result) return result;
                const message = new Message(result.transaction.message);
                const signatures = result.transaction.signatures;
                return {
                    ...result,
                    transaction: Transaction.populate(message, signatures)
                };
            }
            async getParsedConfirmedTransaction(signature, commitment) {
                const args = this._buildArgsAtLeastConfirmed([ signature ], commitment, "jsonParsed");
                const unsafeRes = await this._rpcRequest("getConfirmedTransaction", args);
                const res = create(unsafeRes, GetParsedTransactionRpcResult);
                if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get confirmed transaction");
                return res.result;
            }
            async getParsedConfirmedTransactions(signatures, commitment) {
                const batch = signatures.map((signature => {
                    const args = this._buildArgsAtLeastConfirmed([ signature ], commitment, "jsonParsed");
                    return {
                        methodName: "getConfirmedTransaction",
                        args
                    };
                }));
                const unsafeRes = await this._rpcBatchRequest(batch);
                const res = unsafeRes.map((unsafeRes => {
                    const res = create(unsafeRes, GetParsedTransactionRpcResult);
                    if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get confirmed transactions");
                    return res.result;
                }));
                return res;
            }
            async getConfirmedSignaturesForAddress(address, startSlot, endSlot) {
                let options = {};
                let firstAvailableBlock = await this.getFirstAvailableBlock();
                while (!("until" in options)) {
                    startSlot--;
                    if (startSlot <= 0 || startSlot < firstAvailableBlock) break;
                    try {
                        const block = await this.getConfirmedBlockSignatures(startSlot, "finalized");
                        if (block.signatures.length > 0) options.until = block.signatures[block.signatures.length - 1].toString();
                    } catch (err) {
                        if (err instanceof Error && err.message.includes("skipped")) continue; else throw err;
                    }
                }
                let highestConfirmedRoot = await this.getSlot("finalized");
                while (!("before" in options)) {
                    endSlot++;
                    if (endSlot > highestConfirmedRoot) break;
                    try {
                        const block = await this.getConfirmedBlockSignatures(endSlot);
                        if (block.signatures.length > 0) options.before = block.signatures[block.signatures.length - 1].toString();
                    } catch (err) {
                        if (err instanceof Error && err.message.includes("skipped")) continue; else throw err;
                    }
                }
                const confirmedSignatureInfo = await this.getConfirmedSignaturesForAddress2(address, options);
                return confirmedSignatureInfo.map((info => info.signature));
            }
            async getConfirmedSignaturesForAddress2(address, options, commitment) {
                const args = this._buildArgsAtLeastConfirmed([ address.toBase58() ], commitment, void 0, options);
                const unsafeRes = await this._rpcRequest("getConfirmedSignaturesForAddress2", args);
                const res = create(unsafeRes, GetConfirmedSignaturesForAddress2RpcResult);
                if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get confirmed signatures for address");
                return res.result;
            }
            async getSignaturesForAddress(address, options, commitment) {
                const args = this._buildArgsAtLeastConfirmed([ address.toBase58() ], commitment, void 0, options);
                const unsafeRes = await this._rpcRequest("getSignaturesForAddress", args);
                const res = create(unsafeRes, GetSignaturesForAddressRpcResult);
                if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get signatures for address");
                return res.result;
            }
            async getAddressLookupTable(accountKey, config) {
                const {context, value: accountInfo} = await this.getAccountInfoAndContext(accountKey, config);
                let value = null;
                if (accountInfo !== null) value = new AddressLookupTableAccount({
                    key: accountKey,
                    state: AddressLookupTableAccount.deserialize(accountInfo.data)
                });
                return {
                    context,
                    value
                };
            }
            async getNonceAndContext(nonceAccount, commitmentOrConfig) {
                const {context, value: accountInfo} = await this.getAccountInfoAndContext(nonceAccount, commitmentOrConfig);
                let value = null;
                if (accountInfo !== null) value = NonceAccount.fromAccountData(accountInfo.data);
                return {
                    context,
                    value
                };
            }
            async getNonce(nonceAccount, commitmentOrConfig) {
                return await this.getNonceAndContext(nonceAccount, commitmentOrConfig).then((x => x.value)).catch((e => {
                    throw new Error("failed to get nonce for account " + nonceAccount.toBase58() + ": " + e);
                }));
            }
            async requestAirdrop(to, lamports) {
                const unsafeRes = await this._rpcRequest("requestAirdrop", [ to.toBase58(), lamports ]);
                const res = create(unsafeRes, RequestAirdropRpcResult);
                if ("error" in res) throw new SolanaJSONRPCError(res.error, `airdrop to ${to.toBase58()} failed`);
                return res.result;
            }
            async _blockhashWithExpiryBlockHeight(disableCache) {
                if (!disableCache) {
                    while (this._pollingBlockhash) await sleep(100);
                    const timeSinceFetch = Date.now() - this._blockhashInfo.lastFetch;
                    const expired = timeSinceFetch >= BLOCKHASH_CACHE_TIMEOUT_MS;
                    if (this._blockhashInfo.latestBlockhash !== null && !expired) return this._blockhashInfo.latestBlockhash;
                }
                return await this._pollNewBlockhash();
            }
            async _pollNewBlockhash() {
                this._pollingBlockhash = true;
                try {
                    const startTime = Date.now();
                    const cachedLatestBlockhash = this._blockhashInfo.latestBlockhash;
                    const cachedBlockhash = cachedLatestBlockhash ? cachedLatestBlockhash.blockhash : null;
                    for (let i = 0; i < 50; i++) {
                        const latestBlockhash = await this.getLatestBlockhash("finalized");
                        if (cachedBlockhash !== latestBlockhash.blockhash) {
                            this._blockhashInfo = {
                                latestBlockhash,
                                lastFetch: Date.now(),
                                transactionSignatures: [],
                                simulatedSignatures: []
                            };
                            return latestBlockhash;
                        }
                        await sleep(MS_PER_SLOT / 2);
                    }
                    throw new Error(`Unable to obtain a new blockhash after ${Date.now() - startTime}ms`);
                } finally {
                    this._pollingBlockhash = false;
                }
            }
            async getStakeMinimumDelegation(config) {
                const {commitment, config: configArg} = extractCommitmentFromConfig(config);
                const args = this._buildArgs([], commitment, "base64", configArg);
                const unsafeRes = await this._rpcRequest("getStakeMinimumDelegation", args);
                const res = create(unsafeRes, jsonRpcResultAndContext(index_es_number()));
                if ("error" in res) throw new SolanaJSONRPCError(res.error, `failed to get stake minimum delegation`);
                return res.result;
            }
            async simulateTransaction(transactionOrMessage, configOrSigners, includeAccounts) {
                if ("message" in transactionOrMessage) {
                    const versionedTx = transactionOrMessage;
                    const wireTransaction = versionedTx.serialize();
                    const encodedTransaction = node_modules_buffer.hp.from(wireTransaction).toString("base64");
                    if (Array.isArray(configOrSigners) || includeAccounts !== void 0) throw new Error("Invalid arguments");
                    const config = configOrSigners || {};
                    config.encoding = "base64";
                    if (!("commitment" in config)) config.commitment = this.commitment;
                    const args = [ encodedTransaction, config ];
                    const unsafeRes = await this._rpcRequest("simulateTransaction", args);
                    const res = create(unsafeRes, SimulatedTransactionResponseStruct);
                    if ("error" in res) throw new Error("failed to simulate transaction: " + res.error.message);
                    return res.result;
                }
                let transaction;
                if (transactionOrMessage instanceof Transaction) {
                    let originalTx = transactionOrMessage;
                    transaction = new Transaction;
                    transaction.feePayer = originalTx.feePayer;
                    transaction.instructions = transactionOrMessage.instructions;
                    transaction.nonceInfo = originalTx.nonceInfo;
                    transaction.signatures = originalTx.signatures;
                } else {
                    transaction = Transaction.populate(transactionOrMessage);
                    transaction._message = transaction._json = void 0;
                }
                if (configOrSigners !== void 0 && !Array.isArray(configOrSigners)) throw new Error("Invalid arguments");
                const signers = configOrSigners;
                if (transaction.nonceInfo && signers) transaction.sign(...signers); else {
                    let disableCache = this._disableBlockhashCaching;
                    for (;;) {
                        const latestBlockhash = await this._blockhashWithExpiryBlockHeight(disableCache);
                        transaction.lastValidBlockHeight = latestBlockhash.lastValidBlockHeight;
                        transaction.recentBlockhash = latestBlockhash.blockhash;
                        if (!signers) break;
                        transaction.sign(...signers);
                        if (!transaction.signature) throw new Error("!signature");
                        const signature = transaction.signature.toString("base64");
                        if (!this._blockhashInfo.simulatedSignatures.includes(signature) && !this._blockhashInfo.transactionSignatures.includes(signature)) {
                            this._blockhashInfo.simulatedSignatures.push(signature);
                            break;
                        } else disableCache = true;
                    }
                }
                const message = transaction._compile();
                const signData = message.serialize();
                const wireTransaction = transaction._serialize(signData);
                const encodedTransaction = wireTransaction.toString("base64");
                const config = {
                    encoding: "base64",
                    commitment: this.commitment
                };
                if (includeAccounts) {
                    const addresses = (Array.isArray(includeAccounts) ? includeAccounts : message.nonProgramIds()).map((key => key.toBase58()));
                    config["accounts"] = {
                        encoding: "base64",
                        addresses
                    };
                }
                if (signers) config.sigVerify = true;
                const args = [ encodedTransaction, config ];
                const unsafeRes = await this._rpcRequest("simulateTransaction", args);
                const res = create(unsafeRes, SimulatedTransactionResponseStruct);
                if ("error" in res) {
                    let logs;
                    if ("data" in res.error) {
                        logs = res.error.data.logs;
                        if (logs && Array.isArray(logs)) {
                            const traceIndent = "\n    ";
                            const logTrace = traceIndent + logs.join(traceIndent);
                            console.error(res.error.message, logTrace);
                        }
                    }
                    throw new SendTransactionError("failed to simulate transaction: " + res.error.message, logs);
                }
                return res.result;
            }
            async sendTransaction(transaction, signersOrOptions, options) {
                if ("version" in transaction) {
                    if (signersOrOptions && Array.isArray(signersOrOptions)) throw new Error("Invalid arguments");
                    const wireTransaction = transaction.serialize();
                    return await this.sendRawTransaction(wireTransaction, signersOrOptions);
                }
                if (signersOrOptions === void 0 || !Array.isArray(signersOrOptions)) throw new Error("Invalid arguments");
                const signers = signersOrOptions;
                if (transaction.nonceInfo) transaction.sign(...signers); else {
                    let disableCache = this._disableBlockhashCaching;
                    for (;;) {
                        const latestBlockhash = await this._blockhashWithExpiryBlockHeight(disableCache);
                        transaction.lastValidBlockHeight = latestBlockhash.lastValidBlockHeight;
                        transaction.recentBlockhash = latestBlockhash.blockhash;
                        transaction.sign(...signers);
                        if (!transaction.signature) throw new Error("!signature");
                        const signature = transaction.signature.toString("base64");
                        if (!this._blockhashInfo.transactionSignatures.includes(signature)) {
                            this._blockhashInfo.transactionSignatures.push(signature);
                            break;
                        } else disableCache = true;
                    }
                }
                const wireTransaction = transaction.serialize();
                return await this.sendRawTransaction(wireTransaction, options);
            }
            async sendRawTransaction(rawTransaction, options) {
                const encodedTransaction = toBuffer(rawTransaction).toString("base64");
                const result = await this.sendEncodedTransaction(encodedTransaction, options);
                return result;
            }
            async sendEncodedTransaction(encodedTransaction, options) {
                const config = {
                    encoding: "base64"
                };
                const skipPreflight = options && options.skipPreflight;
                const preflightCommitment = options && options.preflightCommitment || this.commitment;
                if (options && options.maxRetries != null) config.maxRetries = options.maxRetries;
                if (options && options.minContextSlot != null) config.minContextSlot = options.minContextSlot;
                if (skipPreflight) config.skipPreflight = skipPreflight;
                if (preflightCommitment) config.preflightCommitment = preflightCommitment;
                const args = [ encodedTransaction, config ];
                const unsafeRes = await this._rpcRequest("sendTransaction", args);
                const res = create(unsafeRes, SendTransactionRpcResult);
                if ("error" in res) {
                    let logs;
                    if ("data" in res.error) logs = res.error.data.logs;
                    throw new SendTransactionError("failed to send transaction: " + res.error.message, logs);
                }
                return res.result;
            }
            _wsOnOpen() {
                this._rpcWebSocketConnected = true;
                this._rpcWebSocketHeartbeat = setInterval((() => {
                    (async () => {
                        try {
                            await this._rpcWebSocket.notify("ping");
                        } catch {}
                    })();
                }), 5e3);
                this._updateSubscriptions();
            }
            _wsOnError(err) {
                this._rpcWebSocketConnected = false;
                console.error("ws error:", err.message);
            }
            _wsOnClose(code) {
                this._rpcWebSocketConnected = false;
                this._rpcWebSocketGeneration = (this._rpcWebSocketGeneration + 1) % Number.MAX_SAFE_INTEGER;
                if (this._rpcWebSocketIdleTimeout) {
                    clearTimeout(this._rpcWebSocketIdleTimeout);
                    this._rpcWebSocketIdleTimeout = null;
                }
                if (this._rpcWebSocketHeartbeat) {
                    clearInterval(this._rpcWebSocketHeartbeat);
                    this._rpcWebSocketHeartbeat = null;
                }
                if (code === 1e3) {
                    this._updateSubscriptions();
                    return;
                }
                this._subscriptionCallbacksByServerSubscriptionId = {};
                Object.entries(this._subscriptionsByHash).forEach((([hash, subscription]) => {
                    this._setSubscription(hash, {
                        ...subscription,
                        state: "pending"
                    });
                }));
            }
            _setSubscription(hash, nextSubscription) {
                const prevState = this._subscriptionsByHash[hash]?.state;
                this._subscriptionsByHash[hash] = nextSubscription;
                if (prevState !== nextSubscription.state) {
                    const stateChangeCallbacks = this._subscriptionStateChangeCallbacksByHash[hash];
                    if (stateChangeCallbacks) stateChangeCallbacks.forEach((cb => {
                        try {
                            cb(nextSubscription.state);
                        } catch {}
                    }));
                }
            }
            _onSubscriptionStateChange(clientSubscriptionId, callback) {
                const hash = this._subscriptionHashByClientSubscriptionId[clientSubscriptionId];
                if (hash == null) return () => {};
                const stateChangeCallbacks = this._subscriptionStateChangeCallbacksByHash[hash] ||= new Set;
                stateChangeCallbacks.add(callback);
                return () => {
                    stateChangeCallbacks.delete(callback);
                    if (stateChangeCallbacks.size === 0) delete this._subscriptionStateChangeCallbacksByHash[hash];
                };
            }
            async _updateSubscriptions() {
                if (Object.keys(this._subscriptionsByHash).length === 0) {
                    if (this._rpcWebSocketConnected) {
                        this._rpcWebSocketConnected = false;
                        this._rpcWebSocketIdleTimeout = setTimeout((() => {
                            this._rpcWebSocketIdleTimeout = null;
                            try {
                                this._rpcWebSocket.close();
                            } catch (err) {
                                if (err instanceof Error) console.log(`Error when closing socket connection: ${err.message}`);
                            }
                        }), 500);
                    }
                    return;
                }
                if (this._rpcWebSocketIdleTimeout !== null) {
                    clearTimeout(this._rpcWebSocketIdleTimeout);
                    this._rpcWebSocketIdleTimeout = null;
                    this._rpcWebSocketConnected = true;
                }
                if (!this._rpcWebSocketConnected) {
                    this._rpcWebSocket.connect();
                    return;
                }
                const activeWebSocketGeneration = this._rpcWebSocketGeneration;
                const isCurrentConnectionStillActive = () => activeWebSocketGeneration === this._rpcWebSocketGeneration;
                await Promise.all(Object.keys(this._subscriptionsByHash).map((async hash => {
                    const subscription = this._subscriptionsByHash[hash];
                    if (subscription === void 0) return;
                    switch (subscription.state) {
                      case "pending":
                      case "unsubscribed":
                        if (subscription.callbacks.size === 0) {
                            delete this._subscriptionsByHash[hash];
                            if (subscription.state === "unsubscribed") delete this._subscriptionCallbacksByServerSubscriptionId[subscription.serverSubscriptionId];
                            await this._updateSubscriptions();
                            return;
                        }
                        await (async () => {
                            const {args, method} = subscription;
                            try {
                                this._setSubscription(hash, {
                                    ...subscription,
                                    state: "subscribing"
                                });
                                const serverSubscriptionId = await this._rpcWebSocket.call(method, args);
                                this._setSubscription(hash, {
                                    ...subscription,
                                    serverSubscriptionId,
                                    state: "subscribed"
                                });
                                this._subscriptionCallbacksByServerSubscriptionId[serverSubscriptionId] = subscription.callbacks;
                                await this._updateSubscriptions();
                            } catch (e) {
                                if (e instanceof Error) console.error(`${method} error for argument`, args, e.message);
                                if (!isCurrentConnectionStillActive()) return;
                                this._setSubscription(hash, {
                                    ...subscription,
                                    state: "pending"
                                });
                                await this._updateSubscriptions();
                            }
                        })();
                        break;

                      case "subscribed":
                        if (subscription.callbacks.size === 0) await (async () => {
                            const {serverSubscriptionId, unsubscribeMethod} = subscription;
                            if (this._subscriptionsAutoDisposedByRpc.has(serverSubscriptionId)) this._subscriptionsAutoDisposedByRpc.delete(serverSubscriptionId); else {
                                this._setSubscription(hash, {
                                    ...subscription,
                                    state: "unsubscribing"
                                });
                                this._setSubscription(hash, {
                                    ...subscription,
                                    state: "unsubscribing"
                                });
                                try {
                                    await this._rpcWebSocket.call(unsubscribeMethod, [ serverSubscriptionId ]);
                                } catch (e) {
                                    if (e instanceof Error) console.error(`${unsubscribeMethod} error:`, e.message);
                                    if (!isCurrentConnectionStillActive()) return;
                                    this._setSubscription(hash, {
                                        ...subscription,
                                        state: "subscribed"
                                    });
                                    await this._updateSubscriptions();
                                    return;
                                }
                            }
                            this._setSubscription(hash, {
                                ...subscription,
                                state: "unsubscribed"
                            });
                            await this._updateSubscriptions();
                        })();
                        break;
                    }
                })));
            }
            _handleServerNotification(serverSubscriptionId, callbackArgs) {
                const callbacks = this._subscriptionCallbacksByServerSubscriptionId[serverSubscriptionId];
                if (callbacks === void 0) return;
                callbacks.forEach((cb => {
                    try {
                        cb(...callbackArgs);
                    } catch (e) {
                        console.error(e);
                    }
                }));
            }
            _wsOnAccountNotification(notification) {
                const {result, subscription} = create(notification, AccountNotificationResult);
                this._handleServerNotification(subscription, [ result.value, result.context ]);
            }
            _makeSubscription(subscriptionConfig, args) {
                const clientSubscriptionId = this._nextClientSubscriptionId++;
                const hash = fastStableStringify$1([ subscriptionConfig.method, args ], true);
                const existingSubscription = this._subscriptionsByHash[hash];
                if (existingSubscription === void 0) this._subscriptionsByHash[hash] = {
                    ...subscriptionConfig,
                    args,
                    callbacks: new Set([ subscriptionConfig.callback ]),
                    state: "pending"
                }; else existingSubscription.callbacks.add(subscriptionConfig.callback);
                this._subscriptionHashByClientSubscriptionId[clientSubscriptionId] = hash;
                this._subscriptionDisposeFunctionsByClientSubscriptionId[clientSubscriptionId] = async () => {
                    delete this._subscriptionDisposeFunctionsByClientSubscriptionId[clientSubscriptionId];
                    delete this._subscriptionHashByClientSubscriptionId[clientSubscriptionId];
                    const subscription = this._subscriptionsByHash[hash];
                    index_browser_esm_assert(subscription !== void 0, `Could not find a \`Subscription\` when tearing down client subscription #${clientSubscriptionId}`);
                    subscription.callbacks.delete(subscriptionConfig.callback);
                    await this._updateSubscriptions();
                };
                this._updateSubscriptions();
                return clientSubscriptionId;
            }
            onAccountChange(publicKey, callback, commitment) {
                const args = this._buildArgs([ publicKey.toBase58() ], commitment || this._commitment || "finalized", "base64");
                return this._makeSubscription({
                    callback,
                    method: "accountSubscribe",
                    unsubscribeMethod: "accountUnsubscribe"
                }, args);
            }
            async removeAccountChangeListener(clientSubscriptionId) {
                await this._unsubscribeClientSubscription(clientSubscriptionId, "account change");
            }
            _wsOnProgramAccountNotification(notification) {
                const {result, subscription} = create(notification, ProgramAccountNotificationResult);
                this._handleServerNotification(subscription, [ {
                    accountId: result.value.pubkey,
                    accountInfo: result.value.account
                }, result.context ]);
            }
            onProgramAccountChange(programId, callback, commitment, filters) {
                const args = this._buildArgs([ programId.toBase58() ], commitment || this._commitment || "finalized", "base64", filters ? {
                    filters
                } : void 0);
                return this._makeSubscription({
                    callback,
                    method: "programSubscribe",
                    unsubscribeMethod: "programUnsubscribe"
                }, args);
            }
            async removeProgramAccountChangeListener(clientSubscriptionId) {
                await this._unsubscribeClientSubscription(clientSubscriptionId, "program account change");
            }
            onLogs(filter, callback, commitment) {
                const args = this._buildArgs([ typeof filter === "object" ? {
                    mentions: [ filter.toString() ]
                } : filter ], commitment || this._commitment || "finalized");
                return this._makeSubscription({
                    callback,
                    method: "logsSubscribe",
                    unsubscribeMethod: "logsUnsubscribe"
                }, args);
            }
            async removeOnLogsListener(clientSubscriptionId) {
                await this._unsubscribeClientSubscription(clientSubscriptionId, "logs");
            }
            _wsOnLogsNotification(notification) {
                const {result, subscription} = create(notification, LogsNotificationResult);
                this._handleServerNotification(subscription, [ result.value, result.context ]);
            }
            _wsOnSlotNotification(notification) {
                const {result, subscription} = create(notification, SlotNotificationResult);
                this._handleServerNotification(subscription, [ result ]);
            }
            onSlotChange(callback) {
                return this._makeSubscription({
                    callback,
                    method: "slotSubscribe",
                    unsubscribeMethod: "slotUnsubscribe"
                }, []);
            }
            async removeSlotChangeListener(clientSubscriptionId) {
                await this._unsubscribeClientSubscription(clientSubscriptionId, "slot change");
            }
            _wsOnSlotUpdatesNotification(notification) {
                const {result, subscription} = create(notification, SlotUpdateNotificationResult);
                this._handleServerNotification(subscription, [ result ]);
            }
            onSlotUpdate(callback) {
                return this._makeSubscription({
                    callback,
                    method: "slotsUpdatesSubscribe",
                    unsubscribeMethod: "slotsUpdatesUnsubscribe"
                }, []);
            }
            async removeSlotUpdateListener(clientSubscriptionId) {
                await this._unsubscribeClientSubscription(clientSubscriptionId, "slot update");
            }
            async _unsubscribeClientSubscription(clientSubscriptionId, subscriptionName) {
                const dispose = this._subscriptionDisposeFunctionsByClientSubscriptionId[clientSubscriptionId];
                if (dispose) await dispose(); else console.warn("Ignored unsubscribe request because an active subscription with id " + `\`${clientSubscriptionId}\` for '${subscriptionName}' events ` + "could not be found.");
            }
            _buildArgs(args, override, encoding, extra) {
                const commitment = override || this._commitment;
                if (commitment || encoding || extra) {
                    let options = {};
                    if (encoding) options.encoding = encoding;
                    if (commitment) options.commitment = commitment;
                    if (extra) options = Object.assign(options, extra);
                    args.push(options);
                }
                return args;
            }
            _buildArgsAtLeastConfirmed(args, override, encoding, extra) {
                const commitment = override || this._commitment;
                if (commitment && ![ "confirmed", "finalized" ].includes(commitment)) throw new Error("Using Connection with default commitment: `" + this._commitment + "`, but method requires at least `confirmed`");
                return this._buildArgs(args, override, encoding, extra);
            }
            _wsOnSignatureNotification(notification) {
                const {result, subscription} = create(notification, SignatureNotificationResult);
                if (result.value !== "receivedSignature") this._subscriptionsAutoDisposedByRpc.add(subscription);
                this._handleServerNotification(subscription, result.value === "receivedSignature" ? [ {
                    type: "received"
                }, result.context ] : [ {
                    type: "status",
                    result: result.value
                }, result.context ]);
            }
            onSignature(signature, callback, commitment) {
                const args = this._buildArgs([ signature ], commitment || this._commitment || "finalized");
                const clientSubscriptionId = this._makeSubscription({
                    callback: (notification, context) => {
                        if (notification.type === "status") {
                            callback(notification.result, context);
                            try {
                                this.removeSignatureListener(clientSubscriptionId);
                            } catch (_err) {}
                        }
                    },
                    method: "signatureSubscribe",
                    unsubscribeMethod: "signatureUnsubscribe"
                }, args);
                return clientSubscriptionId;
            }
            onSignatureWithOptions(signature, callback, options) {
                const {commitment, ...extra} = {
                    ...options,
                    commitment: options && options.commitment || this._commitment || "finalized"
                };
                const args = this._buildArgs([ signature ], commitment, void 0, extra);
                const clientSubscriptionId = this._makeSubscription({
                    callback: (notification, context) => {
                        callback(notification, context);
                        try {
                            this.removeSignatureListener(clientSubscriptionId);
                        } catch (_err) {}
                    },
                    method: "signatureSubscribe",
                    unsubscribeMethod: "signatureUnsubscribe"
                }, args);
                return clientSubscriptionId;
            }
            async removeSignatureListener(clientSubscriptionId) {
                await this._unsubscribeClientSubscription(clientSubscriptionId, "signature result");
            }
            _wsOnRootNotification(notification) {
                const {result, subscription} = create(notification, RootNotificationResult);
                this._handleServerNotification(subscription, [ result ]);
            }
            onRootChange(callback) {
                return this._makeSubscription({
                    callback,
                    method: "rootSubscribe",
                    unsubscribeMethod: "rootUnsubscribe"
                }, []);
            }
            async removeRootChangeListener(clientSubscriptionId) {
                await this._unsubscribeClientSubscription(clientSubscriptionId, "root change");
            }
        }
        class Keypair {
            constructor(keypair) {
                this._keypair = void 0;
                this._keypair = keypair ?? generateKeypair();
            }
            static generate() {
                return new Keypair(generateKeypair());
            }
            static fromSecretKey(secretKey, options) {
                if (secretKey.byteLength !== 64) throw new Error("bad secret key size");
                const publicKey = secretKey.slice(32, 64);
                if (!options || !options.skipValidation) {
                    const privateScalar = secretKey.slice(0, 32);
                    const computedPublicKey = getPublicKey(privateScalar);
                    for (let ii = 0; ii < 32; ii++) if (publicKey[ii] !== computedPublicKey[ii]) throw new Error("provided secretKey is invalid");
                }
                return new Keypair({
                    publicKey,
                    secretKey
                });
            }
            static fromSeed(seed) {
                const publicKey = getPublicKey(seed);
                const secretKey = new Uint8Array(64);
                secretKey.set(seed);
                secretKey.set(publicKey, 32);
                return new Keypair({
                    publicKey,
                    secretKey
                });
            }
            get publicKey() {
                return new PublicKey(this._keypair.publicKey);
            }
            get secretKey() {
                return new Uint8Array(this._keypair.secretKey);
            }
        }
        const LOOKUP_TABLE_INSTRUCTION_LAYOUTS = Object.freeze({
            CreateLookupTable: {
                index: 0,
                layout: Layout.w3([ Layout.DH("instruction"), index_browser_esm_u64("recentSlot"), Layout.u8("bumpSeed") ])
            },
            FreezeLookupTable: {
                index: 1,
                layout: Layout.w3([ Layout.DH("instruction") ])
            },
            ExtendLookupTable: {
                index: 2,
                layout: Layout.w3([ Layout.DH("instruction"), index_browser_esm_u64(), Layout.O6(publicKey(), Layout.cY(Layout.DH(), -8), "addresses") ])
            },
            DeactivateLookupTable: {
                index: 3,
                layout: Layout.w3([ Layout.DH("instruction") ])
            },
            CloseLookupTable: {
                index: 4,
                layout: Layout.w3([ Layout.DH("instruction") ])
            }
        });
        class AddressLookupTableProgram {
            constructor() {}
            static createLookupTable(params) {
                const [lookupTableAddress, bumpSeed] = PublicKey.findProgramAddressSync([ params.authority.toBuffer(), (0, 
                browser.Bq)(BigInt(params.recentSlot), 8) ], this.programId);
                const type = LOOKUP_TABLE_INSTRUCTION_LAYOUTS.CreateLookupTable;
                const data = encodeData(type, {
                    recentSlot: BigInt(params.recentSlot),
                    bumpSeed
                });
                const keys = [ {
                    pubkey: lookupTableAddress,
                    isSigner: false,
                    isWritable: true
                }, {
                    pubkey: params.authority,
                    isSigner: true,
                    isWritable: false
                }, {
                    pubkey: params.payer,
                    isSigner: true,
                    isWritable: true
                }, {
                    pubkey: SystemProgram.programId,
                    isSigner: false,
                    isWritable: false
                } ];
                return [ new TransactionInstruction({
                    programId: this.programId,
                    keys,
                    data
                }), lookupTableAddress ];
            }
            static freezeLookupTable(params) {
                const type = LOOKUP_TABLE_INSTRUCTION_LAYOUTS.FreezeLookupTable;
                const data = encodeData(type);
                const keys = [ {
                    pubkey: params.lookupTable,
                    isSigner: false,
                    isWritable: true
                }, {
                    pubkey: params.authority,
                    isSigner: true,
                    isWritable: false
                } ];
                return new TransactionInstruction({
                    programId: this.programId,
                    keys,
                    data
                });
            }
            static extendLookupTable(params) {
                const type = LOOKUP_TABLE_INSTRUCTION_LAYOUTS.ExtendLookupTable;
                const data = encodeData(type, {
                    addresses: params.addresses.map((addr => addr.toBytes()))
                });
                const keys = [ {
                    pubkey: params.lookupTable,
                    isSigner: false,
                    isWritable: true
                }, {
                    pubkey: params.authority,
                    isSigner: true,
                    isWritable: false
                } ];
                if (params.payer) keys.push({
                    pubkey: params.payer,
                    isSigner: true,
                    isWritable: true
                }, {
                    pubkey: SystemProgram.programId,
                    isSigner: false,
                    isWritable: false
                });
                return new TransactionInstruction({
                    programId: this.programId,
                    keys,
                    data
                });
            }
            static deactivateLookupTable(params) {
                const type = LOOKUP_TABLE_INSTRUCTION_LAYOUTS.DeactivateLookupTable;
                const data = encodeData(type);
                const keys = [ {
                    pubkey: params.lookupTable,
                    isSigner: false,
                    isWritable: true
                }, {
                    pubkey: params.authority,
                    isSigner: true,
                    isWritable: false
                } ];
                return new TransactionInstruction({
                    programId: this.programId,
                    keys,
                    data
                });
            }
            static closeLookupTable(params) {
                const type = LOOKUP_TABLE_INSTRUCTION_LAYOUTS.CloseLookupTable;
                const data = encodeData(type);
                const keys = [ {
                    pubkey: params.lookupTable,
                    isSigner: false,
                    isWritable: true
                }, {
                    pubkey: params.authority,
                    isSigner: true,
                    isWritable: false
                }, {
                    pubkey: params.recipient,
                    isSigner: false,
                    isWritable: true
                } ];
                return new TransactionInstruction({
                    programId: this.programId,
                    keys,
                    data
                });
            }
        }
        AddressLookupTableProgram.programId = new PublicKey("AddressLookupTab1e1111111111111111111111111");
        const COMPUTE_BUDGET_INSTRUCTION_LAYOUTS = Object.freeze({
            RequestUnits: {
                index: 0,
                layout: Layout.w3([ Layout.u8("instruction"), Layout.DH("units"), Layout.DH("additionalFee") ])
            },
            RequestHeapFrame: {
                index: 1,
                layout: Layout.w3([ Layout.u8("instruction"), Layout.DH("bytes") ])
            },
            SetComputeUnitLimit: {
                index: 2,
                layout: Layout.w3([ Layout.u8("instruction"), Layout.DH("units") ])
            },
            SetComputeUnitPrice: {
                index: 3,
                layout: Layout.w3([ Layout.u8("instruction"), index_browser_esm_u64("microLamports") ])
            }
        });
        class ComputeBudgetProgram {
            constructor() {}
            static requestUnits(params) {
                const type = COMPUTE_BUDGET_INSTRUCTION_LAYOUTS.RequestUnits;
                const data = encodeData(type, params);
                return new TransactionInstruction({
                    keys: [],
                    programId: this.programId,
                    data
                });
            }
            static requestHeapFrame(params) {
                const type = COMPUTE_BUDGET_INSTRUCTION_LAYOUTS.RequestHeapFrame;
                const data = encodeData(type, params);
                return new TransactionInstruction({
                    keys: [],
                    programId: this.programId,
                    data
                });
            }
            static setComputeUnitLimit(params) {
                const type = COMPUTE_BUDGET_INSTRUCTION_LAYOUTS.SetComputeUnitLimit;
                const data = encodeData(type, params);
                return new TransactionInstruction({
                    keys: [],
                    programId: this.programId,
                    data
                });
            }
            static setComputeUnitPrice(params) {
                const type = COMPUTE_BUDGET_INSTRUCTION_LAYOUTS.SetComputeUnitPrice;
                const data = encodeData(type, {
                    microLamports: BigInt(params.microLamports)
                });
                return new TransactionInstruction({
                    keys: [],
                    programId: this.programId,
                    data
                });
            }
        }
        ComputeBudgetProgram.programId = new PublicKey("ComputeBudget111111111111111111111111111111");
        const PRIVATE_KEY_BYTES$1 = 64;
        const PUBLIC_KEY_BYTES$1 = 32;
        const SIGNATURE_BYTES = 64;
        const ED25519_INSTRUCTION_LAYOUT = Layout.w3([ Layout.u8("numSignatures"), Layout.u8("padding"), Layout.NX("signatureOffset"), Layout.NX("signatureInstructionIndex"), Layout.NX("publicKeyOffset"), Layout.NX("publicKeyInstructionIndex"), Layout.NX("messageDataOffset"), Layout.NX("messageDataSize"), Layout.NX("messageInstructionIndex") ]);
        class Ed25519Program {
            constructor() {}
            static createInstructionWithPublicKey(params) {
                const {publicKey, message, signature, instructionIndex} = params;
                index_browser_esm_assert(publicKey.length === PUBLIC_KEY_BYTES$1, `Public Key must be ${PUBLIC_KEY_BYTES$1} bytes but received ${publicKey.length} bytes`);
                index_browser_esm_assert(signature.length === SIGNATURE_BYTES, `Signature must be ${SIGNATURE_BYTES} bytes but received ${signature.length} bytes`);
                const publicKeyOffset = ED25519_INSTRUCTION_LAYOUT.span;
                const signatureOffset = publicKeyOffset + publicKey.length;
                const messageDataOffset = signatureOffset + signature.length;
                const numSignatures = 1;
                const instructionData = node_modules_buffer.hp.alloc(messageDataOffset + message.length);
                const index = instructionIndex == null ? 65535 : instructionIndex;
                ED25519_INSTRUCTION_LAYOUT.encode({
                    numSignatures,
                    padding: 0,
                    signatureOffset,
                    signatureInstructionIndex: index,
                    publicKeyOffset,
                    publicKeyInstructionIndex: index,
                    messageDataOffset,
                    messageDataSize: message.length,
                    messageInstructionIndex: index
                }, instructionData);
                instructionData.fill(publicKey, publicKeyOffset);
                instructionData.fill(signature, signatureOffset);
                instructionData.fill(message, messageDataOffset);
                return new TransactionInstruction({
                    keys: [],
                    programId: Ed25519Program.programId,
                    data: instructionData
                });
            }
            static createInstructionWithPrivateKey(params) {
                const {privateKey, message, instructionIndex} = params;
                index_browser_esm_assert(privateKey.length === PRIVATE_KEY_BYTES$1, `Private key must be ${PRIVATE_KEY_BYTES$1} bytes but received ${privateKey.length} bytes`);
                try {
                    const keypair = Keypair.fromSecretKey(privateKey);
                    const publicKey = keypair.publicKey.toBytes();
                    const signature = sign(message, keypair.secretKey);
                    return this.createInstructionWithPublicKey({
                        publicKey,
                        message,
                        signature,
                        instructionIndex
                    });
                } catch (error) {
                    throw new Error(`Error creating instruction; ${error}`);
                }
            }
        }
        Ed25519Program.programId = new PublicKey("Ed25519SigVerify111111111111111111111111111");
        const ecdsaSign = (msgHash, privKey) => {
            const signature = secp256k1.sign(msgHash, privKey);
            return [ signature.toCompactRawBytes(), signature.recovery ];
        };
        secp256k1.utils.isValidPrivateKey;
        const publicKeyCreate = secp256k1.getPublicKey;
        const PRIVATE_KEY_BYTES = 32;
        const ETHEREUM_ADDRESS_BYTES = 20;
        const PUBLIC_KEY_BYTES = 64;
        const SIGNATURE_OFFSETS_SERIALIZED_SIZE = 11;
        const SECP256K1_INSTRUCTION_LAYOUT = Layout.w3([ Layout.u8("numSignatures"), Layout.NX("signatureOffset"), Layout.u8("signatureInstructionIndex"), Layout.NX("ethAddressOffset"), Layout.u8("ethAddressInstructionIndex"), Layout.NX("messageDataOffset"), Layout.NX("messageDataSize"), Layout.u8("messageInstructionIndex"), Layout.av(20, "ethAddress"), Layout.av(64, "signature"), Layout.u8("recoveryId") ]);
        class Secp256k1Program {
            constructor() {}
            static publicKeyToEthAddress(publicKey) {
                index_browser_esm_assert(publicKey.length === PUBLIC_KEY_BYTES, `Public key must be ${PUBLIC_KEY_BYTES} bytes but received ${publicKey.length} bytes`);
                try {
                    return node_modules_buffer.hp.from(keccak_256(toBuffer(publicKey))).slice(-ETHEREUM_ADDRESS_BYTES);
                } catch (error) {
                    throw new Error(`Error constructing Ethereum address: ${error}`);
                }
            }
            static createInstructionWithPublicKey(params) {
                const {publicKey, message, signature, recoveryId, instructionIndex} = params;
                return Secp256k1Program.createInstructionWithEthAddress({
                    ethAddress: Secp256k1Program.publicKeyToEthAddress(publicKey),
                    message,
                    signature,
                    recoveryId,
                    instructionIndex
                });
            }
            static createInstructionWithEthAddress(params) {
                const {ethAddress: rawAddress, message, signature, recoveryId, instructionIndex = 0} = params;
                let ethAddress;
                if (typeof rawAddress === "string") if (rawAddress.startsWith("0x")) ethAddress = node_modules_buffer.hp.from(rawAddress.substr(2), "hex"); else ethAddress = node_modules_buffer.hp.from(rawAddress, "hex"); else ethAddress = rawAddress;
                index_browser_esm_assert(ethAddress.length === ETHEREUM_ADDRESS_BYTES, `Address must be ${ETHEREUM_ADDRESS_BYTES} bytes but received ${ethAddress.length} bytes`);
                const dataStart = 1 + SIGNATURE_OFFSETS_SERIALIZED_SIZE;
                const ethAddressOffset = dataStart;
                const signatureOffset = dataStart + ethAddress.length;
                const messageDataOffset = signatureOffset + signature.length + 1;
                const numSignatures = 1;
                const instructionData = node_modules_buffer.hp.alloc(SECP256K1_INSTRUCTION_LAYOUT.span + message.length);
                SECP256K1_INSTRUCTION_LAYOUT.encode({
                    numSignatures,
                    signatureOffset,
                    signatureInstructionIndex: instructionIndex,
                    ethAddressOffset,
                    ethAddressInstructionIndex: instructionIndex,
                    messageDataOffset,
                    messageDataSize: message.length,
                    messageInstructionIndex: instructionIndex,
                    signature: toBuffer(signature),
                    ethAddress: toBuffer(ethAddress),
                    recoveryId
                }, instructionData);
                instructionData.fill(toBuffer(message), SECP256K1_INSTRUCTION_LAYOUT.span);
                return new TransactionInstruction({
                    keys: [],
                    programId: Secp256k1Program.programId,
                    data: instructionData
                });
            }
            static createInstructionWithPrivateKey(params) {
                const {privateKey: pkey, message, instructionIndex} = params;
                index_browser_esm_assert(pkey.length === PRIVATE_KEY_BYTES, `Private key must be ${PRIVATE_KEY_BYTES} bytes but received ${pkey.length} bytes`);
                try {
                    const privateKey = toBuffer(pkey);
                    const publicKey = publicKeyCreate(privateKey, false).slice(1);
                    const messageHash = node_modules_buffer.hp.from(keccak_256(toBuffer(message)));
                    const [signature, recoveryId] = ecdsaSign(messageHash, privateKey);
                    return this.createInstructionWithPublicKey({
                        publicKey,
                        message,
                        signature,
                        recoveryId,
                        instructionIndex
                    });
                } catch (error) {
                    throw new Error(`Error creating instruction; ${error}`);
                }
            }
        }
        Secp256k1Program.programId = new PublicKey("KeccakSecp256k11111111111111111111111111111");
        var _class2;
        const STAKE_CONFIG_ID = new PublicKey("StakeConfig11111111111111111111111111111111");
        class Lockup {
            constructor(unixTimestamp, epoch, custodian) {
                this.unixTimestamp = void 0;
                this.epoch = void 0;
                this.custodian = void 0;
                this.unixTimestamp = unixTimestamp;
                this.epoch = epoch;
                this.custodian = custodian;
            }
        }
        _class2 = Lockup;
        Lockup.default = new _class2(0, 0, PublicKey.default);
        const STAKE_INSTRUCTION_LAYOUTS = Object.freeze({
            Initialize: {
                index: 0,
                layout: Layout.w3([ Layout.DH("instruction"), authorized(), lockup() ])
            },
            Authorize: {
                index: 1,
                layout: Layout.w3([ Layout.DH("instruction"), publicKey("newAuthorized"), Layout.DH("stakeAuthorizationType") ])
            },
            Delegate: {
                index: 2,
                layout: Layout.w3([ Layout.DH("instruction") ])
            },
            Split: {
                index: 3,
                layout: Layout.w3([ Layout.DH("instruction"), Layout.Wg("lamports") ])
            },
            Withdraw: {
                index: 4,
                layout: Layout.w3([ Layout.DH("instruction"), Layout.Wg("lamports") ])
            },
            Deactivate: {
                index: 5,
                layout: Layout.w3([ Layout.DH("instruction") ])
            },
            Merge: {
                index: 7,
                layout: Layout.w3([ Layout.DH("instruction") ])
            },
            AuthorizeWithSeed: {
                index: 8,
                layout: Layout.w3([ Layout.DH("instruction"), publicKey("newAuthorized"), Layout.DH("stakeAuthorizationType"), rustString("authoritySeed"), publicKey("authorityOwner") ])
            }
        });
        Object.freeze({
            Staker: {
                index: 0
            },
            Withdrawer: {
                index: 1
            }
        });
        class StakeProgram {
            constructor() {}
            static initialize(params) {
                const {stakePubkey, authorized, lockup: maybeLockup} = params;
                const lockup = maybeLockup || Lockup.default;
                const type = STAKE_INSTRUCTION_LAYOUTS.Initialize;
                const data = encodeData(type, {
                    authorized: {
                        staker: toBuffer(authorized.staker.toBuffer()),
                        withdrawer: toBuffer(authorized.withdrawer.toBuffer())
                    },
                    lockup: {
                        unixTimestamp: lockup.unixTimestamp,
                        epoch: lockup.epoch,
                        custodian: toBuffer(lockup.custodian.toBuffer())
                    }
                });
                const instructionData = {
                    keys: [ {
                        pubkey: stakePubkey,
                        isSigner: false,
                        isWritable: true
                    }, {
                        pubkey: SYSVAR_RENT_PUBKEY,
                        isSigner: false,
                        isWritable: false
                    } ],
                    programId: this.programId,
                    data
                };
                return new TransactionInstruction(instructionData);
            }
            static createAccountWithSeed(params) {
                const transaction = new Transaction;
                transaction.add(SystemProgram.createAccountWithSeed({
                    fromPubkey: params.fromPubkey,
                    newAccountPubkey: params.stakePubkey,
                    basePubkey: params.basePubkey,
                    seed: params.seed,
                    lamports: params.lamports,
                    space: this.space,
                    programId: this.programId
                }));
                const {stakePubkey, authorized, lockup} = params;
                return transaction.add(this.initialize({
                    stakePubkey,
                    authorized,
                    lockup
                }));
            }
            static createAccount(params) {
                const transaction = new Transaction;
                transaction.add(SystemProgram.createAccount({
                    fromPubkey: params.fromPubkey,
                    newAccountPubkey: params.stakePubkey,
                    lamports: params.lamports,
                    space: this.space,
                    programId: this.programId
                }));
                const {stakePubkey, authorized, lockup} = params;
                return transaction.add(this.initialize({
                    stakePubkey,
                    authorized,
                    lockup
                }));
            }
            static delegate(params) {
                const {stakePubkey, authorizedPubkey, votePubkey} = params;
                const type = STAKE_INSTRUCTION_LAYOUTS.Delegate;
                const data = encodeData(type);
                return (new Transaction).add({
                    keys: [ {
                        pubkey: stakePubkey,
                        isSigner: false,
                        isWritable: true
                    }, {
                        pubkey: votePubkey,
                        isSigner: false,
                        isWritable: false
                    }, {
                        pubkey: SYSVAR_CLOCK_PUBKEY,
                        isSigner: false,
                        isWritable: false
                    }, {
                        pubkey: SYSVAR_STAKE_HISTORY_PUBKEY,
                        isSigner: false,
                        isWritable: false
                    }, {
                        pubkey: STAKE_CONFIG_ID,
                        isSigner: false,
                        isWritable: false
                    }, {
                        pubkey: authorizedPubkey,
                        isSigner: true,
                        isWritable: false
                    } ],
                    programId: this.programId,
                    data
                });
            }
            static authorize(params) {
                const {stakePubkey, authorizedPubkey, newAuthorizedPubkey, stakeAuthorizationType, custodianPubkey} = params;
                const type = STAKE_INSTRUCTION_LAYOUTS.Authorize;
                const data = encodeData(type, {
                    newAuthorized: toBuffer(newAuthorizedPubkey.toBuffer()),
                    stakeAuthorizationType: stakeAuthorizationType.index
                });
                const keys = [ {
                    pubkey: stakePubkey,
                    isSigner: false,
                    isWritable: true
                }, {
                    pubkey: SYSVAR_CLOCK_PUBKEY,
                    isSigner: false,
                    isWritable: true
                }, {
                    pubkey: authorizedPubkey,
                    isSigner: true,
                    isWritable: false
                } ];
                if (custodianPubkey) keys.push({
                    pubkey: custodianPubkey,
                    isSigner: true,
                    isWritable: false
                });
                return (new Transaction).add({
                    keys,
                    programId: this.programId,
                    data
                });
            }
            static authorizeWithSeed(params) {
                const {stakePubkey, authorityBase, authoritySeed, authorityOwner, newAuthorizedPubkey, stakeAuthorizationType, custodianPubkey} = params;
                const type = STAKE_INSTRUCTION_LAYOUTS.AuthorizeWithSeed;
                const data = encodeData(type, {
                    newAuthorized: toBuffer(newAuthorizedPubkey.toBuffer()),
                    stakeAuthorizationType: stakeAuthorizationType.index,
                    authoritySeed,
                    authorityOwner: toBuffer(authorityOwner.toBuffer())
                });
                const keys = [ {
                    pubkey: stakePubkey,
                    isSigner: false,
                    isWritable: true
                }, {
                    pubkey: authorityBase,
                    isSigner: true,
                    isWritable: false
                }, {
                    pubkey: SYSVAR_CLOCK_PUBKEY,
                    isSigner: false,
                    isWritable: false
                } ];
                if (custodianPubkey) keys.push({
                    pubkey: custodianPubkey,
                    isSigner: true,
                    isWritable: false
                });
                return (new Transaction).add({
                    keys,
                    programId: this.programId,
                    data
                });
            }
            static splitInstruction(params) {
                const {stakePubkey, authorizedPubkey, splitStakePubkey, lamports} = params;
                const type = STAKE_INSTRUCTION_LAYOUTS.Split;
                const data = encodeData(type, {
                    lamports
                });
                return new TransactionInstruction({
                    keys: [ {
                        pubkey: stakePubkey,
                        isSigner: false,
                        isWritable: true
                    }, {
                        pubkey: splitStakePubkey,
                        isSigner: false,
                        isWritable: true
                    }, {
                        pubkey: authorizedPubkey,
                        isSigner: true,
                        isWritable: false
                    } ],
                    programId: this.programId,
                    data
                });
            }
            static split(params) {
                const transaction = new Transaction;
                transaction.add(SystemProgram.createAccount({
                    fromPubkey: params.authorizedPubkey,
                    newAccountPubkey: params.splitStakePubkey,
                    lamports: 0,
                    space: this.space,
                    programId: this.programId
                }));
                return transaction.add(this.splitInstruction(params));
            }
            static splitWithSeed(params) {
                const {stakePubkey, authorizedPubkey, splitStakePubkey, basePubkey, seed, lamports} = params;
                const transaction = new Transaction;
                transaction.add(SystemProgram.allocate({
                    accountPubkey: splitStakePubkey,
                    basePubkey,
                    seed,
                    space: this.space,
                    programId: this.programId
                }));
                return transaction.add(this.splitInstruction({
                    stakePubkey,
                    authorizedPubkey,
                    splitStakePubkey,
                    lamports
                }));
            }
            static merge(params) {
                const {stakePubkey, sourceStakePubKey, authorizedPubkey} = params;
                const type = STAKE_INSTRUCTION_LAYOUTS.Merge;
                const data = encodeData(type);
                return (new Transaction).add({
                    keys: [ {
                        pubkey: stakePubkey,
                        isSigner: false,
                        isWritable: true
                    }, {
                        pubkey: sourceStakePubKey,
                        isSigner: false,
                        isWritable: true
                    }, {
                        pubkey: SYSVAR_CLOCK_PUBKEY,
                        isSigner: false,
                        isWritable: false
                    }, {
                        pubkey: SYSVAR_STAKE_HISTORY_PUBKEY,
                        isSigner: false,
                        isWritable: false
                    }, {
                        pubkey: authorizedPubkey,
                        isSigner: true,
                        isWritable: false
                    } ],
                    programId: this.programId,
                    data
                });
            }
            static withdraw(params) {
                const {stakePubkey, authorizedPubkey, toPubkey, lamports, custodianPubkey} = params;
                const type = STAKE_INSTRUCTION_LAYOUTS.Withdraw;
                const data = encodeData(type, {
                    lamports
                });
                const keys = [ {
                    pubkey: stakePubkey,
                    isSigner: false,
                    isWritable: true
                }, {
                    pubkey: toPubkey,
                    isSigner: false,
                    isWritable: true
                }, {
                    pubkey: SYSVAR_CLOCK_PUBKEY,
                    isSigner: false,
                    isWritable: false
                }, {
                    pubkey: SYSVAR_STAKE_HISTORY_PUBKEY,
                    isSigner: false,
                    isWritable: false
                }, {
                    pubkey: authorizedPubkey,
                    isSigner: true,
                    isWritable: false
                } ];
                if (custodianPubkey) keys.push({
                    pubkey: custodianPubkey,
                    isSigner: true,
                    isWritable: false
                });
                return (new Transaction).add({
                    keys,
                    programId: this.programId,
                    data
                });
            }
            static deactivate(params) {
                const {stakePubkey, authorizedPubkey} = params;
                const type = STAKE_INSTRUCTION_LAYOUTS.Deactivate;
                const data = encodeData(type);
                return (new Transaction).add({
                    keys: [ {
                        pubkey: stakePubkey,
                        isSigner: false,
                        isWritable: true
                    }, {
                        pubkey: SYSVAR_CLOCK_PUBKEY,
                        isSigner: false,
                        isWritable: false
                    }, {
                        pubkey: authorizedPubkey,
                        isSigner: true,
                        isWritable: false
                    } ],
                    programId: this.programId,
                    data
                });
            }
        }
        StakeProgram.programId = new PublicKey("Stake11111111111111111111111111111111111111");
        StakeProgram.space = 200;
        const VOTE_INSTRUCTION_LAYOUTS = Object.freeze({
            InitializeAccount: {
                index: 0,
                layout: Layout.w3([ Layout.DH("instruction"), voteInit() ])
            },
            Authorize: {
                index: 1,
                layout: Layout.w3([ Layout.DH("instruction"), publicKey("newAuthorized"), Layout.DH("voteAuthorizationType") ])
            },
            Withdraw: {
                index: 3,
                layout: Layout.w3([ Layout.DH("instruction"), Layout.Wg("lamports") ])
            },
            AuthorizeWithSeed: {
                index: 10,
                layout: Layout.w3([ Layout.DH("instruction"), voteAuthorizeWithSeedArgs() ])
            }
        });
        Object.freeze({
            Voter: {
                index: 0
            },
            Withdrawer: {
                index: 1
            }
        });
        class VoteProgram {
            constructor() {}
            static initializeAccount(params) {
                const {votePubkey, nodePubkey, voteInit} = params;
                const type = VOTE_INSTRUCTION_LAYOUTS.InitializeAccount;
                const data = encodeData(type, {
                    voteInit: {
                        nodePubkey: toBuffer(voteInit.nodePubkey.toBuffer()),
                        authorizedVoter: toBuffer(voteInit.authorizedVoter.toBuffer()),
                        authorizedWithdrawer: toBuffer(voteInit.authorizedWithdrawer.toBuffer()),
                        commission: voteInit.commission
                    }
                });
                const instructionData = {
                    keys: [ {
                        pubkey: votePubkey,
                        isSigner: false,
                        isWritable: true
                    }, {
                        pubkey: SYSVAR_RENT_PUBKEY,
                        isSigner: false,
                        isWritable: false
                    }, {
                        pubkey: SYSVAR_CLOCK_PUBKEY,
                        isSigner: false,
                        isWritable: false
                    }, {
                        pubkey: nodePubkey,
                        isSigner: true,
                        isWritable: false
                    } ],
                    programId: this.programId,
                    data
                };
                return new TransactionInstruction(instructionData);
            }
            static createAccount(params) {
                const transaction = new Transaction;
                transaction.add(SystemProgram.createAccount({
                    fromPubkey: params.fromPubkey,
                    newAccountPubkey: params.votePubkey,
                    lamports: params.lamports,
                    space: this.space,
                    programId: this.programId
                }));
                return transaction.add(this.initializeAccount({
                    votePubkey: params.votePubkey,
                    nodePubkey: params.voteInit.nodePubkey,
                    voteInit: params.voteInit
                }));
            }
            static authorize(params) {
                const {votePubkey, authorizedPubkey, newAuthorizedPubkey, voteAuthorizationType} = params;
                const type = VOTE_INSTRUCTION_LAYOUTS.Authorize;
                const data = encodeData(type, {
                    newAuthorized: toBuffer(newAuthorizedPubkey.toBuffer()),
                    voteAuthorizationType: voteAuthorizationType.index
                });
                const keys = [ {
                    pubkey: votePubkey,
                    isSigner: false,
                    isWritable: true
                }, {
                    pubkey: SYSVAR_CLOCK_PUBKEY,
                    isSigner: false,
                    isWritable: false
                }, {
                    pubkey: authorizedPubkey,
                    isSigner: true,
                    isWritable: false
                } ];
                return (new Transaction).add({
                    keys,
                    programId: this.programId,
                    data
                });
            }
            static authorizeWithSeed(params) {
                const {currentAuthorityDerivedKeyBasePubkey, currentAuthorityDerivedKeyOwnerPubkey, currentAuthorityDerivedKeySeed, newAuthorizedPubkey, voteAuthorizationType, votePubkey} = params;
                const type = VOTE_INSTRUCTION_LAYOUTS.AuthorizeWithSeed;
                const data = encodeData(type, {
                    voteAuthorizeWithSeedArgs: {
                        currentAuthorityDerivedKeyOwnerPubkey: toBuffer(currentAuthorityDerivedKeyOwnerPubkey.toBuffer()),
                        currentAuthorityDerivedKeySeed,
                        newAuthorized: toBuffer(newAuthorizedPubkey.toBuffer()),
                        voteAuthorizationType: voteAuthorizationType.index
                    }
                });
                const keys = [ {
                    pubkey: votePubkey,
                    isSigner: false,
                    isWritable: true
                }, {
                    pubkey: SYSVAR_CLOCK_PUBKEY,
                    isSigner: false,
                    isWritable: false
                }, {
                    pubkey: currentAuthorityDerivedKeyBasePubkey,
                    isSigner: true,
                    isWritable: false
                } ];
                return (new Transaction).add({
                    keys,
                    programId: this.programId,
                    data
                });
            }
            static withdraw(params) {
                const {votePubkey, authorizedWithdrawerPubkey, lamports, toPubkey} = params;
                const type = VOTE_INSTRUCTION_LAYOUTS.Withdraw;
                const data = encodeData(type, {
                    lamports
                });
                const keys = [ {
                    pubkey: votePubkey,
                    isSigner: false,
                    isWritable: true
                }, {
                    pubkey: toPubkey,
                    isSigner: false,
                    isWritable: true
                }, {
                    pubkey: authorizedWithdrawerPubkey,
                    isSigner: true,
                    isWritable: false
                } ];
                return (new Transaction).add({
                    keys,
                    programId: this.programId,
                    data
                });
            }
            static safeWithdraw(params, currentVoteAccountBalance, rentExemptMinimum) {
                if (params.lamports > currentVoteAccountBalance - rentExemptMinimum) throw new Error("Withdraw will leave vote account with insuffcient funds.");
                return VoteProgram.withdraw(params);
            }
        }
        VoteProgram.programId = new PublicKey("Vote111111111111111111111111111111111111111");
        VoteProgram.space = 3731;
        new PublicKey("Va1idator1nfo111111111111111111111111111111");
        type({
            name: string(),
            website: optional(string()),
            details: optional(string()),
            keybaseUsername: optional(string())
        });
        new PublicKey("Vote111111111111111111111111111111111111111");
        Layout.w3([ publicKey("nodePubkey"), publicKey("authorizedWithdrawer"), Layout.u8("commission"), Layout.I0(), Layout.O6(Layout.w3([ Layout.I0("slot"), Layout.DH("confirmationCount") ]), Layout.cY(Layout.DH(), -8), "votes"), Layout.u8("rootSlotValid"), Layout.I0("rootSlot"), Layout.I0(), Layout.O6(Layout.w3([ Layout.I0("epoch"), publicKey("authorizedVoter") ]), Layout.cY(Layout.DH(), -8), "authorizedVoters"), Layout.w3([ Layout.O6(Layout.w3([ publicKey("authorizedPubkey"), Layout.I0("epochOfLastAuthorizedSwitch"), Layout.I0("targetEpoch") ]), 32, "buf"), Layout.I0("idx"), Layout.u8("isEmpty") ], "priorVoters"), Layout.I0(), Layout.O6(Layout.w3([ Layout.I0("epoch"), Layout.I0("credits"), Layout.I0("prevCredits") ]), Layout.cY(Layout.DH(), -8), "epochCredits"), Layout.w3([ Layout.I0("slot"), Layout.I0("timestamp") ], "lastTimestamp") ]);
        const wallet = Keypair.generate();
        console.log(wallet);
        const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
        console.log(connection);
        const soundOn = document.querySelector(".soundToggler__itemOn");
        const soundOff = document.querySelector(".soundToggler__itemOff");
        const phaseOne = document.querySelector(".mainContent__phaseOne");
        const phaseTwo = document.querySelector(".mainContent__phaseTwo");
        const startFarm = document.querySelector(".mainContent__startBtn");
        const stopFarm = document.querySelector(".mainContent__backBtn");
        const sayCat = document.querySelector(".mainContent__sayBtn");
        const catIdle = document.getElementById("catIdle");
        const catActive = document.getElementById("catActive");
        const burger = document.querySelector(".header__mobileBurger-btn");
        const mobileMenu = document.querySelector(".header__mobileMenu");
        const burgerLink = document.querySelector(".header__mobileMenu-links");
        let audio = new Audio("meow.mp3");
        function soundPlay() {
            audio.play();
        }
        function toggleMuteAllSounds() {
            audio.muted = !audio.muted;
        }
        if (soundOn) soundOn.addEventListener("click", (function(e) {
            soundOn.classList.remove("_active");
            soundOn.classList.add("_hide");
            soundOff.classList.remove("_hide");
            soundOff.classList.add("_active");
            toggleMuteAllSounds();
        }));
        if (soundOff) soundOff.addEventListener("click", (function(e) {
            soundOn.classList.add("_active");
            soundOn.classList.remove("_hide");
            soundOff.classList.add("_hide");
            soundOff.classList.remove("_active");
            toggleMuteAllSounds();
        }));
        if (startFarm) startFarm.addEventListener("click", (function(e) {
            phaseTwo.classList.add("_active");
            phaseOne.classList.add("_hide");
            coinLogic();
        }));
        if (stopFarm) stopFarm.addEventListener("click", (function(e) {
            phaseTwo.classList.remove("_active");
            phaseOne.classList.remove("_hide");
            catActive.classList.remove("_active");
            catIdle.classList.remove("_hide");
            catActive.classList.add("_hide");
            catIdle.classList.add("_active");
        }));
        if (burger) burger.addEventListener("click", (function(e) {
            burger.classList.toggle("is-active");
            e.stopPropagation();
            mobileMenu.classList.toggle("_active");
        }));
        document.addEventListener("click", (function(event) {
            if (event.target !== mobileMenu) {
                burger.classList.remove("is-active");
                mobileMenu.classList.remove("_active");
            }
        }));
        if (burgerLink) burgerLink.addEventListener("click", (function(e) {
            burger.classList.remove("is-active");
            mobileMenu.classList.remove("_active");
        }));
        parseInt(document.getElementById("maximumEnergy").innerHTML);
        let currEnergy = parseInt(document.getElementById("energyCount").innerHTML);
        let currCoins = parseInt(document.getElementById("coinAmount").innerHTML);
        document.getElementById("filledBar");
        parseInt(document.getElementById("filledBar").max);
        let energyStatus = parseInt(document.getElementById("filledBar").value);
        let coinPerClick = 1;
        energyStatus = currEnergy;
        currEnergy = energyStatus;
        let enValue = energyStatus;
        function coinLogic() {
            sayCat.addEventListener("click", (function() {
                catActive.classList.remove("_hide");
                catActive.classList.add("_active");
                catIdle.classList.add("_hide");
                catIdle.classList.remove("_active");
                document.getElementById("energyCount").innerHTML = currEnergy -= coinPerClick;
                document.getElementById("filledBar").value = enValue -= coinPerClick;
                document.getElementById("coinAmount").innerHTML = currCoins += coinPerClick;
                soundPlay();
            }));
        }
        window["FLS"] = true;
        isWebp();
    })();
})();